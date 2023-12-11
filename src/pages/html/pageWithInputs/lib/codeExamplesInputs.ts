import { useTranslation } from "react-i18next";

export const useCodeExamplesInputs = () => {
    const { t } = useTranslation()

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

    return {
        form,
        inputButton,
        inputText,
        inputCheckbox,
        inputPassword,
        inputSubmit,
        inputRadio
    }
}