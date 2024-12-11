import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Task } from '@lit/task'
import charToUtf16beHex from '../utils/charToUtf16beHex'
import { dictionary } from '../utils/loadDictionary'
import kana2romaji from '../utils/kana2romaji'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { actionBtnStyles, linkStyles, rubyStyles } from '../global-css'

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
}
interface PronunciationData {
  kun: string[]
  on: string[]
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
      background-color: var(--character-bd-color);
    }
    .vertical-line {
      width: 2px;
      height: 100%;
      background-color: #e5e7eb;
    }
    .character {
      position: relative;
      width: 10rem;
      line-height: 1;
      font-size: 10rem;
      font-family: var(--chinese-serif-font);
      user-select: none;
    }

    .character-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .informations {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      height: fit-content;
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

  private loadPronunciation = new Task(this, {
    task: async ([character], {signal}) => {
      const res = await fetch(`/characters/${character}.json`, { signal })
      if (!res.ok) throw new Error(`Character data loading error: ${res.status}.`)
      const data = await res.json() as unknown as CharacterData
      return { on: data.on, kun: data.kun } as PronunciationData
    },
    args: () => [this.character]
  })

  private rubyElementFactory(kanas: String) {
    const converted = kana2romaji(kanas)
    return `
      <ruby data-notation="${converted}">${kanas}
        <rp>(</rp>
        <rt>${converted}</rt>
        <rp>)</rp>
      </ruby>
    `
  }

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
            <button class="action-btn" @click="${this.copyCharacter}">📋 复制</button>
          </div>
        </div>

        <div class="informations">
          ${this.loadPronunciation.render({
            pending: () => html``,
            complete: (pronunciations: PronunciationData) => html`
              <div class="kun">训读：${pronunciations.kun ? unsafeHTML(pronunciations.kun.map(this.rubyElementFactory).join('、')) : '無'}</div>
              <div class="on">音读：${pronunciations.on ? unsafeHTML(pronunciations.on.map(this.rubyElementFactory).join('、')) : '無'}</div>
            `,
            error: () => html`<p>发音信息加载失败，请重试。</p>`
          })}
        </div>
      </div>
      <h2 class="external-link-title">相关搜索（按照国内可访问性排序）：</h2>
      <div class="external-links">
        <a class="link" target="blank_" href="https://www.japandict.com/?s=${this.character}">JapanDict 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://www.weblio.jp/content/${this.character}">Weblio辞書 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://jisho.org/search/${this.character}">Jisho 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://takoboto.jp/?q=${this.character}">TAKOBOTO 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://app.kanjialive.com/${this.character}">Kanji alive 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://dictionary.goo.ne.jp/srch/all/${this.character}/m0u/">goo辞書 搜索：${this.character}</a>
      </div>
    `
  }
}

@customElement('result-view')
export class ResultView extends LitElement {
  static styles = css`
    :host {
      padding: 0 4rem 4rem;
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
      box-shadow: var(--shadow-sm);
    }
    .scroll-view {
      width: 100%;
      height: 100%;
      padding: 2rem;
      overflow-y: auto;
      box-sizing: border-box;
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

  lastSearched: string = ''
  @property({type: Array})
  searchResult: string[] | typeof SEARCH_NOT_FOUND = []
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
            //  : this.searchResult.map(charResultFactory)
          }
        </div>
      </div>
    `
  }
}
