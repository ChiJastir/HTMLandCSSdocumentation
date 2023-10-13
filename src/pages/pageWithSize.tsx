import CodeExample from "../components/codeExample";
import {Container, Code, Example} from "../UI/components";
import styled from "styled-components";
import Page from "../components/page";

const PageWithSize = () => {
    const heightAndWidth = `div {
    height: 200px;
    width: 100px;
}`

    const sizeLimit = `div {
    min-height: 100px;
    max-height: 300px;
    min-width: 100px;
    max-width: 300px;
    padding: 10px;
}`

    return (
        <Page>
            <Container>
                <h1>Размеры</h1>
                <div>
                    <h2>height и width</h2>
                    <p><Code>height</Code> - высота, <Code>width</Code> - ширина</p>
                    <Example>
                        <CodeExample>{heightAndWidth}</CodeExample>
                        <HeightAndWidth/>
                    </Example>
                </div>
                <div>
                    <h2>max-height, min-height и max-width, min-width</h2>
                    <p>По логике - значания максимальной/минимальной высоты/ширины</p>
                    <Example>
                        <CodeExample>{sizeLimit}</CodeExample>
                        <SizeLimit>
                            <Textarea/>
                        </SizeLimit>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const HeightAndWidth = styled.div`
  height: 200px;
  width: 100px;
  background-color: ${props => props.theme.colors.primary};`

const SizeLimit = styled.div`
  min-height: 100px;
  max-height: 300px;
  min-width: 100px;
  max-width: 300px;
  display: inline-block;
  padding: 10px;
  background-color: ${props => props.theme.colors.primary};`

const Textarea = styled.textarea`
  background-color: ${props => props.theme.colors.bg};`

export default PageWithSize;