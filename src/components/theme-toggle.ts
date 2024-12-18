import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import * as themeController from '../themeController.ts'
import { imgDarkInvert, normalBtnStyles } from '../global-css.ts'

@customElement('theme-toggle')
export class ThemeToggle extends LitElement {
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
  }

  .icon-light,
  .icon-dark,
  .icon-auto {
    width: 16px;
    height: 16px;
    transform: rotate(-90deg) scale(0);
    transition: transform .3s,
                width .3s .3s,
                height .3s .3s;
  }

  :host([expand]) .icon-light,
  :host([expand]) .icon-dark,
  :host([expand]) .icon-auto {
    width: 18px;
    height: 18px
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
  }`, normalBtnStyles, imgDarkInvert]

  @property({type: Boolean, reflect: true})
  /** @ts-ignored */
  private expand = false

  @state()
  private themeName = themeController.themeNameMap.get(themeController.getTheme())

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
      <button class="normal" @click=${this.toggleTheme}>
        <img class="icon-light dark-invert" src="/light_mode.svg" />
        <img class="icon-dark dark-invert"  src="/dark_mode.svg" />
        <img class="icon-auto dark-invert"  src="/auto_mode.svg" />
        <span class="mode-name">${ this.themeName }</span>
      </button>
    `
  }
}
