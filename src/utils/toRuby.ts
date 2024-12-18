import kana2romaji from "./kana2romaji";

export function rubyFactory(text: string, notation?: string): string {
  if (notation === undefined) {
    return `<span>${text}</span>`
  }
  return `
    <ruby data-notation="${notation}">${text}
      <rp>(</rp>
      <rt>${notation}</rt>
      <rp>)</rp>
    </ruby>
  `
}

export function kana2ruby(kanas: string): string {
  const converted = kana2romaji(kanas)
  return rubyFactory(kanas, converted)
}

export function furigana2ruby(text: string): string {
  const rubyRegex = /\[([^\|]+)\|([^\]]+)\]/g
  const result = text.replace(rubyRegex, (_match, kanji, reading) =>
    rubyFactory(kanji, reading.split('|').join('')))
  return result
}

// console.log(convertToRuby("[鷹|たか]は[鋭|するど]い[目|め]を[持|も]っている。"))
// console.log(convertToRuby("[一本|いち|ほん]の[矢|や]が[鷹|たか]を[貫通|つらぬき|とお]した。"))
