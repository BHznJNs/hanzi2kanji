import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { InputBox } from './input-box'
import { Ref, ref } from 'lit/directives/ref.js'
import { ResultView } from './result-view'
import searchEventFactory from '../factories/searchEventFactory'

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = css`
    #root {
      display: grid;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background-color: var(--allpage-bg-color);
      grid-template-rows: auto 0fr;
      transition: grid-template-rows .6s;
    }
    :host([show-result]) #root {
      grid-template-rows: auto 1fr;
    }
  `

  inputBoxRef: Ref<InputBox> = ref()
  resultViewRef: Ref<ResultView> = ref()

  private handleSearchEvent(event: CustomEvent) {
    const { searchQuery } = event.detail
    this.resultViewRef.value!.dispatchEvent(searchEventFactory(searchQuery))

    this.setAttribute("show-result", "")
    this.inputBoxRef.value!.setAttribute("show-result", "")
  }

  render() {
    return html`
      <div id="root">
        <nav-bar></nav-bar>
        <input-box
          ${ref(this.inputBoxRef)}
          @search=${this.handleSearchEvent}
        ></input-box>
        <result-view
          ${ref(this.resultViewRef)}
        ></result-view>
      </div>
    `
  }
}
