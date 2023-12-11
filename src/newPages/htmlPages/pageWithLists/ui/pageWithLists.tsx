import { Container, Example } from "@/shared";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { HtmlCodeExample } from "@/entities";
import { useCodeExamplesLists } from "../lib/codeExamplesLists";

export const PageWithLists = () => {
    const { t } = useTranslation()
    const { ol, li, ul } = useCodeExamplesLists()

    return (
        <Page>
            <Container>
                <h1>{t("listsT")}</h1>
                <div>
                    <h2>{t("orderedListT")}</h2>
                    <p>{t("orderedListP1")}</p>
                    <Example>
                        <HtmlCodeExample>{ol}</HtmlCodeExample>
                        <ol>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                        </ol>
                    </Example>
                </div>
                <div>
                    <h2>{t("unorderedListT")}</h2>
                    <p>{t("unorderedListP1")}</p>
                    <Example>
                        <HtmlCodeExample>{ul}</HtmlCodeExample>
                        <ul>
                            <li>Hello world</li>
                            <li>Hello world</li>
                            <li>Hello world</li>
                        </ul>
                    </Example>
                </div>
                <div>
                    <h2>{t("liT")}</h2>
                    <p>{t("liP1")}</p>
                    <Example>
                        <HtmlCodeExample>{li}</HtmlCodeExample>
                        <li>Hello world</li>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};