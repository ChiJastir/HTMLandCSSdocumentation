import styled from "styled-components";
import { CssCodeExample } from "@/entities"
import { Container, Example } from "@/shared";
import { Page } from "@/shared";
import img from '@/shared/assets/ui/react.svg'
import { useTranslation } from "react-i18next";
import { useCodeExamplesColorAndBackground } from "../lib/codeExamplesColorAndBackground";

export const PageWithColorAndBackground = () => {
    const { t } = useTranslation()
    const {
        color,
        backgroundColor,
        backgroundAttachment,
        backgroundImage,
        backgroundRepeat,
        backgroundSize,
        backgroundPosition
    } = useCodeExamplesColorAndBackground()

    return (
        <Page>
            <Container>
                <h1>{t("colorAndBackgroundT")}</h1>
                <div>
                    <h2>{t("colorIndicationFormatsT")}</h2>
                    <ol style={{paddingLeft: '16px'}}>
                        <li>{t("colorIndicationFormatsP1")}</li>
                        <li>{t("colorIndicationFormatsP2")}</li>
                        <li>{t("colorIndicationFormatsP3")}</li>
                        <li>{t("colorIndicationFormatsP4")}</li>
                        <li>{t("colorIndicationFormatsP5")}</li>
                    </ol>
                </div>
                <div>
                    <h2>Color</h2>
                    <p>{t("colorP1")}</p>
                    <Example>
                        <CssCodeExample>{color}</CssCodeExample>
                        <Color>Hello world</Color>
                    </Example>
                </div>
                <div>
                    <h2>Background-color</h2>
                    <p>{t("backgroundColorP1")}</p>
                    <Example>
                        <CssCodeExample>{backgroundColor}</CssCodeExample>
                        <BackgroundColor>Hello world</BackgroundColor>
                    </Example>
                </div>
                <div>
                    <h2>Background-image</h2>
                    <p>{t("backgroundImageP1")}</p>
                    <Example>
                        <CssCodeExample>{backgroundImage}</CssCodeExample>
                        <BackgroundImage img={img}>Hello world</BackgroundImage>
                    </Example>
                </div>
                <div>
                    <h2>Background-attachment</h2>
                    <p>{t("backgroundAttachmentP1")}</p>
                    <Example>
                        <CssCodeExample>{backgroundAttachment}</CssCodeExample>
                        <BackgroundAttachment img={img}>Hello world</BackgroundAttachment>
                    </Example>
                </div>
                <div>
                    <h2>Background-repeat</h2>
                    <p>{t("backgroundRepeatP1")}</p>
                    <Example>
                        <CssCodeExample>{backgroundRepeat}</CssCodeExample>
                        <BackgroundRepeat img={img}>Hello world</BackgroundRepeat>
                    </Example>
                </div>
                <div>
                    <h2>Background-size</h2>
                    <p>{t("backgroundSizeP1")}</p>
                    <Example>
                        <CssCodeExample>{backgroundSize}</CssCodeExample>
                        <BackgroundSize img={img}>Hello world</BackgroundSize>
                    </Example>
                </div>
                <div>
                    <h2>Background-position</h2>
                    <p>{t("backgroundPositionP1")}</p>
                    <Example>
                        <CssCodeExample>{backgroundPosition}</CssCodeExample>
                        <BackgroundPosition img={img}>Hello world</BackgroundPosition>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const Color = styled.p`
  color: #008000
`

const BackgroundColor = styled.p`
  background-color: #008000
`

const BackgroundImage = styled.p<{img: string}>`
  background-image: url("${props => props.img}");
`

const BackgroundAttachment = styled(BackgroundImage)`
  background-attachment: fixed;
`

const BackgroundRepeat = styled(BackgroundImage)`
  background-repeat: no-repeat;
`

const BackgroundSize = styled(BackgroundImage)`
  background-size: 100%;
`

const BackgroundPosition = styled(BackgroundRepeat)`
  background-position: center;
`