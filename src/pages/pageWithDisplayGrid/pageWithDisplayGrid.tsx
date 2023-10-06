import classes from './pageWithGrid.module.css'
import Navigation from "../../components/navigation/navigation.tsx";
import Container from "../../UI/container.tsx";
import CodeExample, {languages} from "../../UI/codeExample.tsx";
import Code from "../../UI/code.tsx";
import GridElements from "./gridElements.tsx";

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
    <div class="navigation">navigation</div>
    <div class="content">content</div>
</div>`

    const gridTemplateAreasCSS = `.gridTemplateAreas{
    display: grid;
    grid-template-areas:
        "header header"
        "navigation content";
    grid-template-columns: 25% 1fr;
    grid-template-rows: 50px 150px;
}

.header{
    grid-area: header;
}
.navigation{
    grid-area: navigation;
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
        <div className={'page'}>
            <Navigation/>
            <Container>
                <h1>Display</h1>
                <div className="item">
                    <h2>display: grid, grid-template-columns, grid-template-rows и единица измерения fr</h2>
                    <p><Code>display: grid</Code> ведёт себя как <Code>display: block</Code>, но открывает доступ к интересным CSS-свойствам, которые позволяют создать сетку(grid) на странице, а также к единице измерения <Code>fr</Code>. <Code>fr</Code> можно условно назвать "часть". Запись <Code>repeat(3, 1fr)</Code> означает "поделить блок на 3 равные части". <Code>repeat(5, 1fr)</Code> соответственно "поделить блок на 5 равных частей". <Code>30% 60% 1fr</Code> знает что всё доступное пространство делится на 3 неравные части. Одна часть занимает 30%, вторая часть 60%, а третья то, что останется. В данном примере это 10%.</p>
                    <p><Code>grid-template-columns</Code> и <Code>grid-template-rows</Code> соответственно означают деление на столбики и строки. Получается что-то вроде таблицы</p>
                    <div className={'example'}>
                        <CodeExample>{displayGrid}</CodeExample>
                        <GridElements className={classes.displayGrid} length={5}/>
                    </div>
                    <div className={'example'}>
                        <CodeExample>{gridTemplateColumns}</CodeExample>
                        <GridElements className={classes.gridTemplateColumns} length={3}/>
                    </div>
                </div>
                <div className="item">
                    <h2>grid-template-areas и grid-area</h2>
                    <p><Code>grid-template-areas</Code> это общее свойство для колонок и строк. Имеет специфический синтаксис, но позволяет задавать нестандартную сетку. Для маркировки элементов сетки используется <Code>grid-area</Code></p>
                    <div className={'example'}>
                        <CodeExample language={languages.html}>{gridTemplateAreasHTML}</CodeExample>
                        <CodeExample>{gridTemplateAreasCSS}</CodeExample>
                        <div className={classes.gridTemplateAreas}>
                            <div className={[classes.header, classes.elem].join(' ')}>header</div>
                            <div className={[classes.navigation, classes.elem].join(' ')}>navigation</div>
                            <div className={[classes.content, classes.elem].join(' ')}>content</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <h2>gap</h2>
                    <p><Code>gap</Code> это зазоры между элементами сетки, но далеко не всегда они работают так, как нам хочется</p>
                    <div className={'example'}>
                        <CodeExample>{gap}</CodeExample>
                        <GridElements className={classes.gap} length={5}/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageWithDisplayGrid;