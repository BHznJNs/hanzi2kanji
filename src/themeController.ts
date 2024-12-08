export type ThemeToggleCallback = { (arg: boolean): any }

class ThemeController {
  static darkModeMediaQuery = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")
  themeToggleCallbacks: Array<ThemeToggleCallback> = []
  isActualDarkTheme = false

  constructor() {
    if (!ThemeController.darkModeMediaQuery) return
    ThemeController.darkModeMediaQuery
      .addEventListener('change', this.darkModeToggleHandler)
    this.darkModeToggleHandler()
    this.isActualDarkTheme = this.isPreferedDarkTheme
  }

  public get isPreferedDarkTheme() : boolean {
    return ThemeController.darkModeMediaQuery.matches
  }

  manuallyToggle(force = !this.isActualDarkTheme) {
    this.isActualDarkTheme = force
    for (const callback of this.themeToggleCallbacks) {
      callback(force)
    }
  }

  darkModeToggleHandler() {
    const isDarkMode = this.isPreferedDarkTheme
    this.isActualDarkTheme = isDarkMode
    for (const callback of this.themeToggleCallbacks) {
      callback(isDarkMode)
    }
  }
}

const instance = new ThemeController()

appendThemeToggleCallback(isDarkMode => {
  document.body.classList.toggle("dark", isDarkMode)
})

export function isDarkMode(): boolean {
  return instance.isActualDarkTheme
}

export function toggleTheme(force?: boolean): boolean {
  instance.manuallyToggle(force)
  return instance.isActualDarkTheme
}

export function appendThemeToggleCallback(callback: ThemeToggleCallback) {
  instance.themeToggleCallbacks.push(callback)
}
