import {useState} from "react";
import {useTranslation} from "react-i18next";

export const useCodeExamplesDisplayOther = () => {
    const { t } = useTranslation()

    const [ visible, setVisible ] = useState(true)
    const [ block, setBlock ] = useState(true)

    const displayNone = `div{
    height: 100px;
    background-color: #646cff;
    ${visible ? `/* ${t("displayNoneC")} */` : 'display: none'}
}`

    const displayBlock = `div{
    display: ${block ? 'block' : 'flex'}
}`
    return {visible, setVisible, block, setBlock, displayNone, displayBlock}
}