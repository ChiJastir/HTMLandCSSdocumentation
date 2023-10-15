import CodeExample from "../../components/codeExample";
import {Container, Example} from "../../UI/components";
import styled from "styled-components";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";

const PageWithMath = () => {
    const {t} = useTranslation()

    const calc = `p {
    font-size: calc(1vw + 15px);
}`

    const minAndMax = `p {
    font-size: max(3vw, 3vh);
}`

    const clamp = `p {
    font-size: clamp(16px, 2vw, 32px);
}`
    return (
        <Page>
            <Container>
                <h1>{t("mathematicsT")}</h1>
                <div>
                    <h2>calc</h2>
                    <p>{t("calcP1")}</p>
                    <Example>
                        <CodeExample>{calc}</CodeExample>
                        <Calc>Hello world!</Calc>
                    </Example>
                </div>
                <div>
                    <h2>{t("minAndMaxT")}</h2>
                    <p>{t("minAndMaxP1")}</p>
                    <Example>
                        <CodeExample>{minAndMax}</CodeExample>
                        <MinAndMax>Hello world!</MinAndMax>
                    </Example>
                </div>
                <div>
                    <h2>clamp</h2>
                    <p>{t("clampP1")}</p>
                    <Example>
                        <CodeExample>{clamp}</CodeExample>
                        <Clamp>Hello world!</Clamp>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const Calc = styled.p`
  font-size: calc(1vw + 15px)`

const MinAndMax = styled.p`
  font-size: max(3vw, 3vh)`

const Clamp = styled.p`
  font-size: clamp(16px, 2vw, 32px)`

export default PageWithMath;