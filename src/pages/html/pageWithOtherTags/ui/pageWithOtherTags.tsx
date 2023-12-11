import { Container, Example } from "@/shared";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { HtmlCodeExample } from "@/entities";
import reactLogo from '@shared/assets/ui/react.svg'
import { useCodeExamplesOtherTags } from "../lib/codeExamplesOtherTags";

export const PageWithOtherTags = () => {
    const { t } = useTranslation()
    const { button, img } = useCodeExamplesOtherTags()

    return (
        <Page>
            <Container>
                <h1>{t("otherTagsT")}</h1>
                <div>
                    <h2>{t("imgT")}</h2>
                    <p>{t("imgP1")}</p>
                    <Example>
                        <HtmlCodeExample>{img}</HtmlCodeExample>
                        <img src={reactLogo} alt="react-logo"/>
                    </Example>
                </div>
                <div>
                    <h2>{t("buttonT")}</h2>
                    <p>{t("buttonP1")}</p>
                    <Example>
                        <HtmlCodeExample>{button}</HtmlCodeExample>
                        <button>...</button>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};