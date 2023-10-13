import CodeExample, {languages} from "../components/codeExample.tsx";
import {Container, Code, Example} from "../UI/components";
import BoxElements from "../components/boxElements";
import styled, {css} from "styled-components";
import BoxElem from "../components/boxElem";
import Page from "../components/page";

const PageWithDisplayGrid = () => {
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
    return (
        <Page>
            <Container>
                <h1>Display</h1>
                <div>
                    <h2>display: grid, grid-template-columns, grid-template-rows и единица измерения fr</h2>
                    <p><Code>display: grid</Code> ведёт себя как <Code>display: block</Code>, но открывает доступ к интересным CSS-свойствам, которые позволяют создать сетку(grid) на странице, а также к единице измерения <Code>fr</Code>. <Code>fr</Code> можно условно назвать "часть". Запись <Code>repeat(3, 1fr)</Code> означает "поделить блок на 3 равные части". <Code>repeat(5, 1fr)</Code> соответственно "поделить блок на 5 равных частей". <Code>30% 60% 1fr</Code> знает что всё доступное пространство делится на 3 неравные части. Одна часть занимает 30%, вторая часть 60%, а третья то, что останется. В данном примере это 10%.</p>
                    <p><Code>grid-template-columns</Code> и <Code>grid-template-rows</Code> соответственно означают деление на столбики и строки. Получается что-то вроде таблицы</p>
                    <Example>
                        <CodeExample>{displayGrid}</CodeExample>
                        <BoxElements width={'100%'} $containerStyle={DGrid} length={5}/>
                    </Example>
                    <Example>
                        <CodeExample>{gridTemplateColumns}</CodeExample>
                        <BoxElements width={'100%'} $containerStyle={GridTemplateColumns} length={3}/>
                    </Example>
                </div>
                <div>
                    <h2>grid-template-areas и grid-area</h2>
                    <p><Code>grid-template-areas</Code> это общее свойство для колонок и строк. Имеет специфический синтаксис, но позволяет задавать нестандартную сетку. Для маркировки элементов сетки используется <Code>grid-area</Code></p>
                    <Example>
                        <CodeExample language={languages.html}>{gridTemplateAreasHTML}</CodeExample>
                        <CodeExample>{gridTemplateAreasCSS}</CodeExample>
                        <GridTemplateAreas>
                            <BoxElem width={'auto'} height={'auto'} $elemStyle={'grid-area: header;'}>header</BoxElem>
                            <BoxElem width={'auto'} height={'auto'} $elemStyle={'grid-area: nav;'}>nav</BoxElem>
                            <BoxElem width={'auto'} height={'auto'} $elemStyle={'grid-area: content;'}>content</BoxElem>
                        </GridTemplateAreas>
                    </Example>
                </div>
                <div>
                    <h2>gap</h2>
                    <p><Code>gap</Code> это зазоры между элементами сетки, но далеко не всегда они работают так, как нам хочется</p>
                    <Example>
                        <CodeExample>{gap}</CodeExample>
                        <BoxElements width={'100%'} $containerStyle={Gap} length={5}/>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const DGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;`.toString()

const GridTemplateColumns = css`
    display: grid;
    grid-template-columns: 30% 60% 1fr;
    padding: 5px;`.toString()

const GridTemplateAreas = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "nav content";
  grid-template-columns: 25% 1fr;
  grid-template-rows: 50px 150px;
  border: ${props => props.theme.colors.primary} 1px solid;
  padding: 5px;`

const Gap = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;
  gap: 15px;`.toString()

export default PageWithDisplayGrid;