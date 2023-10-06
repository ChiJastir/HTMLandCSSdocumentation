import {useState} from 'react';
import classes from './pageWithTransform.module.css'
import Navigation from "../../components/navigation/navigation.jsx";
import Container from "../../UI/container.jsx";
import CodeExample from "../../UI/codeExample.jsx";
import Code from "../../UI/code.jsx";

const PageWithTransform = () => {
    const [translate, setTranslate] = useState(false)
    const [rotate, setRotate] = useState(false)
    const [scale, setScale] = useState(false)

    const translateStyle = `div{
    transform: ${translate ? 'translate(5px, 5px)' : 'translate(0, 0)'};
}`

    const rotateStyle = `div{
    transform: ${rotate ? 'rotate(27deg)' : 'rotate(0)'};
}`
    const scaleStyle = `div{
    transform: ${scale ? 'scale(0.5, 1.5)' : 'scale(1, 1)'};
}`
    return (
        <div className={'page'}>
            <Navigation/>
            <Container>
                <h1>Transform</h1>
                <div className="item">
                    <h2>transform</h2>
                    <p><Code>transform</Code> это обширное CSS-свойство, которое включает в себя массу значений позволяющих перемещать элемент, вращать, маштабировать и тд. Но распространнёных всего несколько: <Code>translate(x, y)</Code>, <Code>rotate(deg)</Code> и <Code>scale(x, y)</Code>. Есть так же производные от них: <Code>translateX(x)</Code>, <Code>translateY(y)</Code>, <Code>scaleX(x)</Code> и тд. Остальные значения почти не используются</p>
                </div>
                <div className="item">
                    <h2>transform: translate()</h2>
                    <p><Code>transform: translate()</Code> по сути очень напоминает <Code>position: relative</Code>. Тоже позволяет нам сдвигать элементы относительно себя</p>
                    <div className="example">
                        <CodeExample>{translateStyle}</CodeExample>
                        <p style={{transform: translate ? 'translate(5px, 5px)' : 'translate(0, 0)'}} className={classes.position}>{translate ? 'transform: translate(5px, 5px)' : 'transform: translate(0, 0)'}</p>
                        <button onClick={() => setTranslate(!translate)}>on/off</button>
                    </div>
                </div>
                <div className="item">
                    <h2>transform: rotate()</h2>
                    <p><Code>transform: rotate()</Code> позволяет нам вращать элементы на странице</p>
                    <div className="example">
                        <CodeExample>{rotateStyle}</CodeExample>
                        <p style={{transform: rotate ? 'rotate(27deg)' : 'rotate(0)'}} className={classes.position}>{rotate ? 'transform: rotate(27deg)' : 'transform: rotate(0)'}</p>
                        <button onClick={() => setRotate(!rotate)}>on/off</button>
                    </div>
                </div>
                <div className="item">
                    <h2>transform: scale()</h2>
                    <p><Code>transform: scale()</Code> изменяет размер элемента по осям</p>
                    <div className="example">
                        <CodeExample>{scaleStyle}</CodeExample>
                        <p style={{transform: scale ? 'scale(0.5, 1.5)' : 'scale(1, 1)'}} className={classes.position}>{scale ? 'transform: scale(0.5, 1.5)' : 'transform: scale(1, 1)'}</p>
                        <button onClick={() => setScale(!scale)}>on/off</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageWithTransform;