import { Container, Example } from "@/shared";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { HtmlCodeExample } from "@/entities";
import { useCodeExamplesBlocksTags } from "../lib/codeExamplesBlocksTags";

export const PageWithBlocksTags = () => {
    const { t } = useTranslation()
    const {
        section,
        div,
        header,
        footer,
        article,
        aside,
        nav,
        main
    } = useCodeExamplesBlocksTags()

    return (
        <Page>
            <Container>
                <h1>{t("blockElementsT")}</h1>
                <div>
                    <h2>{t("blockElementsIntroductoryInformationT")}</h2>
                    <p>{t("blockElementsIntroductoryInformationP1")}</p>
                </div>
                <div>
                    <h2>{t("divT")}</h2>
                    <p>{t("divP1")}</p>
                    <Example>
                        <HtmlCodeExample>{div}</HtmlCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("headerT")}</h2>
                    <p>{t("headerP1")}</p>
                    <Example>
                        <HtmlCodeExample>{header}</HtmlCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("footerT")}</h2>
                    <p>{t("footerP1")}</p>
                    <Example>
                        <HtmlCodeExample>{footer}</HtmlCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("sectionT")}</h2>
                    <p>{t("sectionP1")}</p>
                    <Example>
                        <HtmlCodeExample>{section}</HtmlCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("asideT")}</h2>
                    <p>{t("asideP1")}</p>
                    <Example>
                        <HtmlCodeExample>{aside}</HtmlCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("articleT")}</h2>
                    <p>{t("articleP1")}</p>
                    <Example>
                        <HtmlCodeExample>{article}</HtmlCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("mainT")}</h2>
                    <p>{t("mainP1")}</p>
                    <Example>
                        <HtmlCodeExample>{main}</HtmlCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("navT")}</h2>
                    <p>{t("navP1")}</p>
                    <Example>
                        <HtmlCodeExample>{nav}</HtmlCodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};