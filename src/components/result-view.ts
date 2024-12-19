import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { Task } from '@lit/task'
import { unsafeHTML, UnsafeHTMLDirective } from 'lit/directives/unsafe-html.js'
import { showResultProperty } from './app-root'
import { actionBtnStyles, imgDarkInvert, linkStyles, rubyStyles } from '../global-css'
import charToUtf16beHex from '../utils/charToUtf16beHex'
import { dictionary } from '../utils/loadDictionary'
import { furigana2ruby, kana2ruby, rubyFactory } from '../utils/toRuby'
import { DirectiveResult } from 'lit/async-directive.js'
import kana2romaji from '../utils/kana2romaji'

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
    @media screen and (min-width: 800px) {
      .char-info {
        column-gap: 1.6rem;
      }
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
    .informations b {
      user-select: none;
      font-size: 1.025rem;
    }
    .usages {
      display: flex;
      flex-wrap: wrap;
      flex-basis: 100%;
      align-items: baseline;
      row-gap: .4rem;
    }
    .usages .usage-item {
      display: inline-flex;
      align-items: baseline;
    }
    .show-more-usage-btn {
      flex-basis: 100%;
    }
    .usages .usage-item:not(:first-of-type)::before {
      content: "、"
    }
    :host(:not([show-more-usage])) .usage-item:nth-child(n+6),
    :host([show-more-usage]) .show-more-usage-btn {
      display: none;
    }
    .show-more-usage-btn,
    .show-more-sentence-btn {
      display: flex;
      width: fit-content;
      align-items: center;
      user-select: none;
      cursor: pointer;
    }
    .show-more-sentence-btn {
      margin-top: .6rem;
    }
    .sentences b {
      display: block;
      margin-bottom: .2rem;
    }
    .sentences .sentence-list {
      display: flex;
      flex-direction: column;
      row-gap: .6rem;
    }
    :host(:not([show-more-sentence])) .sentence-list > .sentence:nth-child(n+3),
    :host([show-more-sentence]) .show-more-sentence-btn {
      display: none;
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

  `, imgDarkInvert, linkStyles, rubyStyles, actionBtnStyles]

  @property({type: String})
  character = ''
  @property({type: Boolean, attribute: 'show-more-usage', reflect: true})
  /** @ts-ignored */
  private showMoreUsage = false
  @property({type: Boolean, attribute: 'show-more-sentence', reflect: true})
  /** @ts-ignored */
  private showMoreSentence = false

  @property({type: Boolean})
  public hiraganaMode = false
  @property({type: Boolean})
  public romajiMode = false

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

  // [普通|ふ|つう]、アマチュアでは250ヤード[飛|と]べばすごい[飛距離|ひ|きょ|り]だと[言|い]われます。
  // [
  //   {
  //     "text": "普通",
  //     "reading": "ふつう",
  //   },
  //   {
  //     "text": "、",
  //     // 标点无需读音
  //   },
  //   {
  //     "text": "アマチュアでは",
  //     "reading": "アマチュアでは",
  //   },
  //   {
  //     "text": "250",
  //     // 数字无需读音
  //   },
  //   {
  //     "text": "ヤード",
  //     "reading": "ヤード",
  //   }
  //   // ...
  // ]

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
              const kanasFactory = (kanas: string) => `<span>${kanas}</span>`
              type TempHTML = string | DirectiveResult<typeof UnsafeHTMLDirective>
              let pronunciationOn: TempHTML  = fallbackText
              let pronunciationKun: TempHTML = fallbackText
              if (data.on) {
                if (this.hiraganaMode) {
                  pronunciationOn = data.on.map(kanasFactory).join(splitText)
                } else {
                  pronunciationOn = data.on.map(kana2ruby).join(splitText)
                }
              }
              if (data.kun) {
                if (this.hiraganaMode) {
                  pronunciationKun = data.on.map(kanasFactory).join(splitText)
                } else {
                  pronunciationKun = data.on.map(kana2ruby).join(splitText)
                }
              }
              pronunciationOn = unsafeHTML(pronunciationOn as string)
              pronunciationKun = unsafeHTML(pronunciationKun as string)

              let usages: TempHTML = fallbackText
              if (data.usages) {
                usages = unsafeHTML(data.usages.map(({slug, japanese: [{ reading }]}) => {
                  const kanaOrRomajiReading = this.hiraganaMode ? reading : kana2romaji(reading)
                  return `
                    <span class="usage-item">
                      ${rubyFactory(slug, kanaOrRomajiReading)}
                    </span>
                  `
                }).join(''))
              }

              let sentences: TempHTML = fallbackText
              if (sentences) {
                sentences = unsafeHTML(data.sentences.map(({furigana, translation_zh_CN}) => {
                  return `
                    <div class="sentence">
                      <div class="origin">${furigana2ruby(furigana)}</div>
                      <div class="translation">${translation_zh_CN}</div>
                    </div>
                  `
                }).join(''))
              }
              return html`
                <div class="on" ><b>音読：</b>${pronunciationOn }</div>
                <div class="kun"><b>訓読：</b>${pronunciationKun}</div>
                <div class="usages">
                  <b>用法：</b>
                  ${usages}
                  ${data.usages && data.usages.length > 4 && html`
                    <div
                      class="show-more-usage-btn"
                      @click=${() => this.showMoreUsage = true}>
                      展开更多 <img class="dark-invert" src="/down.svg" />
                    </div>
                  `}
                </div>
                <div class="sentences">
                  <b>例句：</b>
                  <div class="sentence-list">${sentences}</div>
                  ${data.sentences && data.sentences.length > 2 && html`
                    <div
                      class="show-more-sentence-btn"
                      @click=${() => this.showMoreSentence = true}>
                      展开更多 <img class="dark-invert" src="/down.svg" />
                    </div>
                  `}
                </div>
            `},
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
      display: flex;
      flex-direction: column;
      row-gap: 4rem;
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

  @property({type: Boolean})
  public hiraganaMode = false
  @property({type: Boolean})
  public romajiMode = false

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
             : this.searchResult.map(ch => html`
              <result-item
                character=${ch}
                .hiraganaMode=${this.hiraganaMode}
                .romajiMode=${this.romajiMode}
              ></result-item>
            `)
          }
        </div>
      </div>
    `
  }
}