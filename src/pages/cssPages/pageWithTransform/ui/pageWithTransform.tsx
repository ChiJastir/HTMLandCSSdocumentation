import styled from "styled-components";
import { CssCodeExample } from "@/entities";
import { Container, ParagraphBorder, Example, ButtonMonochrome } from "@/shared";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { useCodeExamplesTransform } from "../lib/codeExamplesTransform";

export const PageWithTransform = () => {
    const { t } = useTranslation()

    const { translate, translateStyle, rotateStyle, rotate, setRotate, setTranslate, scaleStyle, setScale, scale } = useCodeExamplesTransform()
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
                        <CssCodeExample>{translateStyle}</CssCodeExample>
                        <Transform transform={translate ? 'translate(5px, 5px)' : 'translate(0, 0)'}>{translate ? 'transform: translate(5px, 5px)' : 'transform: translate(0, 0)'}</Transform>
                        <ButtonMonochrome onClick={() => setTranslate(!translate)}>on/off</ButtonMonochrome>
                    </Example>
                </div>
                <div>
                    <h2>transform: rotate()</h2>
                    <p>{t("transformRotateP1")}</p>
                    <Example>
                        <CssCodeExample>{rotateStyle}</CssCodeExample>
                        <Transform transform={rotate ? 'rotate(27deg)' : 'rotate(0)'}>{rotate ? 'transform: rotate(27deg)' : 'transform: rotate(0)'}</Transform>
                        <ButtonMonochrome onClick={() => setRotate(!rotate)}>on/off</ButtonMonochrome>
                    </Example>
                </div>
                <div>
                    <h2>transform: scale()</h2>
                    <p>{t("transformScaleP1")}</p>
                    <Example>
                        <CssCodeExample>{scaleStyle}</CssCodeExample>
                        <Transform transform={scale ? 'scale(0.5, 1.5)' : 'scale(1, 1)'}>{scale ? 'transform: scale(0.5, 1.5)' : 'transform: scale(1, 1)'}</Transform>
                        <ButtonMonochrome onClick={() => setScale(!scale)}>on/off</ButtonMonochrome>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const Transform = styled(ParagraphBorder)<{transform: string}>`
  transform: ${props => props.transform}
`