import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import * as themeController from '../themeController.ts'

@customElement('theme-toggle')
export class ThemeToggle extends LitElement {
  static styles = css`
  :host {
    margin-left: .5rem;
  }
  button {
    position: relative;
    padding: 0.5rem;
    background: var(--allpage-bg-color);
    border: 2px solid var(--btn-bd-color);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
  }

  button:hover {
    background-color: var(--hovered-bg-color);
  }

  .icon-light,
  .icon-dark {
    width: 18px;
    height: 18px;
    transition: all 0.3s ease;
  }

  .icon-light {
    transform: rotate(0) scale(1);
  }

  .icon-dark {
    position: absolute;
    transform: rotate(90deg) scale(0);
  }

  :host([dark]) .icon-light {
    transform: rotate(-90deg) scale(0);
  }

  :host([dark]) .icon-dark {
    filter: invert(1);
    transform: rotate(0deg) scale(1);
  }
  `

  constructor() {
    super()
    themeController.appendThemeToggleCallback((isDarkMode) => {
      this.toggleAttribute('dark', isDarkMode)
    })
  }

  toggleTheme() {
    themeController.toggleTheme()
  }

  render() {
    return html`
    <button @click=${this.toggleTheme}>
      <img class="icon-light" src="/light_mode.svg" />
      <img class="icon-dark" src="/dark_mode.svg" />
    </button>
    `
  }
}
