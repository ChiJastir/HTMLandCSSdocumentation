import CSSCodeExample from "../../components/code/CSSCodeExample";
import {Container, Example} from "../../UI/components";
import styled from "styled-components";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";

const PageWithFrames = () => {
    const {t} = useTranslation()

    const border = `div{
    height: 100px;
    border: 15px #646cff solid;
}`

    const outline = `div{
    height: 100px;
    outline: 15px #646cff solid;
}`

    const borderRadius = `div{
    background-color: #646cff;
    width: 200px;
    height: 100px;
    border-radius: 15px;
}`

    return (
        <Page>
            <Container>
                <h1>{t("framesT")}</h1>
                <div>
                    <h2>border</h2>
                    <p>{t("borderP1")}</p>
                    <Example>
                        <CSSCodeExample>{border}</CSSCodeExample>
                        <Border/>
                    </Example>
                </div>
                <div>
                    <h2>outline</h2>
                    <p>{t("outlineP1")}</p>
                    <Example>
                        <CSSCodeExample>{outline}</CSSCodeExample>
                        <Outline/>
                    </Example>
                </div>
                <div>
                    <h2>border-radius</h2>
                    <p>{t("borderRadiusP1")}</p>
                    <Example>
                        <CSSCodeExample>{borderRadius}</CSSCodeExample>
                        <BorderRadius/>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const Border = styled.div`
  height: 100px;
  border: 15px ${props => props.theme.colors.primary} solid;`

const Outline = styled.div`
  height: 100px;
  outline: 15px ${props => props.theme.colors.primary} solid;`

const BorderRadius = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 200px;
  height: 100px;
  border-radius: 15px;`

export default PageWithFrames;