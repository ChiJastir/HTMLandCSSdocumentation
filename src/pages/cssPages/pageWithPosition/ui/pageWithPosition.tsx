import { CssCodeExample } from "@/entities";
import { Container, ParagraphBorder, Example, ButtonMonochrome } from "@/shared";
import styled from "styled-components";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { useCodeExamplesPosition } from "../lib/codeExamplesPosition";

export const PageWithPosition = () => {
    const { t } = useTranslation()
    const { fixedStyle, setFixed, fixed, absolute, setAbsolute, absoluteStyle, relativeStyle, relative, setRelative } = useCodeExamplesPosition()

    return (
        <Page>
            <Container>
                <h1>Position</h1>
                <div>
                    <h2>position</h2>
                    <p>{t("positionP1")}</p>
                </div>
                <div>
                    <h2>position: absolute</h2>
                    <p>{t("positionAbsoluteP1")}</p>
                    <Example>
                        <CssCodeExample>{absoluteStyle}</CssCodeExample>
                        <Position position={absolute ? 'absolute' : 'static'}>{absolute ? 'absolute' : 'static'}</Position>
                        <ButtonMonochrome onClick={() => setAbsolute(!absolute)}>absolute/static</ButtonMonochrome>
                    </Example>
                </div>
                <div>
                    <h2>position: relative</h2>
                    <p>{t("positionRelativeP1")}</p>
                    <Example>
                        <CssCodeExample>{relativeStyle}</CssCodeExample>
                        <Position position={relative ? 'relative' : 'static'}>{relative ? 'relative' : 'static'}</Position>
                        <ButtonMonochrome onClick={() => setRelative(!relative)}>relative/static</ButtonMonochrome>
                    </Example>
                </div>
                <div>
                    <h2>position: fixed</h2>
                    <p>{t("positionFixedP1")}</p>
                    <Example>
                        <CssCodeExample>{fixedStyle}</CssCodeExample>
                        <Position position={fixed ? 'fixed' : 'static'}>{fixed ? 'fixed' : 'static'}</Position>
                        <ButtonMonochrome onClick={() => setFixed(!fixed)}>fixed/static</ButtonMonochrome>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const Position = styled(ParagraphBorder)<{position: string}>`
  position: ${props => props.position};
  top: 5px;
  left: 5px;
`