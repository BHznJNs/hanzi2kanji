import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import debounce from '../utils/debounce.js'
import { imgDarkInvert } from '../global-css.js'
import { ref, Ref } from 'lit/directives/ref.js'
import searchEventFactory from '../factories/searchEventFactory.js'

@customElement('input-box')
export class InputBox extends LitElement {
  static styles = [css`
    :host {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      padding: 1rem;
      margin-bottom: 8rem;
      justify-self: center;
      align-self: center;
      transition: margin .6s;
    }
    :host([show-result]) {
      margin-bottom: 0;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      margin: 1rem auto;
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

    input {
      max-width: 12rem;
      padding: .8rem 1.6rem .8rem 0;
      font-size: 1rem;
      color: var(--default-tx-color);
      background-color: transparent;
      border: none;
      outline: none;
    }
    input::placeholder {
      color: var(--placeholder-color);
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

    .icon {
      margin: 0 .4rem 0 .8rem;
      font-size: 0;
      opacity: .4;
      user-select: none;
    }
  `, imgDarkInvert]

  private inputRef: Ref<HTMLInputElement> = ref()
  private debouncedInputHandler = debounce(() => {
    const cjCharPattern = /^[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]+$/u
    const searchQuery = this.inputRef.value!.value
    if (!cjCharPattern.test(searchQuery)) return
    this.dispatchEvent(searchEventFactory(searchQuery))
  }, 100)

  render() {
    return html`
      <div class="logo">
        <img src="/favicon.svg" />
      </div>
      <div class="input-wrapper">
        <span class="icon">
          <img class="dark-invert" src="/search.svg" />
        </span>
        <input
          type="search"
          placeholder="在此输入要搜索的汉字"
          ${ref(this.inputRef)}
          @input="${this.debouncedInputHandler}"
        />
      </div>
    `
  }
}
