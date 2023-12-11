export const useCodeExamplesFlex = () => {
    const displayFlex = `div{
    display: flex;
}`
    const displayBlock = `div{
    display: block;
}`

    const directionRowReverse = `div{
    display: flex;
    flex-direction: row-reverse;
}`

    const flexWrap = `div{
    max-width: 150px;
    display: flex;
    flex-wrap: wrap;
}`

    const justifyContentSpaceBetween = `div{
    display: flex;
    justify-content: space-between;
}`
    return {displayFlex, displayBlock, directionRowReverse, flexWrap, justifyContentSpaceBetween}
}