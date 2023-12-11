export const useCodeExamplesIndents = () => {
    const padding = `div{
    padding: 5px 20px 35px 50px;
}`

    const margin = `div{
    margin: 5px 20px 35px 50px;
}`

    const marginAuto = `div{
    margin: auto;
}`
    return { padding, margin, marginAuto }
}