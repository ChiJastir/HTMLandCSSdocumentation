import { CssCodeExample } from "@/entities"
import { Container, Example } from "@/shared"
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { useCodeExamplesPseudoElements } from "../lib/codeExamplesPseudoElements";

export const PageWithPseudoElements = () => {
    const { t } = useTranslation()
    const { placeholder, before, after } = useCodeExamplesPseudoElements()

    return (
        <Page>
            <Container>
                <h1><span>{t("pseudoElementsT")}</span></h1>
                <div>
                    <h2>{t("pseudoElementsIntroductoryInformationT")}</h2>
                    <p>{t("pseudoElementsIntroductoryInformationP1")}</p>
                </div>
                <div>
                    <h2>::before</h2>
                    <p>{t("beforeP1")}</p>
                    <Example>
                        <CssCodeExample>{before}</CssCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>::after</h2>
                    <p>{t("afterP1")}</p>
                    <Example>
                        <CssCodeExample>{after}</CssCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>::placeholder</h2>
                    <p>{t("placeholderP1")}</p>
                    <Example>
                        <CssCodeExample>{placeholder}</CssCodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};