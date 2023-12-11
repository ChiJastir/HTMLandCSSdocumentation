import { CssCodeExample } from "@/entities";
import { Container, Example } from "@/shared";
import styled from "styled-components";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { useCodeExamplesFrames } from "../lib/codeExamplesFrames";

export const PageWithFrames = () => {
    const { t } = useTranslation()
    const { border, outline, borderRadius } = useCodeExamplesFrames()

    return (
        <Page>
            <Container>
                <h1>{t("framesT")}</h1>
                <div>
                    <h2>border</h2>
                    <p>{t("borderP1")}</p>
                    <Example>
                        <CssCodeExample>{border}</CssCodeExample>
                        <Border/>
                    </Example>
                </div>
                <div>
                    <h2>outline</h2>
                    <p>{t("outlineP1")}</p>
                    <Example>
                        <CssCodeExample>{outline}</CssCodeExample>
                        <Outline/>
                    </Example>
                </div>
                <div>
                    <h2>border-radius</h2>
                    <p>{t("borderRadiusP1")}</p>
                    <Example>
                        <CssCodeExample>{borderRadius}</CssCodeExample>
                        <BorderRadius/>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const Border = styled.div`
  height: 100px;
  border: 15px ${props => props.theme.colors.primary} solid;
`

const Outline = styled.div`
  height: 100px;
  outline: 15px ${props => props.theme.colors.primary} solid;
`

const BorderRadius = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 200px;
  height: 100px;
  border-radius: 15px;
`