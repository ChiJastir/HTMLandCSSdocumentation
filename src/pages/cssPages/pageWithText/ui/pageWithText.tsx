import { CssCodeExample } from "@/entities";
import { Container, Example } from "@/shared";
import styled from "styled-components";
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { useCodeExamplesText } from "../lib/codeExamplesText";

export const PageWithText = () => {
    const { t } = useTranslation()
    const { fontFamilyArialSansSerif,fontSize24px, fontWeightBold, fontWeight100, textAlignCenter, textAlignJustify, textShadowRed, textShadowWhite, textDecorationUnderline } = useCodeExamplesText()

    const textExample = 'Hello world'

    return (
        <Page>
            <Container>
                <h1>{t("textT")}</h1>
                <div>
                    <h2>font-family</h2>
                    <p>{t("fontFamilyP1")}</p>
                    <Example>
                        <CssCodeExample>{fontFamilyArialSansSerif}</CssCodeExample>
                        <FontFamilyArialSansSerif>{textExample}</FontFamilyArialSansSerif>
                    </Example>
                </div>
                <div>
                    <h2>font-size</h2>
                    <p>{t("fontSizeP1")}</p>
                    <Example>
                        <CssCodeExample>{fontSize24px}</CssCodeExample>
                        <FontSize24px>{textExample}</FontSize24px>
                    </Example>
                </div>
                <div>
                    <h2>font-weight</h2>
                    <p>{t("fontWeightP1")}</p>
                    <Example>
                        <CssCodeExample>{fontWeightBold}</CssCodeExample>
                        <FontWeightBold>{textExample}</FontWeightBold>
                    </Example>
                    <Example>
                        <CssCodeExample>{fontWeight100}</CssCodeExample>
                        <FontWeight100>{textExample}</FontWeight100>
                    </Example>
                </div>
                <div>
                    <h2>text-align</h2>
                    <p>{t("textAlignP1")}</p>
                    <Example>
                        <CssCodeExample>{textAlignCenter}</CssCodeExample>
                        <TextAlignCenter>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolores enim libero provident quam quo similique? Assumenda debitis inventore laborum minima neque odio reiciendis vel? Culpa cupiditate delectus fugit labore laboriosam laborum magni, maxime nemo quasi quidem repudiandae soluta sunt vero? Aliquam, architecto ipsum itaque laudantium optio reprehenderit repudiandae veritatis!</TextAlignCenter>
                    </Example>
                    <Example>
                        <CssCodeExample>{textAlignJustify}</CssCodeExample>
                        <TextAlignJustify>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolores enim libero provident quam quo similique? Assumenda debitis inventore laborum minima neque odio reiciendis vel? Culpa cupiditate delectus fugit labore laboriosam laborum magni, maxime nemo quasi quidem repudiandae soluta sunt vero? Aliquam, architecto ipsum itaque laudantium optio reprehenderit repudiandae veritatis!</TextAlignJustify>
                    </Example>
                </div>
                <div>
                    <h2>text-shadow</h2>
                    <p>{t("textShadowP1")}</p>
                    <Example>
                        <CssCodeExample>{textShadowWhite}</CssCodeExample>
                        <TextShadowWhite>{textExample}</TextShadowWhite>
                    </Example>
                    <Example>
                        <CssCodeExample>{textShadowRed}</CssCodeExample>
                        <TextShadowRed>{textExample}</TextShadowRed>
                    </Example>
                </div>
                <div>
                    <h2>text-decoration</h2>
                    <p>{t("textDecorationP1")}</p>
                    <Example>
                        <CssCodeExample>{textDecorationUnderline}</CssCodeExample>
                        <TextDecorationUnderline>{textExample}</TextDecorationUnderline>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const FontFamilyArialSansSerif = styled.p`font-family: "Arial", sans-serif;`
const FontSize24px = styled.p`font-size: 24px;`
const FontWeightBold = styled.p`font-weight: bold;`
const FontWeight100 = styled.p`font-weight: 100;`
const TextAlignCenter = styled.p`text-align: center;`
const TextAlignJustify = styled.p`text-align: justify;`
const TextShadowWhite = styled.p`text-shadow: white 0 0 5px;`
const TextShadowRed = styled.p`text-shadow: red 5px 10px;`
const TextDecorationUnderline = styled.p`text-decoration: underline;`