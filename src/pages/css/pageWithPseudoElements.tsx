import CSSCodeExample from "../../components/CSSCodeExample.tsx"
import {Container, Example} from "../../UI/components"
import Page from "../../components/page";
import {useTranslation} from "react-i18next";

const PageWithPseudoElements = () => {
    const {t} = useTranslation()

    const before = `li::before {
    content: "$";
    /* ${t("beforeC")} */
}`

    const after = `li::after {
    content: "&";
    /* ${t("afterC")} */
}`

    const placeholder = `input[type=text]::placeholder {
    /* ${t("placeholderC")} */
}`

    return (
        <Page>
            <Container>
                <h1><span>{t("pseudoElementsT")}</span></h1>
                <div>
                    <h2>{t("pseudoElementsIntroductoryInformationT")}</h2>
                    <p>{t("pseudoElementsIntroductoryInformationP1")}</p>
                </div>
                <div>
                    <h2>::before</h2>
                    <p>{t("beforeP1")}</p>
                    <Example>
                        <CSSCodeExample>{before}</CSSCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>::after</h2>
                    <p>{t("afterP1")}</p>
                    <Example>
                        <CSSCodeExample>{after}</CSSCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>::placeholder</h2>
                    <p>{t("placeholderP1")}</p>
                    <Example>
                        <CSSCodeExample>{placeholder}</CSSCodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithPseudoElements;