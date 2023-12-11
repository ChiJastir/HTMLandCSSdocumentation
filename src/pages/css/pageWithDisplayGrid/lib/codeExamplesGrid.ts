export const useCodeExamplesGrid = () => {
    const displayGrid = `div{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}`

    const gridTemplateColumns = `div{
    display: grid;
    grid-template-columns: 30% 60% 1fr;
}`

    const gridTemplateAreasHTML = `<div class="gridTemplateAreas">
    <div class="header">header</div>
    <div class="nav">nav</div>
    <div class="content">content</div>
</div>`

    const gridTemplateAreasCSS = `.gridTemplateAreas{
    display: grid;
    grid-template-areas:
        "header header"
        "nav content";
    grid-template-columns: 25% 1fr;
    grid-template-rows: 50px 150px;
}

.header{
    grid-area: header;
}
.nav{
    grid-area: nav;
}
.content{
    grid-area: content;
}`

    const gap = `div{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}`
    return {displayGrid, gridTemplateColumns, gridTemplateAreasHTML, gridTemplateAreasCSS, gap}
}