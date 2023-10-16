import CSSCodeExample from "../../components/CSSCodeExample.tsx"
import {Container, Example} from "../../UI/components"
import Page from "../../components/page";
import { useTranslation } from "react-i18next";

const PageWithSelectors = () => {
    const { t } = useTranslation()

    const tagSelectorExample = `p {
    /* ${t("typeSelectorsC")} */
}`

    const classSelectorExample = `.title {
    /* ${t("classSelectorsC")} */
}`

    const idSelectorExample = `#button {
    /* ${t("idSelectorsC")} */
}`

    const attrsSelectorExample = `input[type=radio] {
    /* ${t("attributeSelectorsC")} */
}`

    const allSelectorExample = `* {
    /* ${t("universalSelectorC")} */
}`

    const neighboringRelatedCombinator = `li + li {
    /* ${t("neighboringRelatedCombinatorC")} */
}`

    const childCombinator = `.container > p {
    /* ${t("childCombinatorC")} */
}`

    const commonRelatedCombinator = `.container ~ p {
    /* ${t("commonRelatedCombinatorC")} */
}`

    const flowCombinator = `div p {
    /* ${t("descendantCombinatorC")} */
}`

    return (
        <Page>
            <Container>
                <h1>{t("selectorsT")}</h1>
                <div>
                    <h2>{t("selectorsIntroductoryInformationT")}</h2>
                    <p>{t("selectorsIntroductoryInformationP1")}</p>
                    <p>{t("selectorsIntroductoryInformationP2")}</p>
                </div>
                <div>
                    <h2>{t("typeSelectorsT")}</h2>
                    <p>{t("typeSelectorsP1")}</p>
                    <Example>
                        <CSSCodeExample>{tagSelectorExample}</CSSCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("classSelectorsT")}</h2>
                    <p>{t("classSelectorsP1")}</p>
                    <Example>
                        <CSSCodeExample>{classSelectorExample}</CSSCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("idSelectorsT")}</h2>
                    <p>{t("idSelectorsP1")}</p>
                    <Example>
                        <CSSCodeExample>{idSelectorExample}</CSSCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("attributeSelectorsT")}</h2>
                    <p>{t("attributeSelectorsP1")}</p>
                    <Example>
                        <CSSCodeExample>{attrsSelectorExample}</CSSCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("universalSelectorT")}</h2>
                    <p>{t("universalSelectorP1")}</p>
                    <Example>
                        <CSSCodeExample>{allSelectorExample}</CSSCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("neighboringRelatedCombinatorT")}</h2>
                    <p>{t("neighboringRelatedCombinatorP1")}</p>
                    <Example>
                        <CSSCodeExample>{neighboringRelatedCombinator}</CSSCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("childCombinatorT")}</h2>
                    <p>{t("childCombinatorP1")}</p>
                    <Example>
                        <CSSCodeExample>{childCombinator}</CSSCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("commonRelatedCombinatorT")}</h2>
                    <p>{t("commonRelatedCombinatorP1")}</p>
                    <Example>
                        <CSSCodeExample>{commonRelatedCombinator}</CSSCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("descendantCombinatorT")}</h2>
                    <p>{t("descendantCombinatorP1")}</p>
                    <Example>
                        <CSSCodeExample>{flowCombinator}</CSSCodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithSelectors;