import classes from './pageWithFrames.module.css'
import Navigation from "../../components/navigation/navigation";
import Container from "../../UI/container";
import CodeExample from "../../UI/codeExample";
import Code from "../../UI/code";

const PageWithFrames = () => {
    const border = `div{
    height: 100px;
    border: 15px #646cff solid;
}`

    const outline = `div{
    height: 100px;
    outline: 15px #646cff solid;
}`
    return (
        <div className={'page'}>
            <Navigation/>
            <Container>
                <h1>Рамки и контуры</h1>
                <div className="item">
                    <h2>border</h2>
                    <p><Code>border</Code> добавляет осязаемую рамку элементу, которая является его частью. Указывается толщина рамки, цвет и стиль рамки. В 90% случаев достаточно сплошной рамки <Code>solid</Code></p>
                    <div className="example">
                        <CodeExample>{border}</CodeExample>
                        <div className={classes.border}/>
                    </div>
                </div>
                <div className="item">
                    <h2>outline</h2>
                    <p><Code>outline</Code> добавляет неосязаемую рамку элементу, которая не является его частью. Указывается толщина рамки, цвет и стиль рамки. В 90% случаев достаточно сплошной рамки <Code>solid</Code></p>
                    <div className="example">
                        <CodeExample>{outline}</CodeExample>
                        <div className={classes.outline}/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageWithFrames;