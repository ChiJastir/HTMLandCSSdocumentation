import Navigation from "../components/navigation";
import CodeExample from "../components/codeExample";
import {Container, Code, Page, Example} from "../UI/components";
import styled from "styled-components";
import {baseTheme} from "../styles/theme";

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
        <Page>
            <Navigation/>
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
            </Container>
        </Page>
    );
};

const Border = styled.div`
  height: 100px;
  border: 15px ${baseTheme.colors.primary} solid;`

const Outline = styled.div`
  height: 100px;
  outline: 15px ${baseTheme.colors.primary} solid;`

export default PageWithFrames;