import { Container, Example } from "@/shared";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { HtmlCodeExample } from "@/entities";
import { useCodeExamplesTadsInHead } from "../lib/codeExamplesTadsInHead";

export const PageWithTagsInHead = () => {
    const { t } = useTranslation()
    const { link, title } = useCodeExamplesTadsInHead()

    return (
        <Page>
            <Container>
                <h1>{t("tagsInHeadT")}</h1>
                <div>
                    <h2>{t("watchAndForgetT")}</h2>
                    <p>{t("watchAndForgetP1")}</p>
                </div>
                <div>
                    <h2>{t("titleT")}</h2>
                    <p>{t("titleP1")}</p>
                    <Example>
                        <HtmlCodeExample>{title}</HtmlCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("linkT")}</h2>
                    <p>{t("linkP1")}</p>
                    <Example>
                        <HtmlCodeExample>{link}</HtmlCodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};