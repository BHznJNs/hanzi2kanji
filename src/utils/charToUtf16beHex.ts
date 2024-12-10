export default function charToUtf16beHex(char: string) {
    const codePoint = char.codePointAt(0) as number

    const highByte = (codePoint >> 8) & 0xFF
    const lowByte = codePoint & 0xFF

    return highByte.toString(16).padStart(2, '0').toUpperCase() +
           lowByte.toString(16).padStart(2, '0').toUpperCase()
}
