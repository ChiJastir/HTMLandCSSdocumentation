import CodeExample from "../components/codeExample";
import {Container, Code, Example} from "../UI/components";
import styled from "styled-components";
import {baseTheme} from "../styles/theme";
import Page from "../components/page";

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
        <Page>
            <Container>
                <h1>Отступы</h1>
                <div>
                    <h2>padding</h2>
                    <p><Code>padding</Code> добавляет внутренние отступы для элемента.</p>
                    <Example>
                        <CodeExample>{padding}</CodeExample>
                        <IndentsContainer>
                            <PaddingElem>margin</PaddingElem>
                        </IndentsContainer>
                    </Example>
                </div>
                <div>
                    <h2>margin</h2>
                    <p><Code>margin</Code> добавляет внешние отступы для элемента.</p>
                    <Example>
                        <CodeExample>{margin}</CodeExample>
                        <IndentsContainer>
                            <MarginElem>margin</MarginElem>
                        </IndentsContainer>
                    </Example>
                    <p>Значение <Code>auto</Code> можно использовать как метод центрирования</p>
                    <Example>
                        <CodeExample>{marginAuto}</CodeExample>
                        <IndentsContainer>
                            <MarginAutoElem>margin</MarginAutoElem>
                        </IndentsContainer>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const IndentsContainer = styled.div`
  height: 100px;
  border: ${baseTheme.colors.primary} 1px solid;`

const IndentsElem = styled.div`
  border: #e50000 1px solid;
  width: 50px;`

const PaddingElem = styled(IndentsElem)`
  padding: 5px 20px 35px 50px;`

const MarginElem = styled(IndentsElem)`
  margin: 5px 20px 35px 50px;`

const MarginAutoElem = styled(IndentsElem)`
  margin: auto;`

export default PageWithIndents;