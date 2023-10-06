import classes from './pageWithDisplayFlex.module.css'
import Navigation from "../../components/navigation/navigation.tsx";
import Container from "../../UI/container.tsx";
import CodeExample from "../../UI/codeExample.tsx";
import Code from "../../UI/code.tsx";
import FlexElements from "./flexElements.tsx";

const PageWithDisplayFlex = () => {
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
    return (
        <div className={'page'}>
            <Navigation/>
            <Container>
                <h1>Display</h1>
                <div className="item">
                    <h2>display: flex</h2>
                    <p><Code>display: flex</Code> позволяет сделать элементы в блоке обтекаемыми, а также даёт доступ к другим flex-свойствам. Для сравнения стандартное значение <Code>block</Code></p>
                    <div className="example">
                        <CodeExample>{displayBlock}</CodeExample>
                        <FlexElements className={classes.blockContainer} length={3}/>
                    </div>
                    <div className="example">
                        <CodeExample>{displayFlex}</CodeExample>
                        <FlexElements className={classes.flexContainer} length={3}/>
                    </div>
                </div>
                <div className="item">
                    <h2>flex-duration</h2>
                    <p>С помощью <Code>flex-duration</Code> мы можем указать направление укладки элементов</p>
                    <div className="example">
                        <CodeExample>{directionRowReverse}</CodeExample>
                        <FlexElements className={classes.flexDuration} length={3}/>
                    </div>
                </div>
                <div className="item">
                    <h2>flex-wrap</h2>
                    <p><Code>flex-wrap</Code> отвечает за перенос элементов</p>
                    <div className="example">
                        <CodeExample>{flexWrap}</CodeExample>
                        <FlexElements className={classes.flexWrap} length={5}/>
                    </div>
                </div>
                <div className="item">
                    <h2>justify-content</h2>
                    <p><Code>justify-content</Code> отвечает за размещение элементов в блоке. Самые частно используемые значения это <Code>center</Code>, <Code>space-between</Code> и <Code>space-around</Code></p>
                    <div className="example">
                        <CodeExample>{justifyContentSpaceBetween}</CodeExample>
                        <FlexElements className={classes.justifyContent} length={4}/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageWithDisplayFlex;