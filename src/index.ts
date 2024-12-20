import { AppRoot } from './components/app-root.ts'
import { NavBar } from './components/nav-bar.ts'
import { NotationToggle } from './components/notation-toggle.ts'
import { ThemeToggle } from './components/theme-toggle.ts'
import { InputBox } from './components/input-box.ts'
import { ResultView } from './components/result-view.ts'
import { DropDown } from './components/drop-down.ts'
import '@fontsource/noto-sans-jp'
import '@fontsource/noto-serif-jp'

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot
    'nav-bar': NavBar
    'drop-down': DropDown
    'notation-toggle': NotationToggle
    'theme-toggle': ThemeToggle
    'input-box': InputBox
    'result-view': ResultView
  }
}
