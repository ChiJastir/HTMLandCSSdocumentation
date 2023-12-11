import styled from "styled-components";
import { CssCodeExample } from "@/entities"
import { Container, Example } from "@/shared";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { useCodeExamplesMeasurementUnits } from "../lib/codeExamplesMeasurementUnits";

export const PageWithMeasurementUnits = () => {
    const { t } = useTranslation()
    const { pixels, percent, vwAndVh, emAndRem } = useCodeExamplesMeasurementUnits()

    return (
        <Page>
            <Container>
                <h1>{t("measurementUnitsT")}</h1>
                <div>
                    <h2>{t("pixelsT")}</h2>
                    <p>{t("pixelsP1")}</p>
                    <Example>
                        <CssCodeExample>{pixels}</CssCodeExample>
                        <Pixels>Hello world?</Pixels>
                    </Example>
                </div>
                <div>
                    <h2>{t("percentsT")}</h2>
                    <p>{t("percentsP1")}</p>
                    <Example>
                        <CssCodeExample>{percent}</CssCodeExample>
                        <Percent>Hello world!</Percent>
                    </Example>
                </div>
                <div>
                    <h2>{t("emAndRemT")}</h2>
                    <p>{t("emAndRemP1")}</p>
                    <Example>
                        <CssCodeExample>{emAndRem}</CssCodeExample>
                        <EmAndRem>Hello world!</EmAndRem>
                    </Example>
                </div>
                <div>
                    <h2>{t("viewportT")}</h2>
                    <p>{t("viewportP1")}</p>
                    <Example>
                        <CssCodeExample>{vwAndVh}</CssCodeExample>
                        <VwAndVh>Hello world!</VwAndVh>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const Pixels = styled.p`
  font-size: 20px
`

const Percent = styled.p`
  font-size: 150%
`

const EmAndRem = styled.p`
  font-size: 1.5em
`

const VwAndVh = styled.p`
  font-size: 2vw
`