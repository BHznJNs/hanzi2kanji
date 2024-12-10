import { LitElement, TemplateResult, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Task } from '@lit/task'
import charToUtf16beHex from '../utils/charToUtf16beHex'
import { dictionary } from '../utils/loadDictionary'
import kana2romaji from '../utils/kana2romaji'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { linkStyles, rubyStyles } from '../global-css'

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
    .char-info {
      display: grid;
      grid-template-columns: auto 1fr;
    }
    .char-info .character {
      font-size: 10rem;
      font-family: var(--chinese-serif-font);
    }

    .external-links {
      display: flex;
      align-items: start;
      flex-direction: column;
      gap: .25rem;
    }

    .not-found {
      text-align: center;
    }
  `, linkStyles, rubyStyles]

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

  render() {
    return html`
      <div class="char-info">
        <div class="character">${this.character}</div>
        <div class="infomations">
          <div class="pronunciation">${this.loadPronunciation.render({
            pending: () => html``,
            complete: (pronunciations: PronunciationData) => {
              console.log(pronunciations.on.map(this.rubyElementFactory))
              return html`
              <div class="kun">训读：${pronunciations.kun ? unsafeHTML(pronunciations.kun.map(this.rubyElementFactory).join('、')) : '無'}</div>
              <div class="on">音读：${pronunciations.on ? unsafeHTML(pronunciations.on.map(this.rubyElementFactory).join('、')) : '無'}</div>
            `},
            error: () => html`<p>发音信息加载失败，请重试。</p>`
          })}</div>
        </div>
      </div>
      <h2>相关搜索</h2>
      <div class="external-links">
        <a target="blank_" href="https://www.japandict.com/?s=${this.character}">JapanDict 搜索：${this.character}</a>
        <a target="blank_" href="https://jisho.org/search/${this.character}">Jisho 搜索：${this.character}</a>
        <a target="blank_" href="https://www.weblio.jp/content/${this.character}">Weblio 搜索：${this.character}</a>
        <a target="blank_" href="https://app.kanjialive.com/${this.character}">KanjiAlive 搜索：${this.character}</a>
        <a target="blank_" href="https://kanji.jitenon.jp/cat/search?getdata=${charToUtf16beHex(this.character)}&search=contain&how=漢字">漢字辞典 搜索：${this.character}</a>
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
