import CodeExample from "../components/codeExample";
import {Container, Code, Example} from "../UI/components";
import styled from "styled-components";
import Page from "../components/page";

const PageWithFrames = () => {
    const border = `div{
    height: 100px;
    border: 15px #646cff solid;
}`

    const outline = `div{
    height: 100px;
    outline: 15px #646cff solid;
}`

    const borderRadius = `div{
    background-color: #646cff;
    width: 200px;
    height: 100px;
    border-radius: 15px;
}`

    return (
        <Page>
            <Container>
                <h1>Рамки</h1>
                <div>
                    <h2>border</h2>
                    <p><Code>border</Code> добавляет осязаемую рамку элементу, которая является его частью. Указывается толщина рамки, цвет и стиль рамки. В 90% случаев достаточно сплошной рамки <Code>solid</Code></p>
                    <Example>
                        <CodeExample>{border}</CodeExample>
                        <Border/>
                    </Example>
                </div>
                <div>
                    <h2>outline</h2>
                    <p><Code>outline</Code> добавляет неосязаемую рамку элементу, которая не является его частью. Указывается толщина рамки, цвет и стиль рамки. В 90% случаев достаточно сплошной рамки <Code>solid</Code></p>
                    <Example>
                        <CodeExample>{outline}</CodeExample>
                        <Outline/>
                    </Example>
                </div>
                <div>
                    <h2>border-radius</h2>
                    <p><Code>border-radius</Code> скругляет края элемента</p>
                    <Example>
                        <CodeExample>{borderRadius}</CodeExample>
                        <BorderRadius/>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const Border = styled.div`
  height: 100px;
  border: 15px ${props => props.theme.colors.primary} solid;`

const Outline = styled.div`
  height: 100px;
  outline: 15px ${props => props.theme.colors.primary} solid;`

const BorderRadius = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 200px;
  height: 100px;
  border-radius: 15px;`

export default PageWithFrames;