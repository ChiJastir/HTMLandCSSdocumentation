import CSSCodeExample from "../../components/CSSCodeExample";
import {Container, Example} from "../../UI/components";
import styled from "styled-components";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";

const PageWithIndents = () => {
    const {t} = useTranslation()

    const padding = `div{
    padding: 5px 20px 35px 50px;
}`

    const margin = `div{
    margin: 5px 20px 35px 50px;
}`

    const marginAuto = `div{
    margin: auto;
}`
    return (
        <Page>
            <Container>
                <h1>{t("indentsT")}</h1>
                <div>
                    <h2>padding</h2>
                    <p>{t("paddingP1")}</p>
                    <Example>
                        <CSSCodeExample>{padding}</CSSCodeExample>
                        <IndentsContainer>
                            <PaddingElem>margin</PaddingElem>
                        </IndentsContainer>
                    </Example>
                </div>
                <div>
                    <h2>margin</h2>
                    <p>{t("marginP1")}</p>
                    <Example>
                        <CSSCodeExample>{margin}</CSSCodeExample>
                        <IndentsContainer>
                            <MarginElem>margin</MarginElem>
                        </IndentsContainer>
                    </Example>
                    <p>{t("marginP2")}</p>
                    <Example>
                        <CSSCodeExample>{marginAuto}</CSSCodeExample>
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
  border: ${props => props.theme.colors.primary} 1px solid;`

const IndentsElem = styled.div`
  border: #e50000 1px solid;
  width: 50px;`

const PaddingElem = styled(IndentsElem)`
  padding: 5px 20px 35px 50px;`

const MarginElem = styled(IndentsElem)`
  margin: 5px 20px 35px 50px;`

const MarginAutoElem = styled(IndentsElem)`
  margin: auto;`

export default PageWithIndents;