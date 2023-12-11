import {Container, Example} from "@/shared";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";
import HTMLCodeExample from "../../components/code/HTMLCodeExample";

const PageWithHTMLIntroduction = () => {
    const {t} = useTranslation()

    const tag = `<div>${t("tagCon1")}</div>`
    const tagOnce = `<input/>`
    const attr = `<div class="container" id="container">${t("tagCon1")}</div>`
    const doctype = `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>index.html</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  ...
  </body>
</html>`

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
                        <HTMLCodeExample>{tag}</HTMLCodeExample>
                    </Example>
                    <p>{t("tagP2")}</p>
                    <Example>
                        <HTMLCodeExample>{tagOnce}</HTMLCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("attrT")}</h2>
                    <p>{t("attrP1")}</p>
                    <Example>
                        <HTMLCodeExample>{attr}</HTMLCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("doctypeT")}</h2>
                    <p>{t("doctypeP1")}</p>
                    <Example>
                        <HTMLCodeExample>{doctype}</HTMLCodeExample>
                    </Example>
                    <p>{t("doctypeP2")}</p>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithHTMLIntroduction;