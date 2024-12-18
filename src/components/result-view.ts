import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { Task } from '@lit/task'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { showResultProperty } from './app-root'
import { actionBtnStyles, linkStyles, rubyStyles } from '../global-css'
import charToUtf16beHex from '../utils/charToUtf16beHex'
import { dictionary } from '../utils/loadDictionary'
import { furigana2ruby, kana2ruby, rubyFactory } from '../utils/toRuby'

const SEARCH_NOT_FOUND = null

interface CharacterData {
  value: string
  strokes: string[]
  kun: string[]
  on: string[]
  frequency: number
  meanings: {
    lang: string
    values: string[]
  }[]
  variantsFamily: string
  radicals: {
    radical: string
    startStroke: number
    strokes: number
  }[]
  sentences: {
    content: string
    furigana: string
    translation_zh_CN: string
  }[]
  usages: {
    slug: string
    jlpt: any[]
    japanese: {
      word?: string
      reading: string
    }[]
  }[]
}

@customElement('result-item')
export class ResultItem extends LitElement {
  static styles = [css`
    .not-found {
      text-align: center;
    }

    .char-info {
      display: grid;
      column-gap: 1rem;
      grid-template-columns: auto 1fr;
    }

    .character-box {
      position: relative;
      background-color: var(--character-bg-color);
      padding: 8px;
      border: 2px solid var(--character-bd-color);
      width: fit-content;
      height: fit-content;
      box-shadow: var(--shadow-sm);
      border-radius: .25rem;
    }
    .horizontal-line-wrapper,
    .vertical-line-wrapper {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .horizontal-line {
      width: 100%;
      height: 2px;
      background-color: var(--character-crossing-color);
    }
    .vertical-line {
      width: 2px;
      height: 100%;
      background-color: var(--character-crossing-color);
    }
    .character {
      position: relative;
      width: 10rem;
      line-height: 1;
      font-size: 10rem;
      font-family: var(--chinese-serif-font);
    }
    .character-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    @media screen and (max-width: 680px) {
      .character {
        width: 7.5rem;
        font-size: 7.5rem;
      }
      .character-actions {
        gap: 0;
        justify-content: space-between;
      }
      .character-actions .action-btn {
        padding: .25rem .4rem;
        font-size: .825rem;
      }
    }

    .informations {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: baseline;
      height: fit-content;
    }
    .sentences .sentence:not(:first-of-type) {
      margin-top: 1rem;
    }

    .external-link-title {
      margin-top: 1.2rem;
      margin-bottom: .6rem;
    }
    .external-links {
      display: flex;
      flex-wrap: wrap;
      align-items: start;
      row-gap: .4rem;
      column-gap: 1rem;
    }

  `, linkStyles, rubyStyles, actionBtnStyles]

  @property({type: String})
  character = ''

  private loadCharData = new Task(this, {
    task: async ([character], {signal}) => {
      const res = await fetch(`/characters/${character}.json`, { signal })
      if (!res.ok) throw new Error(`Character data loading error: ${res.status}.`)
      const data = await res.json() as unknown as CharacterData
      return data
    },
    args: () => [this.character]
  })

  private copyCharacter() {
    navigator.clipboard.writeText(this.character)
  }

  render() {
    return html`
      <div class="char-info">
        <div class="character-container">
          <div class="character-box">
            <div class="horizontal-line-wrapper"><div class="horizontal-line"></div></div>
            <div class="vertical-line-wrapper"><div class="vertical-line"></div></div>
            <div class="character">${this.character}</div>
          </div>
          <div class="character-actions">
            <a class="action-btn" target="blank_" href="https://kanji.jitenon.jp/cat/search?getdata=${charToUtf16beHex(this.character)}&search=contain&how=漢字">📖 字典</a>
            <button class="action-btn" @click=${this.copyCharacter}>📋 复制</button>
          </div>
        </div>

        <div class="informations">
          ${this.loadCharData.render({
            pending: () => html`<p>加载中...</p>`,
            complete: (data: CharacterData) => {
              const fallbackText = '無'
              const splitText = '、'
              const pronunciationOn  = data.on  ? unsafeHTML(data.on .map(kana2ruby).join(splitText)) : fallbackText
              const pronunciationKun = data.kun ? unsafeHTML(data.kun.map(kana2ruby).join(splitText)) : fallbackText
              const usages = data.usages ? unsafeHTML(data.usages.map(({slug, japanese: [{ reading }]}) => rubyFactory(slug, [reading])).join('、')) : fallbackText
              const sentences = data.sentences ? unsafeHTML(data.sentences.map(({furigana, translation_zh_CN}) => `
                <div class="sentence">
                  <div class="origin">${furigana2ruby(furigana)}</div>
                  <div class="translation">${translation_zh_CN}</div>
                </div>
              `).join('')) : fallbackText
              return html`
                <div class="on" ><b>音読：</b>${pronunciationOn }</div>
                <div class="kun"><b>訓読：</b>${pronunciationKun}</div>
                <div class="usages"><b>用法：</b>${usages}</div>
                <div class="sentences"><b>例句：</b>${sentences}</div>
              `
            },
            error: () => html`<p>发音信息加载失败，请重试。</p>`
          })}
        </div>
      </div>
      <h2 class="external-link-title">相关搜索（按照国内可访问性排序）：</h2>
      <div class="external-links">
        <a class="link" target="blank_" href="https://www.japandict.com/?s=${this.character}">JapanDict 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://www.weblio.jp/content/${this.character}">Weblio辞書搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://www.kanjipedia.jp/search?k=${this.character}&kt=1&sk=leftHand">漢字ペディア搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://jisho.org/search/%23kanji${this.character}">Jisho 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://www.wanikani.com/kanji/${this.character}">WaniKani 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://takoboto.jp/?q=${this.character}">TAKOBOTO 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://tatoeba.org/en/sentences/search?from=jpn&has_audio=&native=&orphans=no&query=${this.character}&sort=relevance&to=cmn&unapproved=no&word_count_min=4">Tatoeba 例句搜索</a>
        <a class="link" target="blank_" href="https://app.kanjialive.com/${this.character}">Kanji alive 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://dictionary.goo.ne.jp/srch/all/${this.character}/m0u/">goo辞書搜索：${this.character}</a> <!-- can't be reached -->
      </div>
    `
  }
}

@customElement('result-view')
export class ResultView extends LitElement {
  static styles = css`
    :host {
      padding: 0 4rem 2rem;
      overflow: hidden;
      color: var(--default-tx-color);
      font-family: var(--text-font);
    }
    .container {
      width: 100%;
      height: 100%;
      background-color: var(--default-bg-color);
      border-radius: .6rem;
      overflow: hidden;
      box-shadow: var(--shadow-md-2);
    }
    .scroll-view {
      width: 100%;
      height: 100%;
      padding: 2rem;
      overflow-y: auto;
      box-sizing: border-box;
    }

    @media screen and (min-width: 1024px) {
      :host {
        padding: 0 8rem 3rem;
      }
    }
    @media screen and (max-width: 767px) {
      :host {
        padding: 0;
      }
      .container {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  `

  connectedCallback(): void {
    super.connectedCallback()
    this.addEventListener('search', this.searchEventHandler as EventListener)
  }
  disconnectedCallback() {
    this.removeEventListener('search', this.searchEventHandler as EventListener)
    super.disconnectedCallback()
  }

  @state()
  private lastSearched: string = ''
  @state()
  private searchResult: string[] | typeof SEARCH_NOT_FOUND = []
  @property(showResultProperty)
  /** @ts-ignored */
  private showResult = false

  private searchEventHandler(event: CustomEvent) {
    const { searchQuery } = event.detail
    if (searchQuery === this.lastSearched) return

    const dictionaryItem = dictionary.get(searchQuery[0])
    if (dictionaryItem === undefined) {
      this.searchResult = SEARCH_NOT_FOUND
    } else {
      this.searchResult = dictionaryItem
    }
    this.lastSearched = searchQuery
  }

  render() {
    const notFound = html`<h1 class="not-found">未找到对应漢字</h1>`
    return html`
      <div class="container">
        <div class="scroll-view">
          ${
            (this.searchResult === SEARCH_NOT_FOUND) 
             ? notFound
             : this.searchResult.map(ch => html`<result-item character="${ch}" />`)
          }
        </div>
      </div>
    `
  }
}
