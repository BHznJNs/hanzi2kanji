import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { imgDarkInvert } from '../global-css'

@customElement('nav-bar')
export class NavBar extends LitElement {
  static styles = [css`
    :host {
      position: absolute;
      top: 0; right: 0;
      display: flex;
      align-items: center;
      gap: .4rem;
      transform: translateX(-1rem) translateY(.6rem);
      transition: transform .3s .3s;
    }
    :host([show-result]) {
      transform: translateX(-1rem) translateY(1rem);
    }

    a {
      width: 22px;
      height: 22px;
      padding: 2px;
      border-radius: 10px;
      box-sizing: border-box;
      transition: width .3s .3s,
                  height .3s .3s;
    }
    a:focus-visible {
      outline: var(--outline-style);
    }
    :host([show-result]) a {
      width: 24px;
      height: 24px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  `, imgDarkInvert]

  @property({type: Boolean, attribute: 'show-result', reflect: true})
  showResult = false

  render() {
    return html`
      <a href="https://github.com/BHznJNs/hanzi2kanji">
        <img class="dark-invert" src="/github-mark.svg" />
      </a>
      <theme-toggle .expand=${this.showResult}></theme-toggle>
      <drop-down .expand=${this.showResult}></drop-down>
    `
  }
}
