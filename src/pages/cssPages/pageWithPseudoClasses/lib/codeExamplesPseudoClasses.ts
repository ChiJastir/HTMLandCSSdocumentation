import { useTranslation } from "react-i18next";

export const useCodeExamplesPseudoClasses = () => {
    const { t } = useTranslation()

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
    return { hover, active, focus, visited }
}