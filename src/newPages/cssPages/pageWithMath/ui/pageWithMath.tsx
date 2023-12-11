import { CssCodeExample } from "@/entities";
import { Container, Example } from "@/shared";
import styled from "styled-components";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { useCodeExamplesMath } from "../lib/codeExamplesMath";

export const PageWithMath = () => {
    const { t } = useTranslation()
    const { clamp, minAndMax, calc } = useCodeExamplesMath()

    return (
        <Page>
            <Container>
                <h1>{t("mathematicsT")}</h1>
                <div>
                    <h2>calc</h2>
                    <p>{t("calcP1")}</p>
                    <Example>
                        <CssCodeExample>{calc}</CssCodeExample>
                        <Calc>Hello world!</Calc>
                    </Example>
                </div>
                <div>
                    <h2>{t("minAndMaxT")}</h2>
                    <p>{t("minAndMaxP1")}</p>
                    <Example>
                        <CssCodeExample>{minAndMax}</CssCodeExample>
                        <MinAndMax>Hello world!</MinAndMax>
                    </Example>
                </div>
                <div>
                    <h2>clamp</h2>
                    <p>{t("clampP1")}</p>
                    <Example>
                        <CssCodeExample>{clamp}</CssCodeExample>
                        <Clamp>Hello world!</Clamp>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const Calc = styled.p`
  font-size: calc(1vw + 15px)
`

const MinAndMax = styled.p`
  font-size: max(3vw, 3vh)
`

const Clamp = styled.p`
  font-size: clamp(16px, 2vw, 32px)
`