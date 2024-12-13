import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Ref, ref } from 'lit/directives/ref.js'
import { ResultView } from './result-view'
import searchEventFactory from '../factories/searchEventFactory'

export const showResultProperty = {type: Boolean, attribute: 'show-result', reflect: true}

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = css`
    :host {
      display: grid;
      row-gap: .5rem;
      grid-template-rows: auto 0fr;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background-color: var(--allpage-bg-color);
      transition: grid-template-rows .6s;
    }
    :host([show-result]) {
      grid-template-rows: auto 1fr;
    }
  `

  @property(showResultProperty)
  private showResult = false
  private resultViewRef: Ref<ResultView> = ref()

  private handleSearchEvent(event: CustomEvent) {
    const { searchQuery } = event.detail
    this.resultViewRef.value!.dispatchEvent(searchEventFactory(searchQuery))
    this.showResult = true
  }

  render() {
    return html`
      <nav-bar .showResult=${this.showResult}></nav-bar>
      <input-box
        .showResult=${this.showResult}
        @search=${this.handleSearchEvent}
      ></input-box>
      <result-view
        ${ref(this.resultViewRef)}
        .showResult=${this.showResult}
      ></result-view>
    `
  }
}
