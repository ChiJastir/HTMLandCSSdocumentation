import CSSCodeExample from "../../components/CSSCodeExample";
import {Container, Example} from "../../UI/components";
import styled from "styled-components";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";

const PageWithSize = () => {
    const {t} = useTranslation()

    const heightAndWidth = `div {
    height: 200px;
    width: 100px;
}`

    const sizeLimit = `div {
    min-height: 100px;
    max-height: 300px;
    min-width: 100px;
    max-width: 300px;
    padding: 10px;
}`

    return (
        <Page>
            <Container>
                <h1>{t("sizesT")}</h1>
                <div>
                    <h2>{t("heightAndWidthT")}</h2>
                    <p>{t("heightAndWidthP1")}</p>
                    <Example>
                        <CSSCodeExample>{heightAndWidth}</CSSCodeExample>
                        <HeightAndWidth/>
                    </Example>
                </div>
                <div>
                    <h2>{t("maxHeightMinHeightAndMaxWidthMinWidthT")}</h2>
                    <p>{t("maxHeightMinHeightAndMaxWidthMinWidthP1")}</p>
                    <Example>
                        <CSSCodeExample>{sizeLimit}</CSSCodeExample>
                        <SizeLimit>
                            <Textarea/>
                        </SizeLimit>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const HeightAndWidth = styled.div`
  height: 200px;
  width: 100px;
  background-color: ${props => props.theme.colors.primary};`

const SizeLimit = styled.div`
  min-height: 100px;
  max-height: 300px;
  min-width: 100px;
  max-width: 300px;
  display: inline-block;
  padding: 10px;
  background-color: ${props => props.theme.colors.primary};`

const Textarea = styled.textarea`
  background-color: ${props => props.theme.colors.bg};`

export default PageWithSize;