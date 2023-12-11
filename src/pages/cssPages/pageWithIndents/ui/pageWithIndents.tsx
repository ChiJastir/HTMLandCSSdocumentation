import { CssCodeExample } from "@/entities";
import { Container, Example } from "@/shared";
import styled from "styled-components";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { useCodeExamplesIndents } from "../lib/codeExamplesIndents";

export const PageWithIndents = () => {
    const { t } = useTranslation()
    const { padding, marginAuto, margin } = useCodeExamplesIndents()

    return (
        <Page>
            <Container>
                <h1>{t("indentsT")}</h1>
                <div>
                    <h2>padding</h2>
                    <p>{t("paddingP1")}</p>
                    <Example>
                        <CssCodeExample>{padding}</CssCodeExample>
                        <IndentsContainer>
                            <PaddingElem>margin</PaddingElem>
                        </IndentsContainer>
                    </Example>
                </div>
                <div>
                    <h2>margin</h2>
                    <p>{t("marginP1")}</p>
                    <Example>
                        <CssCodeExample>{margin}</CssCodeExample>
                        <IndentsContainer>
                            <MarginElem>margin</MarginElem>
                        </IndentsContainer>
                    </Example>
                    <p>{t("marginP2")}</p>
                    <Example>
                        <CssCodeExample>{marginAuto}</CssCodeExample>
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
  border: ${props => props.theme.colors.primary} 1px solid;
`

const IndentsElem = styled.div`
  border: ${props => props.theme.colors.secondary} 1px solid;
  width: 50px;
`

const PaddingElem = styled(IndentsElem)`
  padding: 5px 20px 35px 50px;
`

const MarginElem = styled(IndentsElem)`
  margin: 5px 20px 35px 50px;
`

const MarginAutoElem = styled(IndentsElem)`
  margin: auto;
`