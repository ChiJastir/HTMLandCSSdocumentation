import CodeExample from "../components/codeExample.tsx"
import {Container, Example, Code} from "../UI/components"
import Page from "../components/page";

const PageWithAnimation = () => {
    const before = `li::before {
    content: "$";
    /* Перед элементами списка будет выводиться знак доллара */
}`

    const after = `li::after {
    content: "&";
    /* После элементов списка будет выводиться знак амперсанда */
}`

    const placeholder = `input[type=text]::placeholder {
    /* Стили будут применены к placeholder всех <input> c type="text" */
}`

    return (
        <Page>
            <Container>
                <h1><span>Псевдо-элементы</span></h1>
                <div>
                    <h2>Вводная информация</h2>
                    <p>Псевдоэлемент в CSS — это ключевое слово, добавляемое к селектору, которое позволяет стилизовать определённую часть выбранного элемента</p>
                </div>
                <div>
                    <h2>::before</h2>
                    <p><Code>::before</Code> добавляет контент перед содержимым выбранного элемента. Работает совместно со свойством content</p>
                    <Example>
                        <CodeExample>{before}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>::after</h2>
                    <p><Code>::after</Code> добавляет контент после содержимого выбранного элемента. Работает совместно со свойством content</p>
                    <Example>
                        <CodeExample>{after}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>::placeholder</h2>
                    <p><Code>::placeholder</Code> применяется к плейсхолдеру внутри текстового поля или текстового поля с маской</p>
                    <Example>
                        <CodeExample>{placeholder}</CodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithAnimation;