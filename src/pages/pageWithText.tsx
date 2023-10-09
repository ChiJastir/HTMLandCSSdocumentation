import Navigation from "../components/navigation";
import CodeExample from "../components/codeExample.tsx";
import {Container, Code, Page, Example} from "../UI/components";
import styled from "styled-components";

const PageWithText = () => {
    const textExample = 'Hello world'

    const fontFamilyArialSansSerif = `p {
    font-family: "Arial", sans-serif;
}`
    const fontFamilySerif = `p {
    font-family: serif;
}`

    const fontSize24px = `p {
    font-size: 24px;
}`
    const fontSize3vw = `p {
    font-size: 3vw;
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
    return (
        <Page>
            <Navigation/>
            <Container>
                <h1>Текст</h1>
                <div>
                    <h2>font-family</h2>
                    <p><Code>font-family</Code> задаёт шрифт тексту. Возможно указать несколько значений, шрифты в начале имеют больший приоритет. Также имеются стандартные значения <Code>serif</Code> и <Code>sans-serif</Code>, которые гарантированно есть на всех устройствах</p>
                    <Example>
                        <CodeExample>{fontFamilyArialSansSerif}</CodeExample>
                        <FontFamilyArialSansSerif>{textExample}</FontFamilyArialSansSerif>
                    </Example>
                    <Example>
                        <CodeExample>{fontFamilySerif}</CodeExample>
                        <FontFamilySerif>{textExample}</FontFamilySerif>
                    </Example>
                </div>
                <div>
                    <h2>font-size</h2>
                    <p><Code>font-size</Code> задаёт размер шрифта. Можно использовать как абсольтные, так и относительные единицы измерения</p>
                    <Example>
                        <CodeExample>{fontSize24px}</CodeExample>
                        <FontSize24px>{textExample}</FontSize24px>
                    </Example>
                    <Example>
                        <CodeExample>{fontSize3vw}</CodeExample>
                        <FontSize3vw>{textExample}</FontSize3vw>
                    </Example>
                </div>
                <div>
                    <h2>font-weight</h2>
                    <p><Code>font-weight</Code> определяет толщину шрифта. Можно указывать значение словами <Code>normal</Code>, <Code>bold</Code> и др. Но я предпочитаю использовать числовые значения: 100, 200, 300... 700. От 100 до 700 с шагом в сотню. Указывать единицы измерения не нужно. Ещё следует заметить, что далеко не все шрифты имеют начертания всех типов</p>
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
                        <TextAlignCenter>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid, aut consequatur cupiditate dolor earum ex excepturi facere illo magnam, mollitia nisi perspiciatis provident quae, quos similique sunt. Ab adipisci consectetur dolor eaque, et ex, ipsa labore magnam molestiae necessitatibus nemo neque odit perferendis perspiciatis possimus quibusdam quis unde vero. Accusantium consequuntur ea eligendi itaque laudantium, nam nihil nulla, numquam perferendis quae, quaerat quasi quibusdam veniam! Accusantium aliquam aliquid aspernatur corporis cumque dolore eius, eos error est ex fugit id illum incidunt laborum laudantium magnam maxime natus necessitatibus nemo non quibusdam recusandae repellendus sequi tempore unde vel veniam voluptate? Dolorem.</TextAlignCenter>
                    </Example>
                    <Example>
                        <CodeExample>{textAlignJustify}</CodeExample>
                        <TextAlignJustify>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid, aut consequatur cupiditate dolor earum ex excepturi facere illo magnam, mollitia nisi perspiciatis provident quae, quos similique sunt. Ab adipisci consectetur dolor eaque, et ex, ipsa labore magnam molestiae necessitatibus nemo neque odit perferendis perspiciatis possimus quibusdam quis unde vero. Accusantium consequuntur ea eligendi itaque laudantium, nam nihil nulla, numquam perferendis quae, quaerat quasi quibusdam veniam! Accusantium aliquam aliquid aspernatur corporis cumque dolore eius, eos error est ex fugit id illum incidunt laborum laudantium magnam maxime natus necessitatibus nemo non quibusdam recusandae repellendus sequi tempore unde vel veniam voluptate? Dolorem.</TextAlignJustify>
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
            </Container>
        </Page>
    );
};

const FontFamilyArialSansSerif = styled.p`font-family: "Arial", sans-serif;`
const FontFamilySerif = styled.p`font-family: serif;`
const FontSize24px = styled.p`font-size: 24px;`
const FontSize3vw = styled.p`font-size: 3vw;`
const FontWeightBold = styled.p`font-weight: bold;`
const FontWeight100 = styled.p`font-weight: 100;`
const TextAlignCenter = styled.p`text-align: center;`
const TextAlignJustify = styled.p`text-align: justify;`
const TextShadowWhite = styled.p`text-shadow: white 0 0 5px;`
const TextShadowRed = styled.p`text-shadow: red 5px 10px;`

export default PageWithText;