import {Container, Example} from "../../UI/components";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";
import HTMLCodeExample from "../../components/HTMLCodeExample";

const PageWithTextTags = () => {
    const {t} = useTranslation()

    const headings = `<h1>Hello world</h1>
<h2>Hello world</h2>
<h3>Hello world</h3>
<h4>Hello world</h4>
<h5>Hello world</h5>
<h6>Hello world</h6>`
    const paragraph = `<p>Hello world</p>`
    const span = `<p><span>Hello</span> world</p>`
    const link = `<a href="https://www.google.com">Hello world</a>`

    return (
        <Page>
            <Container>
                <h1>{t("textTagsT")}</h1>
                <div>
                    <h2>{t("headingsT")}</h2>
                    <p>{t("headingsP1")}</p>
                    <Example>
                        <HTMLCodeExample>{headings}</HTMLCodeExample>
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
                        <HTMLCodeExample>{paragraph}</HTMLCodeExample>
                        <p>Hello world</p>
                    </Example>
                </div>
                <div>
                    <h2>{t("spanT")}</h2>
                    <p>{t("spanP1")}</p>
                    <Example>
                        <HTMLCodeExample>{span}</HTMLCodeExample>
                        <p><span>Hello</span> world</p>
                    </Example>
                </div>
                <div>
                    <h2>{t("textLinkT")}</h2>
                    <p>{t("textLinkP1")}</p>
                    <Example>
                        <HTMLCodeExample>{link}</HTMLCodeExample>
                        <a href={'https://www.google.com'}>Hello world</a>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithTextTags;