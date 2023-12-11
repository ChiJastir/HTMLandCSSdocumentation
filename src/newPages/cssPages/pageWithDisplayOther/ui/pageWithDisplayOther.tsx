import { CssCodeExample } from "@/entities";
import { ButtonMonochrome, Container, Example } from "@/shared";
import { BoxElements } from "@/entities";
import styled, { css } from "styled-components";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { useCodeExamplesDisplayOther } from "../lib/codeExamplesDisplayOther";

export const PageWithDisplayOther = () => {
    const { t } = useTranslation()

    const { displayBlock, setBlock, displayNone, block, setVisible, visible } = useCodeExamplesDisplayOther()

    return (
        <Page>
            <Container>
                <h1>Display</h1>
                <div>
                    <h2>display: none</h2>
                    <p>{t("displayNoneP1")}</p>
                    <Example>
                        <CssCodeExample>{displayNone}</CssCodeExample>
                        <DisplayNone $visible={visible}/>
                        <ButtonMonochrome onClick={() => setVisible(!visible)}>{t("displayNoneB1")}</ButtonMonochrome>
                    </Example>
                </div>
                <div>
                    <h2>display: block</h2>
                    <p>{t("displayBlockP1")}</p>
                    <Example>
                        <CssCodeExample>{displayBlock}</CssCodeExample>
                        <BoxElements $containerStyle={DisplayBlock + ` display: ${block ? 'block' : 'flex'};`} width={'100px'} height={'100px'} length={2}/>
                        <ButtonMonochrome onClick={() => setBlock(!block)}>block/flex</ButtonMonochrome>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const DisplayBlock = css`
  padding: 5px;
  margin-bottom: 10px;
`.toString()

interface DisplayNoneProps {
    $visible?: boolean,
}

const DisplayNone = styled.div<DisplayNoneProps>`
  height: 100px;
  background-color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
  ${props => !props.$visible && 'display: none'}
`