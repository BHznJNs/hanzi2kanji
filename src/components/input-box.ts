import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ref, Ref } from 'lit/directives/ref.js'
import { imgDarkInvert } from '../global-css'
import { showResultProperty } from './app-root'
import debounce from '../utils/debounce.js'
import { SearchEvent } from '../utils/events'

@customElement('input-box')
export class InputBox extends LitElement {
  static styles = [css`
    :host {
      display: grid;
      grid-template-columns: auto 0fr;
      width: 100%;
      padding: .6rem 0 1rem;
      margin-bottom: 8rem;
      justify-self: center;
      align-self: center;
      transition: margin .6s,
                  grid-template-columns .45s;
    }
    :host([show-result]) {
      margin-bottom: 0;
      grid-template-columns: auto 1fr;
      transition: margin .6s,
                  grid-template-columns .45s .25s;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.2rem;
      margin: 0 1.25rem;
    }

    .logo {
      display: flex;
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 1.8rem;
      overflow: hidden;
      box-shadow: var(--shadow-md-1);
      user-select: none;
    }
    .logo img {
      width: 100%;
      height: 100%;
    }
    :host([show-result]) .logo {
      width: 3.2rem;
      height: 3.2rem;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      width: fit-content;
      border: 1px solid var(--search-box-bd-color);
      background-color: var(--search-box-color);
      box-shadow: var(--shadow-sm);
      border-radius: 1.5rem;
      overflow: hidden;
      transition: box-shadow .3s;
    }
    .input-wrapper:hover {
      background-color: var(--search-box-hovered-color);
    }
    .input-wrapper:focus-within {
      box-shadow: var(--shadow-md-1);
      background-color: var(--search-box-focused-color);
    }
    .input-wrapper .icon {
      font-size: 0;
      opacity: .4;
      user-select: none;
    }
    .icon.search {
      margin: 0 .4rem 0 .8rem;
    }
    .icon.clear {
      border-radius: 50%;
      cursor: pointer;
      padding: 2px;
      margin: 0 .8rem 0 .4rem;
      background-color: transparent;
      border: none;
      transition: background .3s;
    }
    .icon.clear:hover {
      background-color: var(--action-btn-hovered-bg-color);
    }

    input {
      max-width: 10rem;
      padding: .8rem 0;
      font-size: 1rem;
      color: var(--default-tx-color);
      background-color: transparent;
      border: none;
      outline: none;
      transition: max-width .45s,
                  padding .45s;
    }
    input::placeholder {
      color: var(--placeholder-color);
    }
    input::-webkit-search-cancel-button {
      -webkit-appearance: none;
      display: none;
    }

    :host([show-result]) input {
      max-width: 6rem;
      padding-top: .6rem;
      padding-bottom: .6rem;
      transition: max-width .3s,
                  padding .3s;
    }
    @media screen and (min-width: 1024px) {
      input {
        width: 12rem;
        max-width: 12rem;
      }
      :host([show-result]) input {
        max-width: 8rem;
      }
    }
    @media screen and (max-width: 767px) {
      input {
        max-width: 6rem;
      }
      :host([show-result]) input {
        max-width: 4rem;
      }
    }
  `, imgDarkInvert]

  @property(showResultProperty)
  /** @ts-ignored */
  private showResult = false

  private inputRef: Ref<HTMLInputElement> = ref()
  private debouncedInputHandler = debounce(() => {
    const cjCharPattern = /^[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]+$/u
    const searchQuery = this.inputRef.value!.value
    if (!cjCharPattern.test(searchQuery)) return
    this.dispatchEvent(new SearchEvent(searchQuery))
  }, 100)

  constructor() {
    super()
    window.addEventListener('load', () =>
      this.inputRef.value?.focus())
  }

  private clear() {
    this.inputRef.value!.value = ''
    this.dispatchEvent(new CustomEvent("clear"))
  }

  render() {
    return html`
      <div class="container">
        <div class="logo">
          <img src="/favicon.svg" />
        </div>
        <div class="input-wrapper">
          <span class="icon search">
            <img class="dark-invert" src="/search.svg" />
          </span>
          <input
            type="search"
            placeholder="要搜索的汉字"
            maxlength="6"
            ${ref(this.inputRef)}
            @input=${this.debouncedInputHandler}
          />
          <button class="icon clear" @click=${this.clear}>
            <img class="dark-invert" src="/clear.svg" />
          </button>
        </div>
      </div>
    `
  }
}
