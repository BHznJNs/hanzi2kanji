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

    img {
      width: 20px;
      height: 20px;
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
