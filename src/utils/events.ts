export class SearchEvent extends CustomEvent<{
  searchQuery: string
}> {
  constructor(searchQuery: string) {
    super("search", {
      detail: { searchQuery },
      bubbles: true,
      composed: true,
    })
  }
}

export class NotationToggleEvent extends CustomEvent<{
  hiraganaMode: boolean
  romajiMode: boolean
}> {
  constructor(hiraganaMode: boolean, romajiMode: boolean) {
    super("notation-toggle", {
      detail: { hiraganaMode, romajiMode },
      bubbles: true,
      composed: true,
    })
  }
}
