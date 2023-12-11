export const useCodeExamplesText = () => {
    const fontFamilyArialSansSerif = `p {
    font-family: "Arial", sans-serif;
}`

    const fontSize24px = `p {
    font-size: 24px;
}`

    const fontWeightBold = `p {
    font-weight: bold;
}`
    const fontWeight100 = `p {
    font-weight: 100;
}`

    const textAlignCenter = `p {
    text-align: center;
}`
    const textAlignJustify = `p {
    text-align: justify;
}`

    const textShadowWhite = `p {
    text-shadow: white 0 0 5px;
}`
    const textShadowRed = `p {
    text-shadow: red 5px 10px;
}`

    const textDecorationUnderline = `p {
    text-decoration: underline;
}`
    return {fontFamilyArialSansSerif, fontSize24px, fontWeightBold, fontWeight100, textAlignCenter, textAlignJustify, textShadowRed, textShadowWhite, textDecorationUnderline}
}