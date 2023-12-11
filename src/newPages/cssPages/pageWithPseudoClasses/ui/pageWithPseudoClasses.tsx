import { CssCodeExample } from "@/entities"
import { Container, Example } from "@/shared"
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import {useCodeExamplesPseudoClasses} from "../lib/codeExamplesPseudoClasses";

export const PageWithPseudoClasses = () => {
    const { t } = useTranslation()

    const { active, hover, visited, focus } = useCodeExamplesPseudoClasses()

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
                        <CssCodeExample>{hover}</CssCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>:active</h2>
                    <p>{t("activeP1")}</p>
                    <Example>
                        <CssCodeExample>{active}</CssCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>:focus</h2>
                    <p>{t("focusP1")}</p>
                    <Example>
                        <CssCodeExample>{focus}</CssCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>:visited</h2>
                    <p>{t("visitedP1")}</p>
                    <Example>
                        <CssCodeExample>{visited}</CssCodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};