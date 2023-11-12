import {Container, Example} from "../../UI/components";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";
import HTMLCodeExample from "../../components/code/HTMLCodeExample";

const PageWithInputs = () => {
    const {t} = useTranslation()

    const form = `<form>
  ...
</form>`
    const inputText = `<input type="text" name="text" placeholder="${t("inputTextC")}">`
    const inputPassword = `<input type="password" name="password" placeholder="${t("inputPasswordC")}">`
    const inputRadio = `<input type="radio" name="radio"/>
<input type="radio" name="radio"/>
<input type="radio" name="radio"/>`
    const inputCheckbox = `<input type="checkbox" name="checkbox"/>
<input type="checkbox" name="checkbox"/>
<input type="checkbox" name="checkbox"/>`
    const inputButton = `<input type="button" value="${t("inputButtonC")}">`
    const inputSubmit = `<input type="submit">`

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
                        <HTMLCodeExample>{form}</HTMLCodeExample>
                    </Example>
                </div>
                <div>
                    <h2>{t("inputTextT")}</h2>
                    <p>{t("inputTextP1")}</p>
                    <Example>
                        <HTMLCodeExample>{inputText}</HTMLCodeExample>
                        <input type={'text'} placeholder={t("inputTextC")}/>
                    </Example>
                </div>
                <div>
                    <h2>{t("inputPasswordT")}</h2>
                    <p>{t("inputPasswordP1")}</p>
                    <Example>
                        <HTMLCodeExample>{inputPassword}</HTMLCodeExample>
                        <input type={'password'} placeholder={t("inputPasswordC")}/>
                    </Example>
                </div>
                <div>
                    <h2>{t("inputRadioT")}</h2>
                    <p>{t("inputRadioP1")}</p>
                    <Example>
                        <HTMLCodeExample>{inputRadio}</HTMLCodeExample>
                        <input type={'radio'} name={'radio'}/>
                        <input type={'radio'} name={'radio'}/>
                        <input type={'radio'} name={'radio'}/>
                    </Example>
                </div>
                <div>
                    <h2>{t("inputCheckboxT")}</h2>
                    <p>{t("inputCheckboxP1")}</p>
                    <Example>
                        <HTMLCodeExample>{inputCheckbox}</HTMLCodeExample>
                        <input type={'checkbox'} name={'checkbox'}/>
                        <input type={'checkbox'} name={'checkbox'}/>
                        <input type={'checkbox'} name={'checkbox'}/>
                    </Example>
                </div>
                <div>
                    <h2>{t("inputButtonT")}</h2>
                    <p>{t("inputButtonP1")}</p>
                    <Example>
                        <HTMLCodeExample>{inputButton}</HTMLCodeExample>
                        <input type={'button'} value={t("inputButtonC")}/>
                    </Example>
                </div>
                <div>
                    <h2>{t("inputSubmitT")}</h2>
                    <p>{t("inputSubmitP1")}</p>
                    <Example>
                        <HTMLCodeExample>{inputSubmit}</HTMLCodeExample>
                        <input type={'submit'}/>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithInputs;