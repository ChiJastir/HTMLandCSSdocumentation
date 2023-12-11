import { Container, Example } from "@/shared";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { HtmlCodeExample } from "@/entities";
import { useCodeExamplesInputs } from "../lib/codeExamplesInputs";

export const PageWithInputs = () => {
    const { t } = useTranslation()
    const {
        inputCheckbox,
        inputButton,
        inputPassword,
        inputText,
        inputSubmit,
        inputRadio,
        form
    } = useCodeExamplesInputs()

    return (
        <Page>
            <Container>
                <h1>{t("inputsT")}</h1>
                <div>
                    <h2>{t("inputsIntroductoryInformationT")}</h2>
                    <p>{t("inputsIntroductoryInformationP1")}</p>
                </div>
                <div>
                    <h2>{t("valueAndPlaceholderT")}</h2>
                    <p>{t("valueAndPlaceholderP1")}</p>
                </div>
                <div>
                    <h2>{t("formT")}</h2>
                    <p>{t("formP1")}</p>
                    <Example>
                        <HtmlCodeExample>{form}</HtmlCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("inputTextT")}</h2>
                    <p>{t("inputTextP1")}</p>
                    <Example>
                        <HtmlCodeExample>{inputText}</HtmlCodeExample>
                        <input type={'text'} placeholder={t("inputTextC")}/>
                    </Example>
                </div>
                <div>
                    <h2>{t("inputPasswordT")}</h2>
                    <p>{t("inputPasswordP1")}</p>
                    <Example>
                        <HtmlCodeExample>{inputPassword}</HtmlCodeExample>
                        <input type={'password'} placeholder={t("inputPasswordC")}/>
                    </Example>
                </div>
                <div>
                    <h2>{t("inputRadioT")}</h2>
                    <p>{t("inputRadioP1")}</p>
                    <Example>
                        <HtmlCodeExample>{inputRadio}</HtmlCodeExample>
                        <input type={'radio'} name={'radio'}/>
                        <input type={'radio'} name={'radio'}/>
                        <input type={'radio'} name={'radio'}/>
                    </Example>
                </div>
                <div>
                    <h2>{t("inputCheckboxT")}</h2>
                    <p>{t("inputCheckboxP1")}</p>
                    <Example>
                        <HtmlCodeExample>{inputCheckbox}</HtmlCodeExample>
                        <input type={'checkbox'} name={'checkbox'}/>
                        <input type={'checkbox'} name={'checkbox'}/>
                        <input type={'checkbox'} name={'checkbox'}/>
                    </Example>
                </div>
                <div>
                    <h2>{t("inputButtonT")}</h2>
                    <p>{t("inputButtonP1")}</p>
                    <Example>
                        <HtmlCodeExample>{inputButton}</HtmlCodeExample>
                        <input type={'button'} value={t("inputButtonC")}/>
                    </Example>
                </div>
                <div>
                    <h2>{t("inputSubmitT")}</h2>
                    <p>{t("inputSubmitP1")}</p>
                    <Example>
                        <HtmlCodeExample>{inputSubmit}</HtmlCodeExample>
                        <input type={'submit'}/>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};