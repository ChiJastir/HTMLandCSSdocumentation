import {Container, Example} from "../../UI/components";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";
import HTMLCodeExample from "../../components/HTMLCodeExample";

const PageWithBlocksTags = () => {
    const {t} = useTranslation()

    const div = `<div>
    ...
</div>`
    const header = `<header>
    ...
</header>`
    const footer = `<footer>
    ...
</footer>`
    const section = `<section>
    ...
</section>`
    const aside = `<aside>
    ...
</aside>`
    const article = `<article>
    ...
</article>`
    const main = `<main>
    ...
</main>`
    const nav = `<nav>
    ...
</nav>`

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
                        <HTMLCodeExample>{div}</HTMLCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("headerT")}</h2>
                    <p>{t("headerP1")}</p>
                    <Example>
                        <HTMLCodeExample>{header}</HTMLCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("footerT")}</h2>
                    <p>{t("footerP1")}</p>
                    <Example>
                        <HTMLCodeExample>{footer}</HTMLCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("sectionT")}</h2>
                    <p>{t("sectionP1")}</p>
                    <Example>
                        <HTMLCodeExample>{section}</HTMLCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("asideT")}</h2>
                    <p>{t("asideP1")}</p>
                    <Example>
                        <HTMLCodeExample>{aside}</HTMLCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("articleT")}</h2>
                    <p>{t("articleP1")}</p>
                    <Example>
                        <HTMLCodeExample>{article}</HTMLCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("mainT")}</h2>
                    <p>{t("mainP1")}</p>
                    <Example>
                        <HTMLCodeExample>{main}</HTMLCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("navT")}</h2>
                    <p>{t("navP1")}</p>
                    <Example>
                        <HTMLCodeExample>{nav}</HTMLCodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithBlocksTags;