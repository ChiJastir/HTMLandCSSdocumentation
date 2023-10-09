import {useState} from 'react';
import Navigation from "../components/navigation";
import CodeExample from "../components/codeExample";
import {Container, Code, ParagraphBorder, Page, Example} from "../UI/components";
import styled from "styled-components";

const PageWithPosition = () => {
    const [absolute, setAbsolute] = useState(false)
    const [relative, setRelative] = useState(false)
    const [fixed, setFixed] = useState(false)

    const absoluteStyle = `div{
    position: ${absolute ? 'absolute' : 'static'};
    top: 5px;
    left: 5px;
}`

    const relativeStyle = `div{
    position: ${relative ? 'relative' : 'static'};
    top: 5px;
    left: 5px;
}`
    const fixedStyle = `div{
    position: ${fixed ? 'fixed' : 'static'};
    top: 5px;
    left: 5px;
}`
    return (
        <Page>
            <Navigation/>
            <Container>
                <h1>Position</h1>
                <div>
                    <h2>position</h2>
                    <p><Code>position</Code> устанавливает способ позиционирования элемента относительно окна браузера или других объектов на веб-странице. Значение по умолчанию <Code>static</Code>. Самые распространённые значения <Code>absolute</Code>, <Code>relative</Code> и <Code>fixed</Code>. Все они открывают новые свойства <Code>left</Code>, <Code>top</Code>, <Code>right</Code> и <Code>bottom</Code>. Это своего рода отступы с определённой стороны. От значения <Code>position</Code> зависит относительно чего будут отступы. </p>
                </div>
                <div>
                    <h2>position: absolute</h2>
                    <p><Code>absolute</Code> - отступы относительно начала координат на странице (левого верхнего угла), но если поместить такой элемент внутрь элемента <Code>relative</Code>, то позиционирование будет происходить относительно родительского элемента. Помимо этого элемент с <Code>position: absolute</Code> становится бестелесным и неосязаемым.</p>
                    <Example>
                        <CodeExample>{absoluteStyle}</CodeExample>
                        <Position position={absolute ? 'absolute' : 'static'}>{absolute ? 'absolute' : 'static'}</Position>
                        <button onClick={() => setAbsolute(!absolute)}>absolute/static</button>
                    </Example>
                </div>
                <div>
                    <h2>position: relative</h2>
                    <p><Code>relative</Code> - отступы относительно самого себя. Бестелесным элемент не становится, но его тело не перемещается</p>
                    <Example>
                        <CodeExample>{relativeStyle}</CodeExample>
                        <Position position={relative ? 'relative' : 'static'}>{relative ? 'relative' : 'static'}</Position>
                        <button onClick={() => setRelative(!relative)}>relative/static</button>
                    </Example>
                </div>
                <div>
                    <h2>position: fixed</h2>
                    <p><Code>fixed</Code> - похож на <Code>absolute</Code>, но привязывается к определённому положению на экране</p>
                    <Example>
                        <CodeExample>{fixedStyle}</CodeExample>
                        <Position position={fixed ? 'fixed' : 'static'}>{fixed ? 'fixed' : 'static'}</Position>
                        <button onClick={() => setFixed(!fixed)}>fixed/static</button>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

// CSS
const Position = styled(ParagraphBorder)<{position: string}>`
  position: ${props => props.position};
  top: 5px;
  left: 5px;`

export default PageWithPosition;