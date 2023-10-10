import {useState} from 'react';
import styled from "styled-components";
import CodeExample from "../components/codeExample";
import {Container, Code, ParagraphBorder, Example} from "../UI/components";
import Page from "../components/page";

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
        <Page>
            <Container>
                <h1>Transform</h1>
                <div>
                    <h2>transform</h2>
                    <p><Code>transform</Code> это обширное CSS-свойство, которое включает в себя массу значений позволяющих перемещать элемент, вращать, маштабировать и тд. Но распространнёных всего несколько: <Code>translate(x, y)</Code>, <Code>rotate(deg)</Code> и <Code>scale(x, y)</Code>. Есть так же производные от них: <Code>translateX(x)</Code>, <Code>translateY(y)</Code>, <Code>scaleX(x)</Code> и тд. Остальные значения почти не используются</p>
                </div>
                <div>
                    <h2>transform: translate()</h2>
                    <p><Code>transform: translate()</Code> по сути очень напоминает <Code>position: relative</Code>. Тоже позволяет нам сдвигать элементы относительно себя</p>
                    <Example>
                        <CodeExample>{translateStyle}</CodeExample>
                        <Transform transform={translate ? 'translate(5px, 5px)' : 'translate(0, 0)'}>{translate ? 'transform: translate(5px, 5px)' : 'transform: translate(0, 0)'}</Transform>
                        <button onClick={() => setTranslate(!translate)}>on/off</button>
                    </Example>
                </div>
                <div>
                    <h2>transform: rotate()</h2>
                    <p><Code>transform: rotate()</Code> позволяет нам вращать элементы на странице</p>
                    <Example>
                        <CodeExample>{rotateStyle}</CodeExample>
                        <Transform transform={rotate ? 'rotate(27deg)' : 'rotate(0)'}>{rotate ? 'transform: rotate(27deg)' : 'transform: rotate(0)'}</Transform>
                        <button onClick={() => setRotate(!rotate)}>on/off</button>
                    </Example>
                </div>
                <div>
                    <h2>transform: scale()</h2>
                    <p><Code>transform: scale()</Code> изменяет размер элемента по осям</p>
                    <Example>
                        <CodeExample>{scaleStyle}</CodeExample>
                        <Transform transform={scale ? 'scale(0.5, 1.5)' : 'scale(1, 1)'}>{scale ? 'transform: scale(0.5, 1.5)' : 'transform: scale(1, 1)'}</Transform>
                        <button onClick={() => setScale(!scale)}>on/off</button>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

// CSS
const Transform = styled(ParagraphBorder)<{transform: string}>`
  transform: ${props => props.transform}`

export default PageWithTransform;