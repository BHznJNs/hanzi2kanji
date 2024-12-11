import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import * as themeController from '../themeController.ts'
import { imgDarkInvert } from '../global-css.ts'

@customElement('theme-toggle')
export class ThemeToggle extends LitElement {
  static styles = [css`
  :host {
    margin-left: .5rem;
  }
  button {
    position: relative;
    padding: .4rem .6rem;
    background: var(--theme-toggle-bg-color);
    border: 2px solid var(--theme-toggle-bd-color);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color .3s, border-color .3s;
  }

  button:hover {
    background-color: var(--theme-toggle-hovered-bg-color);
  }
  button:focus-visible {
    outline: var(--outline-style);
  }

  .icon-light,
  .icon-dark,
  .icon-auto {
    width: 18px;
    height: 18px;
    transform: rotate(-90deg) scale(0);
    transition: all 0.3s ease;
  }

  .icon-light {
    transform: rotate(0deg) scale(0);
  }
  .icon-dark, .icon-auto {
    position: absolute;
    left: .6rem;
  }

  :host([light]) .icon-light {
    transform: rotate(0deg) scale(1);
  }
  :host([dark]) .icon-dark {
    transform: rotate(0deg) scale(1);
  }
  :host([auto]) .icon-auto {
    transform: rotate(0deg) scale(1);
  }

  .mode-name {
    color: var(--default-tx-color);
    margin-left: .4rem;
    transition: color .3s;
  }`, imgDarkInvert]

  @property({type: String})
  themeName = themeController.themeNameMap.get(themeController.getTheme())

  constructor() {
    super()
    themeController.appendThemeToggleCallback((theme: themeController.Theme) => {
      this.themeName = themeController.themeNameMap.get(theme)
      this.toggleAttribute('light', theme === themeController.Theme.light)
      this.toggleAttribute('dark' , theme === themeController.Theme.dark)
      this.toggleAttribute('auto' , theme === themeController.Theme.auto)
    })
  }

  private toggleTheme() {
    themeController.toggleTheme()
  }

  render() {
    return html`
    <button @click=${this.toggleTheme}>
      <img class="icon-light dark-invert" src="/light_mode.svg" />
      <img class="icon-dark dark-invert"  src="/dark_mode.svg" />
      <img class="icon-auto dark-invert"  src="/auto_mode.svg" />
      <span class="mode-name">${ this.themeName }</span>
    </button>
    `
  }
}
