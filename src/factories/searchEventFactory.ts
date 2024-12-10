export default function searchEventFactory(searchQuery: string): CustomEvent {
  return new CustomEvent("search", {
    detail: { searchQuery },
    bubbles: true,
    composed: true,
  })
}
