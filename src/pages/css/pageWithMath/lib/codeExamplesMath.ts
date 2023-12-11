export const useCodeExamplesMath = () => {
    const calc = `p {
    font-size: calc(1vw + 15px);
}`

    const minAndMax = `p {
    font-size: max(3vw, 3vh);
}`

    const clamp = `p {
    font-size: clamp(16px, 2vw, 32px);
}`
    return { calc, clamp, minAndMax }
}