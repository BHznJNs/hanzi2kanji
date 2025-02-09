import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { imgDarkInvert, normalBtnStyles } from "../global-css";

@customElement('drop-down')
export class DropDown extends LitElement {
  static styles = [css`
    :host {
      position: relative;
    }
    .dropped-container {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-20%);
      transition: opacity .3s,
                  transform .3s;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: .4rem .4rem;
      transition: background-color .3s,
                  border-color .3s,
                  padding .3s .3s !important;
    }
    button img {
      width: 16px;
      height: 16px;
      transition: width .3s .3s,
                  height .3s .3s;
    }
    :host([dropped]) .dropped-container {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    :host([expand]) button {
      padding: .6rem .6rem !important;
    }
    :host([expand]) button img {
      width: 18px;
      height: 18px;
    }
    .dropped {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 2px;
      border: solid 2px var(--dropdown-bd-color);
      border-radius: 6px;
      color: var(--default-tx-color);
      background-color: var(--dropdown-bg-color);
      box-shadow: var(--shadow-sm);
      font-family: var(--text-font);
      box-sizing: border-box;
    }
    :host([expand]) .dropped {
      box-shadow: var(--shadow-md-1);
    }
    .dropped a {
      color: inherit !important;
      text-decoration: none;
    }
    .dropped-item {
      padding: .4rem .8rem .4rem .5rem;
      list-style: none;
      cursor: pointer;
      border-radius: 4px;
      white-space: nowrap;
      text-align: center;
      user-select: none;
      transition: background .3s;
    }
    .dropped-item:hover {
      background-color: var(--dropdown-hovered-bg-color);
    }

    theme-toggle,
    notation-toggle {
      width: 100%;
      align-self: center;
      margin-bottom: .4rem;
    }
    @media screen and (min-width: 768px) {
      theme-toggle,
      notation-toggle {
        display: none;
      }
    }
  `, imgDarkInvert, normalBtnStyles]

  @property({type: Boolean, reflect: true})
  private dropped = false
  @property({type: Boolean, reflect: true})
  /** @ts-ignored */
  private expand = false

  render() {
    return html`
      <button
        class="normal"
        @click=${() => this.dropped = !this.dropped}
      >
        <img class="dark-invert" src="/more.svg" />
      </button>
      <div class="dropped-container">
        <ul class="dropped">
          <theme-toggle injected></theme-toggle>
          <notation-toggle injected></notation-toggle>
          <a href="https://github.com/BHznJNs/hanzi2kanji" target="blank_">
            <li class="dropped-item">🔗 源码</li>
          </a>
            <li class="dropped-item">🎁 捐赠</li>
          <a href="https://github.com/BHznJNs/hanzi2kanji?tab=readme-ov-file#-%E9%B8%A3%E8%B0%A2" target="blank_">
            <li class="dropped-item">👏 鸣谢</li>
          </a>
        </ul>
      </div>
    `
  }
}
