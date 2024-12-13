import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import debounce from '../utils/debounce.js'
import { imgDarkInvert } from '../global-css.js'
import { ref, Ref } from 'lit/directives/ref.js'
import searchEventFactory from '../factories/searchEventFactory.js'
import { showResultProperty } from './app-root.js'

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
                  grid-template-columns .3s .3s;
    }
    :host([show-result]) {
      margin-bottom: 0;
      grid-template-columns: auto 1fr;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.2rem;
      margin: 0 1.25rem;
    }

    .logo {
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
      transition: padding .3s;
    }
    input::placeholder {
      color: var(--placeholder-color);
    }
    input::-webkit-search-cancel-button {
      -webkit-appearance: none;
      display: none;
    }

    :host([show-result]) input {
      padding-top: .6rem;
      padding-bottom: .6rem;
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
    this.dispatchEvent(searchEventFactory(searchQuery))
  }, 100)

  // debug
  // firstUpdated() {
  //   this.dispatchEvent(searchEventFactory("飞"))
  // }

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
            ${ref(this.inputRef)}
            @input=${this.debouncedInputHandler}
          />
          <button class="icon clear">
            <img class="dark-invert" src="/clear.svg" />
          </button>
        </div>
      </div>
    `
  }
}
