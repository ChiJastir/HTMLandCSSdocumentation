import { useTranslation } from "react-i18next";

export const useCodeExamplesPseudoElements = () => {
    const { t } = useTranslation()

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
    return { before, after, placeholder }
}