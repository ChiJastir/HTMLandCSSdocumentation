import {useState} from "react";

export const useCodeExamplesPosition = () => {
    const [absolute, setAbsolute] = useState(false)
    const [relative, setRelative] = useState(false)
    const [fixed, setFixed] = useState(false)

    const absoluteStyle = `div{
    position: ${absolute ? 'absolute' : 'static'};
    top: 5px;
    left: 5px;
}`

    const relativeStyle = `div{
    position: ${relative ? 'relative' : 'static'};
    top: 5px;
    left: 5px;
}`
    const fixedStyle = `div{
    position: ${fixed ? 'fixed' : 'static'};
    top: 5px;
    left: 5px;
}`
    return { absolute, setAbsolute, relative, setRelative, fixed, setFixed, absoluteStyle, relativeStyle, fixedStyle }
}