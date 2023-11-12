import {Container, Example} from "../../UI/components";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";
import HTMLCodeExample from "../../components/code/HTMLCodeExample";

const PageWithTagsInHead = () => {
    const {t} = useTranslation()

    const title = `<head>
  <title>test</title>
</head>`
    const link = `<head>
  <link rel="stylesheet" href="style.css">
</head>`

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
                        <HTMLCodeExample>{title}</HTMLCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("linkT")}</h2>
                    <p>{t("linkP1")}</p>
                    <Example>
                        <HTMLCodeExample>{link}</HTMLCodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithTagsInHead;