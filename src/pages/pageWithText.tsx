import CodeExample from "../components/codeExample.tsx";
import {Container, Code, Example} from "../UI/components";
import styled from "styled-components";
import Page from "../components/page";

const PageWithText = () => {
    const textExample = 'Hello world'

    const fontFamilyArialSansSerif = `p {
    font-family: "Arial", sans-serif;
}`

    const fontSize24px = `p {
    font-size: 24px;
}`

    const fontWeightBold = `p {
    font-weight: bold;
}`
    const fontWeight100 = `p {
    font-weight: 100;
}`

    const textAlignCenter = `p {
    text-align: center;
}`
    const textAlignJustify = `p {
    text-align: justify;
}`

    const textShadowWhite = `p {
    text-shadow: white 0 0 5px;
}`
    const textShadowRed = `p {
    text-shadow: red 5px 10px;
}`

    const textDecorationUnderline = `p {
    text-decoration: underline;
}`
    return (
        <Page>
            <Container>
                <h1>Текст</h1>
                <div>
                    <h2>font-family</h2>
                    <p><Code>font-family</Code> задаёт шрифт тексту. Возможно указать несколько значений, шрифты в начале имеют больший приоритет. Также имеются стандартные значения <Code>serif</Code> и <Code>sans-serif</Code>, которые гарантированно есть на всех устройствах</p>
                    <Example>
                        <CodeExample>{fontFamilyArialSansSerif}</CodeExample>
                        <FontFamilyArialSansSerif>{textExample}</FontFamilyArialSansSerif>
                    </Example>
                </div>
                <div>
                    <h2>font-size</h2>
                    <p><Code>font-size</Code> задаёт размер шрифта</p>
                    <Example>
                        <CodeExample>{fontSize24px}</CodeExample>
                        <FontSize24px>{textExample}</FontSize24px>
                    </Example>
                </div>
                <div>
                    <h2>font-weight</h2>
                    <p><Code>font-weight</Code> определяет толщину шрифта. Можно указывать значение словами <Code>normal</Code>, <Code>bold</Code> и др. Но я предпочитаю использовать числовые значения: 100, 200, 300... 900. От 100 до 900 с шагом в сотню. Указывать единицы измерения не нужно. Ещё следует заметить, что далеко не все шрифты имеют начертания всех типов</p>
                    <Example>
                        <CodeExample>{fontWeightBold}</CodeExample>
                        <FontWeightBold>{textExample}</FontWeightBold>
                    </Example>
                    <Example>
                        <CodeExample>{fontWeight100}</CodeExample>
                        <FontWeight100>{textExample}</FontWeight100>
                    </Example>
                </div>
                <div>
                    <h2>text-align</h2>
                    <p><Code>text-align</Code> это выравнивание текста по одному из краев. Для счастливой жизни достаточно знать <Code>left</Code>, <Code>right</Code>, <Code>center</Code> и <Code>justify</Code></p>
                    <Example>
                        <CodeExample>{textAlignCenter}</CodeExample>
                        <TextAlignCenter>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolores enim libero provident quam quo similique? Assumenda debitis inventore laborum minima neque odio reiciendis vel? Culpa cupiditate delectus fugit labore laboriosam laborum magni, maxime nemo quasi quidem repudiandae soluta sunt vero? Aliquam, architecto ipsum itaque laudantium optio reprehenderit repudiandae veritatis!</TextAlignCenter>
                    </Example>
                    <Example>
                        <CodeExample>{textAlignJustify}</CodeExample>
                        <TextAlignJustify>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolores enim libero provident quam quo similique? Assumenda debitis inventore laborum minima neque odio reiciendis vel? Culpa cupiditate delectus fugit labore laboriosam laborum magni, maxime nemo quasi quidem repudiandae soluta sunt vero? Aliquam, architecto ipsum itaque laudantium optio reprehenderit repudiandae veritatis!</TextAlignJustify>
                    </Example>
                </div>
                <div>
                    <h2>text-shadow</h2>
                    <p><Code>text-shadow</Code> добавляет тень для текста. Указывается цвет и три числовых значения по порядку: сдвиг по X, сдвиг по Y и степень размытия</p>
                    <Example>
                        <CodeExample>{textShadowWhite}</CodeExample>
                        <TextShadowWhite>{textExample}</TextShadowWhite>
                    </Example>
                    <Example>
                        <CodeExample>{textShadowRed}</CodeExample>
                        <TextShadowRed>{textExample}</TextShadowRed>
                    </Example>
                </div>
                <div>
                    <h2>text-decoration</h2>
                    <p><Code>text-decoration</Code> подчёркивает(<Code>underline</Code>), зачёркивает(<Code>line-through</Code>) или надчёркивает(<Code>overline</Code>) текст</p>
                    <Example>
                        <CodeExample>{textDecorationUnderline}</CodeExample>
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

export default PageWithText;