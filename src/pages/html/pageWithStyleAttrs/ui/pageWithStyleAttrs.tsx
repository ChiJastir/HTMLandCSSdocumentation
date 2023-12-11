import { Container, Example } from "@/shared";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { HtmlCodeExample } from "@/entities";
import { useCodeExamplesStyleAttrs } from "../lib/codeExamplesStyleAttrs";

export const PageWithStyleAttrs = () => {
    const { t } = useTranslation()
    const { styleDiv, idDiv, classDiv } = useCodeExamplesStyleAttrs()

    return (
        <Page>
            <Container>
                <h1>{t("styleAttrsT")}</h1>
                <div>
                    <h2>{t("classT")}</h2>
                    <p>{t("classP1")}</p>
                    <Example>
                        <HtmlCodeExample>{classDiv}</HtmlCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("idT")}</h2>
                    <p>{t("idP1")}</p>
                    <Example>
                        <HtmlCodeExample>{idDiv}</HtmlCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("styleT")}</h2>
                    <p>{t("styleP1")}</p>
                    <Example>
                        <HtmlCodeExample>{styleDiv}</HtmlCodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};