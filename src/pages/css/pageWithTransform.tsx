import {useState} from 'react';
import styled from "styled-components";
import CSSCodeExample from "../../components/CSSCodeExample";
import {Container, ParagraphBorder, Example, Button} from "../../UI/components";
import Page from "../../components/page";
import {useTranslation} from "react-i18next";

const PageWithTransform = () => {
    const [translate, setTranslate] = useState(false)
    const [rotate, setRotate] = useState(false)
    const [scale, setScale] = useState(false)

    const {t} = useTranslation()

    const translateStyle = `div{
    transform: ${translate ? 'translate(5px, 5px)' : 'translate(0, 0)'};
}`

    const rotateStyle = `div{
    transform: ${rotate ? 'rotate(27deg)' : 'rotate(0)'};
}`
    const scaleStyle = `div{
    transform: ${scale ? 'scale(0.5, 1.5)' : 'scale(1, 1)'};
}`
    return (
        <Page>
            <Container>
                <h1>Transform</h1>
                <div>
                    <h2>transform</h2>
                    <p>{t("transformP1")}</p>
                </div>
                <div>
                    <h2>transform: translate()</h2>
                    <p>{t("transformTranslateP1")}</p>
                    <Example>
                        <CSSCodeExample>{translateStyle}</CSSCodeExample>
                        <Transform transform={translate ? 'translate(5px, 5px)' : 'translate(0, 0)'}>{translate ? 'transform: translate(5px, 5px)' : 'transform: translate(0, 0)'}</Transform>
                        <Button onClick={() => setTranslate(!translate)}>on/off</Button>
                    </Example>
                </div>
                <div>
                    <h2>transform: rotate()</h2>
                    <p>{t("transformRotateP1")}</p>
                    <Example>
                        <CSSCodeExample>{rotateStyle}</CSSCodeExample>
                        <Transform transform={rotate ? 'rotate(27deg)' : 'rotate(0)'}>{rotate ? 'transform: rotate(27deg)' : 'transform: rotate(0)'}</Transform>
                        <Button onClick={() => setRotate(!rotate)}>on/off</Button>
                    </Example>
                </div>
                <div>
                    <h2>transform: scale()</h2>
                    <p>{t("transformScaleP1")}</p>
                    <Example>
                        <CSSCodeExample>{scaleStyle}</CSSCodeExample>
                        <Transform transform={scale ? 'scale(0.5, 1.5)' : 'scale(1, 1)'}>{scale ? 'transform: scale(0.5, 1.5)' : 'transform: scale(1, 1)'}</Transform>
                        <Button onClick={() => setScale(!scale)}>on/off</Button>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

// CSS
const Transform = styled(ParagraphBorder)<{transform: string}>`
  transform: ${props => props.transform}`

export default PageWithTransform;