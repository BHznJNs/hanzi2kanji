import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = css`
    #root {
      display: grid;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background-color: var(--allpage-bg-color);
      grid-template-rows: auto 0;
    }
  `

  render() {
    return html`
    <div id="root">
      <nav-bar></nav-bar>
      <slot></slot>
    </div>
    `
  }
}
