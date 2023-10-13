import {useState} from 'react';
import CodeExample from "../components/codeExample";
import {Container, Code, Example} from "../UI/components";
import BoxElements from "../components/boxElements";
import styled, {css} from "styled-components";
import Page from "../components/page";

const PageWithDisplayOther = () => {
    const [visible, setVisible] = useState(true)
    const [block, setBlock] = useState(true)

    const displayNone = `div{
    height: 100px;
    background-color: #646cff;
    ${visible ? '/* Нажатие кнопки добавляет и убирает display: none */' : 'display: none'}
}`

    const displayBlock = `div{
    display: ${block ? 'block' : 'flex'} /* Нажатие кнопки меняет значение на ${!block ? 'block' : 'flex'} */
}`
    return (
        <Page>
            <Container>
                <h1>None, block</h1>
                <div>
                    <h2>display: none</h2>
                    <p><Code>display: none</Code> полностью уберает блок со страницы так, будто его и нет</p>
                    <Example>
                        <CodeExample>{displayNone}</CodeExample>
                        <DisplayNone $visible={visible}/>
                        <button onClick={() => setVisible(!visible)}>Скрыть/показать</button>
                    </Example>
                </div>
                <div>
                    <h2>display: block</h2>
                    <p><Code>display: block</Code> Значение <Code>display</Code> по умолчанию. Ничего интересного</p>
                    <Example>
                        <CodeExample>{displayBlock}</CodeExample>
                        <BoxElements $containerStyle={DisplayBlock + ` display: ${block ? 'block' : 'flex'};`} width={'100px'} height={'100px'} length={2}/>
                        <button onClick={() => setBlock(!block)}>block/flex</button>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const DisplayBlock = css`
  padding: 5px;
  margin-bottom: 10px;`.toString()

interface DisplayNoneProps {
    $visible?: boolean,
}

const DisplayNone = styled.div<DisplayNoneProps>`
  height: 100px;
  background-color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
  ${props => !props.$visible && 'display: none'}`

export default PageWithDisplayOther;