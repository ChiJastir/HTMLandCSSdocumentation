import {useState} from 'react';
import CSSCodeExample from "../../components/code/CSSCodeExample";
import {Button, Container, Example} from "../../UI/components";
import BoxElements from "../../components/boxes/boxElements";
import styled, {css} from "styled-components";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";

const PageWithDisplayOther = () => {
    const [visible, setVisible] = useState(true)
    const [block, setBlock] = useState(true)

    const {t} = useTranslation()

    const displayNone = `div{
    height: 100px;
    background-color: #646cff;
    ${visible ? `/* ${t("displayNoneC")} */` : 'display: none'}
}`

    const displayBlock = `div{
    display: ${block ? 'block' : 'flex'}
}`
    return (
        <Page>
            <Container>
                <h1>Display</h1>
                <div>
                    <h2>display: none</h2>
                    <p>{t("displayNoneP1")}</p>
                    <Example>
                        <CSSCodeExample>{displayNone}</CSSCodeExample>
                        <DisplayNone $visible={visible}/>
                        <Button onClick={() => setVisible(!visible)}>{t("displayNoneB1")}</Button>
                    </Example>
                </div>
                <div>
                    <h2>display: block</h2>
                    <p>{t("displayBlockP1")}</p>
                    <Example>
                        <CSSCodeExample>{displayBlock}</CSSCodeExample>
                        <BoxElements $containerStyle={DisplayBlock + ` display: ${block ? 'block' : 'flex'};`} width={'100px'} height={'100px'} length={2}/>
                        <Button onClick={() => setBlock(!block)}>block/flex</Button>
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