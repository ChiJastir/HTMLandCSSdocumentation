import { Container, Example } from "@/shared";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { HtmlCodeExample } from "@/entities";
import { useCodeExamplesHtmlIntroduction } from "../lib/codeExamplesHtmlIntroduction";

export const PageWithHtmlIntroduction = () => {
    const { t } = useTranslation()
    const { tagOnce, tag, doctype, attr } = useCodeExamplesHtmlIntroduction()

    return (
        <Page>
            <Container>
                <h1>{t("introductionToHTMLT")}</h1>
                <div>
                    <h2>{t("definitionT")}</h2>
                    <p>{t("definitionP1")}</p>
                </div>
                <div>
                    <h2>{t("tagT")}</h2>
                    <p>{t("tagP1")}</p>
                    <Example>
                        <HtmlCodeExample>{tag}</HtmlCodeExample>
                    </Example>
                    <p>{t("tagP2")}</p>
                    <Example>
                        <HtmlCodeExample>{tagOnce}</HtmlCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("attrT")}</h2>
                    <p>{t("attrP1")}</p>
                    <Example>
                        <HtmlCodeExample>{attr}</HtmlCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("doctypeT")}</h2>
                    <p>{t("doctypeP1")}</p>
                    <Example>
                        <HtmlCodeExample>{doctype}</HtmlCodeExample>
                    </Example>
                    <p>{t("doctypeP2")}</p>
                </div>
            </Container>
        </Page>
    );
};