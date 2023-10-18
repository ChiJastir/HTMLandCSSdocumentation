import {Container, Example} from "../../UI/components";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";
import HTMLCodeExample from "../../components/HTMLCodeExample";

const PageWithStyleAttrs = () => {
    const {t} = useTranslation()

    const classDiv = `<div class="container"></div>`
    const idDiv = `<div id="container"></div>`
    const styleDiv = `<div style="color: red;"></div>`

    return (
        <Page>
            <Container>
                <h1>{t("styleAttrsT")}</h1>
                <div>
                    <h2>{t("classT")}</h2>
                    <p>{t("classP1")}</p>
                    <Example>
                        <HTMLCodeExample>{classDiv}</HTMLCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("idT")}</h2>
                    <p>{t("idP1")}</p>
                    <Example>
                        <HTMLCodeExample>{idDiv}</HTMLCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("styleT")}</h2>
                    <p>{t("styleP1")}</p>
                    <Example>
                        <HTMLCodeExample>{styleDiv}</HTMLCodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithStyleAttrs;