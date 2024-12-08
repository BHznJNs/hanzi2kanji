import { AppRoot } from './components/app-root.ts'
import { NavBar } from './components/nav-bar.ts'
import { InputBox } from './components/input-box.ts'
import { ThemeToggle } from './components/theme-toggle.ts'

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot
    'nav-bar': NavBar
    'theme-toggle': ThemeToggle
    'input-box': InputBox
  }
}
