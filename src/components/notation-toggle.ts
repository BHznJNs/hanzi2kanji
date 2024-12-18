import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { normalBtnStyles } from '../global-css.ts'
import { NotationToggleEvent } from '../utils/events.ts'

@customElement('notation-toggle')
export class NotationToggle extends LitElement {
  static styles = [css`
  button {
    position: relative;
    padding: .4rem .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color .3s,
                border-color .3s,
                padding .3s .3s,
                font-size .3s .3s !important;
  }
  :host([expand]) button {
    padding: .6rem .75rem;
    font-size: .875rem;
    user-select: none;
  }
  .btn-text {
    display: flex;
    align-items: baseline;
    color: var(--default-tx-color);
  }
  .btn-text, .hiragana, .romaji {
    transition: transform .3s;
  }
  .hiragana {
    transform-origin: right bottom;
  }
  .romaji {
    transform-origin: left bottom;
  }
  :host([hiragana-mode]) .btn-text {
    transform: translateX(2px);
  }
  :host([romaji-mode]) .btn-text {
    transform: translateX(-2px);
  }
  :host([hiragana-mode]) .hiragana,
  :host([romaji-mode]) .romaji {
    transform: scale(1.25);
  }
  :host([hiragana-mode]) .romaji,
  :host([romaji-mode]) .hiragana {
    transform: scale(.85);
  }
  `, normalBtnStyles]

  @property({type: Boolean, reflect: true})
  /** @ts-ignored */
  private expand = false

  @property({type: Boolean, attribute: 'hiragana-mode', reflect: true})
  /** @ts-ignored */
  private hiraganaMode = JSON.parse(localStorage.getItem('hiragana-mode')) ?? true

  @property({type: Boolean, attribute: 'romaji-mode', reflect: true})
  /** @ts-ignored */
  private romajiMode = JSON.parse(localStorage.getItem('romaji-mode')) ?? false

  constructor() {
    super()
    if (this.hiraganaMode && this.romajiMode) {
      this.romajiMode = false
    }
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('hiragana-mode', this.hiraganaMode.toString())
      localStorage.setItem('romaji-mode', this.romajiMode.toString())
    })
    window.addEventListener('load', () =>
      this.dispatchEvent(new NotationToggleEvent(this.hiraganaMode, this.romajiMode)))
  }

  private toggle() {
      this.hiraganaMode = !this.hiraganaMode
      this.romajiMode = !this.hiraganaMode
      this.dispatchEvent(new NotationToggleEvent(this.hiraganaMode, this.romajiMode))
  }

  render() {
    return html`
      <button class="normal" @click=${this.toggle}>
        <div class="btn-text">
          <span class="hiragana">あ</span>
          /
          <span class="romaji">A</span>
        </div>
      </button>
    `
  }
}
