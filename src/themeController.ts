export type ThemeToggleCallback = { (arg: Theme): any }
export enum Theme { light, dark, auto }

export const themeNameMap = new Map([
  [Theme.light, '日间'],
  [Theme.dark,  '夜间'],
  [Theme.auto,  '自动'],
])

function bodyClassToggler(theme: Theme) {
  function bodyClassSetter(isDarkTheme: boolean) {
    document.body.classList.toggle('dark' ,  isDarkTheme)
    document.body.classList.toggle('light', !isDarkTheme)
  }
  if (theme === Theme.auto) {
    bodyClassSetter(ThemeController.isPreferedDarkTheme)
  } else {
    bodyClassSetter(theme === Theme.dark)
  }
}

class ThemeController {
  static darkModeMediaQuery = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")
  themeToggleCallbacks: Array<ThemeToggleCallback> = [bodyClassToggler]
  theme = (Number(localStorage.getItem('theme')) || Theme.auto) as Theme

  constructor() {
    if (!ThemeController.darkModeMediaQuery) return
    ThemeController.darkModeMediaQuery
      .addEventListener('change', () => this.systemThemeToggleCallback())
    this.systemThemeToggleCallback()
    window.addEventListener('beforeunload', () => localStorage.setItem('theme', this.theme.toString()))
  }

  public static get isPreferedDarkTheme() : boolean {
    return ThemeController.darkModeMediaQuery.matches
  }

  manuallyToggle(force?: Theme) {
    if (force === undefined) {
      force = (this.theme + 1) % 3
    }
    this.theme = force
    for (const callback of this.themeToggleCallbacks) {
      callback(force)
    }
  }

  systemThemeToggleCallback() {
    for (const callback of this.themeToggleCallbacks) {
      callback(this.theme)
    }
  }
}

const instance = new ThemeController()
window.addEventListener('load', () => toggleTheme(instance.theme))

export function getTheme(): Theme {
  return instance.theme
}

export function isDarkTheme(): boolean {
  return instance.theme === Theme.dark ||
        (instance.theme === Theme.auto && ThemeController.isPreferedDarkTheme)
}

export function toggleTheme(force?: Theme): Theme {
  instance.manuallyToggle(force)
  return instance.theme
}

export function appendThemeToggleCallback(callback: ThemeToggleCallback) {
  instance.themeToggleCallbacks.push(callback)
}
