import {Container, Example} from "../../UI/components";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";
import HTMLCodeExample from "../../components/HTMLCodeExample";

const PageWithLists = () => {
    const {t} = useTranslation()

    const ol = `<ol>
    <li>Hello world</li>
    <li>Hello world</li>
    <li>Hello world</li>
</ol>`
    const ul = `<ul>
    <li>Hello world</li>
    <li>Hello world</li>
    <li>Hello world</li>
</ul>`
    const li = `<li>Hello world</li>`

    return (
        <Page>
            <Container>
                <h1>{t("listsT")}</h1>
                <div>
                    <h2>{t("orderedListT")}</h2>
                    <p>{t("orderedListP1")}</p>
                    <Example>
                        <HTMLCodeExample>{ol}</HTMLCodeExample>
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
                        <HTMLCodeExample>{ul}</HTMLCodeExample>
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
                        <HTMLCodeExample>{li}</HTMLCodeExample>
                        <li>Hello world</li>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithLists;