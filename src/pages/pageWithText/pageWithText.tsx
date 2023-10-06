import classes from './pageWithText.module.css';
import Navigation from "../../components/navigation/navigation.jsx";
import Container from "../../UI/container.tsx";
import CodeExample from "../../UI/codeExample.tsx";
import Code from "../../UI/code.tsx";

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
        <div className={'page'}>
            <Navigation/>
            <Container>
                <h1>Текст</h1>
                <div className="item">
                    <h2>font-family</h2>
                    <p><Code>font-family</Code> задаёт шрифт тексту. Возможно указать несколько значений, шрифты в начале имеют больший приоритет. Также имеются стандартные значения <Code>serif</Code> и <Code>sans-serif</Code>, которые гарантированно есть на всех устройствах</p>
                    <div className="example">
                        <CodeExample>{fontFamilyArialSansSerif}</CodeExample>
                        <p className={classes.fontFamilyArialSansSerif}>{textExample}</p>
                    </div>
                    <div className="example">
                        <CodeExample>{fontFamilySerif}</CodeExample>
                        <p className={classes.fontFamilySerif}>{textExample}</p>
                    </div>
                </div>
                <div className="item">
                    <h2>font-size</h2>
                    <p><Code>font-size</Code> задаёт размер шрифта. Можно использовать как абсольтные, так и относительные единицы измерения</p>
                    <div className="example">
                        <CodeExample>{fontSize24px}</CodeExample>
                        <p className={classes.fontSize24px}>{textExample}</p>
                    </div>
                    <div className="example">
                        <CodeExample>{fontSize3vw}</CodeExample>
                        <p className={classes.fontSize3vw}>{textExample}</p>
                    </div>
                </div>
                <div className="item">
                    <h2>font-weight</h2>
                    <p><Code>font-weight</Code> определяет толщину шрифта. Можно указывать значение словами <Code>normal</Code>, <Code>bold</Code> и др. Но я предпочитаю использовать числовые значения: 100, 200, 300... 700. От 100 до 700 с шагом в сотню. Указывать единицы измерения не нужно. Ещё следует заметить, что далеко не все шрифты имеют начертания всех типов</p>
                    <div className="example">
                        <CodeExample>{fontWeightBold}</CodeExample>
                        <p className={classes.fontWeightBold}>{textExample}</p>
                    </div>
                    <div className="example">
                        <CodeExample>{fontWeight100}</CodeExample>
                        <p className={classes.fontWeight100}>{textExample}</p>
                    </div>
                </div>
                <div className="item">
                    <h2>text-align</h2>
                    <p><Code>text-align</Code> это выравнивание текста по одному из краев. Для счастливой жизни достаточно знать <Code>left</Code>, <Code>right</Code>, <Code>center</Code> и <Code>justify</Code></p>
                    <div className="example">
                        <CodeExample>{textAlignCenter}</CodeExample>
                        <p className={classes.textAlignCenter}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid, aut consequatur cupiditate dolor earum ex excepturi facere illo magnam, mollitia nisi perspiciatis provident quae, quos similique sunt. Ab adipisci consectetur dolor eaque, et ex, ipsa labore magnam molestiae necessitatibus nemo neque odit perferendis perspiciatis possimus quibusdam quis unde vero. Accusantium consequuntur ea eligendi itaque laudantium, nam nihil nulla, numquam perferendis quae, quaerat quasi quibusdam veniam! Accusantium aliquam aliquid aspernatur corporis cumque dolore eius, eos error est ex fugit id illum incidunt laborum laudantium magnam maxime natus necessitatibus nemo non quibusdam recusandae repellendus sequi tempore unde vel veniam voluptate? Dolorem.</p>
                    </div>
                    <div className="example">
                        <CodeExample>{textAlignJustify}</CodeExample>
                        <p className={classes.textAlignJustify}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid, aut consequatur cupiditate dolor earum ex excepturi facere illo magnam, mollitia nisi perspiciatis provident quae, quos similique sunt. Ab adipisci consectetur dolor eaque, et ex, ipsa labore magnam molestiae necessitatibus nemo neque odit perferendis perspiciatis possimus quibusdam quis unde vero. Accusantium consequuntur ea eligendi itaque laudantium, nam nihil nulla, numquam perferendis quae, quaerat quasi quibusdam veniam! Accusantium aliquam aliquid aspernatur corporis cumque dolore eius, eos error est ex fugit id illum incidunt laborum laudantium magnam maxime natus necessitatibus nemo non quibusdam recusandae repellendus sequi tempore unde vel veniam voluptate? Dolorem.</p>
                    </div>
                </div>
                <div className="item">
                    <h2>text-shadow</h2>
                    <p><Code>text-shadow</Code> добавляет тень для текста. Указывается цвет и три числовых значения по порядку: сдвиг по X, сдвиг по Y и степень размытия</p>
                    <div className="example">
                        <CodeExample>{textShadowWhite}</CodeExample>
                        <p className={classes.textShadowWhite}>{textExample}</p>
                    </div>
                    <div className="example">
                        <CodeExample>{textShadowRed}</CodeExample>
                        <p className={classes.textShadowRed}>{textExample}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageWithText;