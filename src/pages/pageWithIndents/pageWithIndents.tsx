import classes from './pageWithIndents.module.css'
import Navigation from "../../components/navigation/navigation";
import Container from "../../UI/container";
import CodeExample from "../../UI/codeExample";
import Code from "../../UI/code";

const PageWithIndents = () => {
    const padding = `div{
    padding: 5px 20px 35px 50px;
}`

    const margin = `div{
    margin: 5px 20px 35px 50px;
}`

    const marginAuto = `div{
    margin: auto;
}`
    return (
        <div className={'page'}>
            <Navigation/>
            <Container>
                <h1>Отступы</h1>
                <div className="item">
                    <h2>padding</h2>
                    <p><Code>padding</Code> добавляет внутренние отступы для элемента.</p>
                    <div className={'example'}>
                        <CodeExample>{padding}</CodeExample>
                        <div className={classes.container}>
                            <div style={{padding: '5px 20px 35px 50px'}} className={classes.elem}>margin</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <h2>margin</h2>
                    <p><Code>margin</Code> добавляет внешние отступы для элемента.</p>
                    <div className={'example'}>
                        <CodeExample>{margin}</CodeExample>
                        <div className={classes.container}>
                            <div style={{margin: '5px 20px 35px 50px'}} className={classes.elem}>margin</div>
                        </div>
                    </div>
                    <p>Значение <Code>auto</Code> можно использовать как метод центрирования</p>
                    <div className={'example'}>
                        <CodeExample>{marginAuto}</CodeExample>
                        <div className={classes.container}>
                            <div style={{margin: 'auto'}} className={classes.elem}>margin</div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageWithIndents;