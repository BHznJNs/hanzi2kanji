import { AppRoot } from './components/app-root.ts'
import { NavBar } from './components/nav-bar.ts'
import { ThemeToggle } from './components/theme-toggle.ts'
import { InputBox } from './components/input-box.ts'
import { ResultView } from './components/result-view.ts'
import { DropDown } from './components/drop-down.ts'

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot
    'nav-bar': NavBar
    'drop-down': DropDown
    'theme-toggle': ThemeToggle
    'input-box': InputBox
    'result-view': ResultView
  }
}
