import { CssCodeExample } from "@/entities"
import { Container, Example } from "@/shared"
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { useCodeExamplesSelectors } from "../lib/codeExamplesSelectors";

export const PageWithSelectors = () => {
    const { t } = useTranslation()

    const {
        allSelectorExample,
        tagSelectorExample,
        idSelectorExample,
        classSelectorExample,
        attrsSelectorExample,
        neighboringRelatedCombinator,
        commonRelatedCombinator,
        childCombinator,
        flowCombinator
    } = useCodeExamplesSelectors()

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
                        <CssCodeExample>{tagSelectorExample}</CssCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("classSelectorsT")}</h2>
                    <p>{t("classSelectorsP1")}</p>
                    <Example>
                        <CssCodeExample>{classSelectorExample}</CssCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("idSelectorsT")}</h2>
                    <p>{t("idSelectorsP1")}</p>
                    <Example>
                        <CssCodeExample>{idSelectorExample}</CssCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("attributeSelectorsT")}</h2>
                    <p>{t("attributeSelectorsP1")}</p>
                    <Example>
                        <CssCodeExample>{attrsSelectorExample}</CssCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("universalSelectorT")}</h2>
                    <p>{t("universalSelectorP1")}</p>
                    <Example>
                        <CssCodeExample>{allSelectorExample}</CssCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("neighboringRelatedCombinatorT")}</h2>
                    <p>{t("neighboringRelatedCombinatorP1")}</p>
                    <Example>
                        <CssCodeExample>{neighboringRelatedCombinator}</CssCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("childCombinatorT")}</h2>
                    <p>{t("childCombinatorP1")}</p>
                    <Example>
                        <CssCodeExample>{childCombinator}</CssCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("commonRelatedCombinatorT")}</h2>
                    <p>{t("commonRelatedCombinatorP1")}</p>
                    <Example>
                        <CssCodeExample>{commonRelatedCombinator}</CssCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("descendantCombinatorT")}</h2>
                    <p>{t("descendantCombinatorP1")}</p>
                    <Example>
                        <CssCodeExample>{flowCombinator}</CssCodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};