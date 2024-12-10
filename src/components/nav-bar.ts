import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { imgDarkInvert } from '../global-css'

@customElement('nav-bar')
export class NavBar extends LitElement {
  static styles = [css`
    :host {
      position: absolute;
      top: .6rem;
      right: 1rem;
      display: flex;
      align-items: center;
      gap: .4rem;
    }

    a {
      width: 24px;
      height: 24px;
      padding: 2px;
      border-radius: 10px;
      box-sizing: border-box;
    }
    a:focus-visible {
      outline: var(--outline-style);
    }
    img {
      width: 100%;
      height: 100%;
    }
  `, imgDarkInvert]

  render() {
    return html`
      <a href="https://github.com/BHznJNs/hanzi2kanji">
        <img class="dark-invert" src="/github-mark.svg" />
      </a>
      <theme-toggle></theme-toggle>
    `
  }
}
