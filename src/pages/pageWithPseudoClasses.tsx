import CodeExample from "../components/codeExample.tsx"
import {Container, Example, Code} from "../UI/components"
import Page from "../components/page";

const PageWithAnimation = () => {
    const hover = `button:hover {
    /* Стили будут применены к <button> при наведении на неё мыши */
}`

    const active = `button:active {
    /* Стили будут применены к <button> при нажатии на неё */
}`

    const focus = `button:focus {
    /* Стили будут применены к <button> в фокусе (например выбор кнопки через Tab) */
}`

    const visited = `a:visited {
    /* Стили будут применены ко всем посещённым ссылкам */
}`

    return (
        <Page>
            <Container>
                <h1>Псевдо-классы</h1>
                <div>
                    <h2>Вводная информация</h2>
                    <p>Псевдокласс в CSS — это ключевое слово, добавленное к селектору, которое определяет его особое состояние</p>
                </div>
                <div>
                    <h2>:hover</h2>
                    <p><Code>:hover</Code> применяется к элементу при наведении на него курсора мыши</p>
                    <Example>
                        <CodeExample>{hover}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>:active</h2>
                    <p><Code>:active</Code> применяется к элементу во время нажатия на него</p>
                    <Example>
                        <CodeExample>{active}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>:focus</h2>
                    <p><Code>:focus</Code> применяется к элементу, который находится в фокусе (например, при клике на текстовое поле)</p>
                    <Example>
                        <CodeExample>{focus}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>:visited</h2>
                    <p><Code>:visited</Code> применяется к посещенным ссылкам</p>
                    <Example>
                        <CodeExample>{visited}</CodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithAnimation;