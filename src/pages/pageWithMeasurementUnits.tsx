import styled from "styled-components";
import CodeExample from "../components/codeExample.tsx"
import {Container, Example} from "../UI/components";
import Page from "../components/page";
import {useTranslation} from "react-i18next";

const PageWithMeasurementUnits = () => {
    const { t } = useTranslation()

    const pixels = `p {
    font-size: 20px;
}`

    const percent = `p {
    font-size: 150%;
}`

    const emAndRem = `p {
    font-size: 1.5em;
}`

    const vwAndVh = `p {
    font-size: 2vw;
}`

    return (
        <Page>
            <Container>
                <h1>{t("measurementUnitsT")}</h1>
                <div>
                    <h2>{t("pixelsT")}</h2>
                    <p>{t("pixelsP1")}</p>
                    <Example>
                        <CodeExample>{pixels}</CodeExample>
                        <Pixels>Hello world?</Pixels>
                    </Example>
                </div>
                <div>
                    <h2>{t("percentsT")}</h2>
                    <p>{t("percentsP1")}</p>
                    <Example>
                        <CodeExample>{percent}</CodeExample>
                        <Percent>Hello world!</Percent>
                    </Example>
                </div>
                <div>
                    <h2>{t("emAndRemT")}</h2>
                    <p>{t("emAndRemP1")}</p>
                    <Example>
                        <CodeExample>{emAndRem}</CodeExample>
                        <EmAndRem>Hello world!</EmAndRem>
                    </Example>
                </div>
                <div>
                    <h2>{t("viewportT")}</h2>
                    <p>{t("viewportP1")}</p>
                    <Example>
                        <CodeExample>{vwAndVh}</CodeExample>
                        <VwAndVh>Hello world!</VwAndVh>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const Pixels = styled.p`
  font-size: 20px`

const Percent = styled.p`
  font-size: 150%`

const EmAndRem = styled.p`
  font-size: 1.5em`

const VwAndVh = styled.p`
  font-size: 2vw`

export default PageWithMeasurementUnits;