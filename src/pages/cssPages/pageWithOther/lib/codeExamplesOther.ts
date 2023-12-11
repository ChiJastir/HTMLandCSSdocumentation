import { useState } from "react";
import { store } from "@/shared";
import { useTranslation } from "react-i18next";

export const useCodeExamplesOther = () => {
    const { t } = useTranslation()

    const [zValue, setZValue] = useState(1)
    const [opacityValue, setOpacityValue] = useState(1)
    const [isVisible, setIsVisible] = useState(true)

    const zIndexHTML = `<div class="container">
    <div class="elem1"/>
    <div class="elem2"/>
</div>`
    const zIndexCSS = `.container{
    position: relative;
}

.elem1{
    position: absolute;
    
    z-index: ${zValue}; /* ${t("zIndexC")} */
}

.elem2{
    position: absolute;
    left: 50px;
    top: 50px
}`

    const boxShadowWhite = `div{
    box-shadow: white 0 0 5px;
}`
    const boxShadowRed = `div{
    box-shadow: ${store.getState().themeSlice.themeValue.colors.secondary} 5px 10px;
}`

    const opacity = `div{
    background-color: #e50000
    opacity: ${opacityValue};
}`

    const alignItemsHTML = `<div class="container">
    <div style="height: 100px" class="elem"/>
    <div style="height: 150px" class="elem"/>
    <div style="height: 75px" class="elem"/>
</div>`
    const alignItemsCSS = `.container{
    border: #646cff 1px solid;
    padding: 5px;
    display: flex;
    align-items: center;
}

.elem{
    border: 1px #e50000 solid;
    width: calc(100% / 3);
}`

    const cursor = `.pointer{
    cursor: pointer;
}

.grad{
    cursor: grad;
}`

    const visibility = `div{
    height: 100px;
    background-color: #646cff;
    cursor: pointer;
    ${isVisible ? 'visibility: visible;' : 'visibility: hidden;'}
}`

    const listStyle = `ul{
    list-style: url("images/logo.svg");
}`
    return {
        zValue,
        setZValue,
        opacityValue,
        setOpacityValue,
        isVisible,
        setIsVisible,
        zIndexHTML,
        zIndexCSS,
        boxShadowWhite,
        boxShadowRed,
        opacity,
        alignItemsHTML,
        alignItemsCSS,
        cursor,
        visibility,
        listStyle
    }
}