import { Container, Example } from "@/shared";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { HtmlCodeExample } from "@/entities";
import { useCodeExamplesTextTags } from "../lib/codeExamplesTextTags";

export const PageWithTextTags = () => {
    const { t } = useTranslation()
    const { span, headings, link, paragraph } = useCodeExamplesTextTags()

    return (
        <Page>
            <Container>
                <h1>{t("textTagsT")}</h1>
                <div>
                    <h2>{t("headingsT")}</h2>
                    <p>{t("headingsP1")}</p>
                    <Example>
                        <HtmlCodeExample>{headings}</HtmlCodeExample>
                        <h1>Hello world</h1>
                        <h2>Hello world</h2>
                        <h3>Hello world</h3>
                        <h4>Hello world</h4>
                        <h5>Hello world</h5>
                        <h6>Hello world</h6>
                    </Example>
                </div>
                <div>
                    <h2>{t("paragraphT")}</h2>
                    <p>{t("paragraphP1")}</p>
                    <Example>
                        <HtmlCodeExample>{paragraph}</HtmlCodeExample>
                        <p>Hello world</p>
                    </Example>
                </div>
                <div>
                    <h2>{t("spanT")}</h2>
                    <p>{t("spanP1")}</p>
                    <Example>
                        <HtmlCodeExample>{span}</HtmlCodeExample>
                        <p><span>Hello</span> world</p>
                    </Example>
                </div>
                <div>
                    <h2>{t("textLinkT")}</h2>
                    <p>{t("textLinkP1")}</p>
                    <Example>
                        <HtmlCodeExample>{link}</HtmlCodeExample>
                        <a href={'https://www.google.com'}>Hello world</a>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};