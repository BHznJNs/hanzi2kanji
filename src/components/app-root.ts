import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { Ref, ref } from 'lit/directives/ref.js'
import { ResultView } from './result-view'
import { NotationToggleEvent, SearchEvent } from '../utils/events'

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

  private handleSearchEvent(event: SearchEvent) {
    const { searchQuery } = event.detail
    this.resultViewRef.value!.dispatchEvent(new SearchEvent(searchQuery))
    this.showResult = true
  }

  private handleNotationToggleEvent(event: NotationToggleEvent) {
    this.resultViewRef.value!.hiraganaMode = event.detail.hiraganaMode
    this.resultViewRef.value!.romajiMode = event.detail.romajiMode
  }

  render() {
    return html`
      <nav-bar
        @notation-toggle=${this.handleNotationToggleEvent}
        .showResult=${this.showResult}
      ></nav-bar>
      <input-box
        .showResult=${this.showResult}
        @search=${this.handleSearchEvent}
        @clear=${() => this.showResult = false}
      ></input-box>
      <result-view
        ${ref(this.resultViewRef)}
        .showResult=${this.showResult}
      ></result-view>
    `
  }
}
