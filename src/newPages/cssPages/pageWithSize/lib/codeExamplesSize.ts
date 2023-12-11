export const useCodeExamplesSize = () => {
    const heightAndWidth = `div {
    height: 200px;
    width: 100px;
}`

    const sizeLimit = `div {
    min-height: 100px;
    max-height: 300px;
    min-width: 100px;
    max-width: 300px;
    padding: 10px;
}`
    return { heightAndWidth, sizeLimit }
}