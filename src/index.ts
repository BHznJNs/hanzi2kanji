import { AppRoot } from './components/app-root.ts'
import { NavBar } from './components/nav-bar.ts'
import { ThemeToggle } from './components/theme-toggle.ts'
import { InputBox } from './components/input-box.ts'
import { ResultView } from './components/result-view.ts'

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot
    'nav-bar': NavBar
    'theme-toggle': ThemeToggle
    'input-box': InputBox
    'result-view': ResultView
  }
}
