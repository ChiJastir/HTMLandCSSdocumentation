import { useTranslation } from "react-i18next";

export const useCodeExamplesSelectors = () => {
    const { t } = useTranslation()

    const tagSelectorExample = `p {
    /* ${t("typeSelectorsC")} */
}`

    const classSelectorExample = `.title {
    /* ${t("classSelectorsC")} */
}`

    const idSelectorExample = `#button {
    /* ${t("idSelectorsC")} */
}`

    const attrsSelectorExample = `input[type=radio] {
    /* ${t("attributeSelectorsC")} */
}`

    const allSelectorExample = `* {
    /* ${t("universalSelectorC")} */
}`

    const neighboringRelatedCombinator = `li + li {
    /* ${t("neighboringRelatedCombinatorC")} */
}`

    const childCombinator = `.container > p {
    /* ${t("childCombinatorC")} */
}`

    const commonRelatedCombinator = `.container ~ p {
    /* ${t("commonRelatedCombinatorC")} */
}`

    const flowCombinator = `div p {
    /* ${t("descendantCombinatorC")} */
}`
    return {
        tagSelectorExample,
        classSelectorExample,
        idSelectorExample,
        attrsSelectorExample,
        allSelectorExample,
        neighboringRelatedCombinator,
        childCombinator,
        commonRelatedCombinator,
        flowCombinator
    }
}