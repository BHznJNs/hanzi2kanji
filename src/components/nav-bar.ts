import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

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
      z-index: 1;
      transition: transform .45s .25s;
    }
    :host([show-result]) {
      transform: translateX(-1rem) translateY(1rem);
    }
  `]

  @property({type: Boolean, attribute: 'show-result', reflect: true})
  showResult = false

  render() {
    return html`
      <notation-toggle .expand=${this.showResult}></notation-toggle>
      <theme-toggle .expand=${this.showResult}></theme-toggle>
      <drop-down .expand=${this.showResult}></drop-down>
    `
  }
}
