export const useCodeExamplesFrames = () => {
    const border = `div{
    height: 100px;
    border: 15px #646cff solid;
}`

    const outline = `div{
    height: 100px;
    outline: 15px #646cff solid;
}`

    const borderRadius = `div{
    background-color: #646cff;
    width: 200px;
    height: 100px;
    border-radius: 15px;
}`
    return {border, outline, borderRadius}
}