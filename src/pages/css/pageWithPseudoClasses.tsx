import CodeExample from "../../components/codeExample.tsx"
import {Container, Example} from "../../UI/components"
import Page from "../../components/page";
import {useTranslation} from "react-i18next";

const PageWithPseudoClasses = () => {
    const {t} = useTranslation()

    const hover = `button:hover {
    /* ${t("hoverC")} */
}`

    const active = `button:active {
    /* ${t("activeC")} */
}`

    const focus = `button:focus {
    /* ${t("focusC")} */
}`

    const visited = `a:visited {
    /* ${t("visitedC")} */
}`

    return (
        <Page>
            <Container>
                <h1>{t("pseudoClassesT")}</h1>
                <div>
                    <h2>{t("pseudoClassesIntroductoryInformationT")}</h2>
                    <p>{t("pseudoClassesIntroductoryInformationP1")}</p>
                </div>
                <div>
                    <h2>:hover</h2>
                    <p>{t("hoverP1")}</p>
                    <Example>
                        <CodeExample>{hover}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>:active</h2>
                    <p>{t("activeP1")}</p>
                    <Example>
                        <CodeExample>{active}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>:focus</h2>
                    <p>{t("focusP1")}</p>
                    <Example>
                        <CodeExample>{focus}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>:visited</h2>
                    <p>{t("visitedP1")}</p>
                    <Example>
                        <CodeExample>{visited}</CodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithPseudoClasses;