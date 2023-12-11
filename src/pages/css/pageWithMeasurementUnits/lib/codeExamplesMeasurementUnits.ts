export const useCodeExamplesMeasurementUnits = () => {
    const pixels = `p {
    font-size: 20px;
}`

    const percent = `p {
    font-size: 150%;
}`

    const emAndRem = `p {
    font-size: 1.5em;
}`

    const vwAndVh = `p {
    font-size: 2vw;
}`
    return { percent, pixels, emAndRem, vwAndVh }
}