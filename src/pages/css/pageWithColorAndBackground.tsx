import styled from "styled-components";
import CSSCodeExample from "../../components/CSSCodeExample.tsx"
import {Container, Example} from "../../UI/components";
import Page from "../../components/page";
import img from '../../assets/react.svg'
import {useTranslation} from "react-i18next";

const PageWithColorAndBackground = () => {
    const {t} = useTranslation()

    const color = `p {
    color: #008000;
}`

    const backgroundColor = `p {
    background-color: #008000;
}`

    const backgroundImage = `p {
    background-image: url("images/logo.svg");
}`

    const backgroundAttachment = `p {
    background-image: url("images/logo.svg");
    background-attachment: fixed;
}`

    const backgroundRepeat = `p {
    background-image: url("images/logo.svg");
    background-repeat: no-repeat;
}`

    const backgroundSize = `p {
    background-image: url("images/logo.svg");
    background-size: 100%;
}`

    const backgroundPosition = `p {
    background-image: url("images/logo.svg");
    background-repeat: no-repeat;
    background-position: center;;
}`

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
                        <CSSCodeExample>{color}</CSSCodeExample>
                        <Color>Hello world</Color>
                    </Example>
                </div>
                <div>
                    <h2>Background-color</h2>
                    <p>{t("backgroundColorP1")}</p>
                    <Example>
                        <CSSCodeExample>{backgroundColor}</CSSCodeExample>
                        <BackgroundColor>Hello world</BackgroundColor>
                    </Example>
                </div>
                <div>
                    <h2>Background-image</h2>
                    <p>{t("backgroundImageP1")}</p>
                    <Example>
                        <CSSCodeExample>{backgroundImage}</CSSCodeExample>
                        <BackgroundImage img={img}>Hello world</BackgroundImage>
                    </Example>
                </div>
                <div>
                    <h2>Background-attachment</h2>
                    <p>{t("backgroundAttachmentP1")}</p>
                    <Example>
                        <CSSCodeExample>{backgroundAttachment}</CSSCodeExample>
                        <BackgroundAttachment img={img}>Hello world</BackgroundAttachment>
                    </Example>
                </div>
                <div>
                    <h2>Background-repeat</h2>
                    <p>{t("backgroundRepeatP1")}</p>
                    <Example>
                        <CSSCodeExample>{backgroundRepeat}</CSSCodeExample>
                        <BackgroundRepeat img={img}>Hello world</BackgroundRepeat>
                    </Example>
                </div>
                <div>
                    <h2>Background-size</h2>
                    <p>{t("backgroundSizeP1")}</p>
                    <Example>
                        <CSSCodeExample>{backgroundSize}</CSSCodeExample>
                        <BackgroundSize img={img}>Hello world</BackgroundSize>
                    </Example>
                </div>
                <div>
                    <h2>Background-position</h2>
                    <p>{t("backgroundPositionP1")}</p>
                    <Example>
                        <CSSCodeExample>{backgroundPosition}</CSSCodeExample>
                        <BackgroundPosition img={img}>Hello world</BackgroundPosition>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const Color = styled.p`
  color: #008000`

const BackgroundColor = styled.p`
  background-color: #008000`

const BackgroundImage = styled.p<{img: string}>`
  background-image: url("${props => props.img}");`

const BackgroundAttachment = styled(BackgroundImage)`
  background-attachment: fixed;`

const BackgroundRepeat = styled(BackgroundImage)`
  background-repeat: no-repeat;`

const BackgroundSize = styled(BackgroundImage)`
  background-size: 100%;`

const BackgroundPosition = styled(BackgroundRepeat)`
  background-position: center;`

export default PageWithColorAndBackground;