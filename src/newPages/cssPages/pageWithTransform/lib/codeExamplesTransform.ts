import { useState } from "react";

export const useCodeExamplesTransform = () => {
    const [translate, setTranslate] = useState(false)
    const [rotate, setRotate] = useState(false)
    const [scale, setScale] = useState(false)

    const translateStyle = `div{
    transform: ${translate ? 'translate(5px, 5px)' : 'translate(0, 0)'};
}`

    const rotateStyle = `div{
    transform: ${rotate ? 'rotate(27deg)' : 'rotate(0)'};
}`
    const scaleStyle = `div{
    transform: ${scale ? 'scale(0.5, 1.5)' : 'scale(1, 1)'};
}`
    return { translate, setTranslate, rotate, setRotate, scale, setScale, translateStyle, rotateStyle, scaleStyle }
}