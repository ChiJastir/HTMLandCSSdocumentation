import CodeExample from "../components/codeExample.tsx"
import {Container, Example, Code} from "../UI/components"
import Page from "../components/page";

const PageWithSelectors = () => {
    const tagSelectorExample = `p {
    /* Стили будут применены ко всем <p> на странице */
}`

    const classSelectorExample = `.title {
    /* Стили будут применены ко всем элементом с классом title на странице */
}`

    const idSelectorExample = `#button {
    /* Стили будут применены к одному элементу с идентификатором button */
}`

    const attrsSelectorExample = `input[type=radio] {
    /* Стили будут применены ко всем input на страдице для которых установлен атрибут type="radio" */
}`

    const allSelectorExample = `* {
    /* Стили будут применены ко всем элементам на страдице */
}`

    const neighboringRelatedCombinator = `li + li {
    /* Стили будут применены ко всем тэгам <li>, перед которыми есть другой тэг <li> */
}`

    const childCombinator = `.container > p {
    /* Стили будут применены ко всем тэгам <p>, которые являются детьми первого уровня элементов с классом container */
}`

    const commonRelatedCombinator = `.container ~ p {
    /* Стили будут применены ко всем тэгам <p> кроме первого, которые являются детьми первого уровня элементов с классом container */
}`

    const flowCombinator = `div p {
    /* Стили будут применены ко всем тэгам <p> внутри тэгов <div> */
}`

    return (
        <Page>
            <Container>
                <h1>Селекторы</h1>
                <div>
                    <h2>Вводная информация</h2>
                    <p>Селекторы - это шаблоны, которые используются для привязки стилевых свойств к элементам в документе.</p>
                    <p>У всех селекторов есть свой вес. Чем больше вес, тем главнее селектор. Вес каждого селектора зубрить смысла нет. Просто задумайтесь у какого селектора меньше выборка. Чем меньше выборка - тем больше вес</p>
                </div>
                <div>
                    <h2>Селекторы типа</h2>
                    <p>Селекторы типа это самые простые селекторы из возможных. Выбирают все элементы на странице определённого тэга. Следовательно имеют очень маленький вес</p>
                    <Example>
                        <CodeExample>{tagSelectorExample}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>Селекторы класса</h2>
                    <p>Селекторы класса более продвинутые селекторы. Выбирают все элементы на странице определённого класса. Имеют средний вес</p>
                    <Example>
                        <CodeExample>{classSelectorExample}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>Селекторы идентификатора</h2>
                    <p>Селектор идентификатора выбирает один элемент на странице по уникальному id. Из-за такой маленькой выборки имеют огромный вес который очень сложно перебить. Использование селекторов идентификатора сегодня считается плохой практикой</p>
                    <Example>
                        <CodeExample>{idSelectorExample}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>Селекторы наличия и значения атрибута</h2>
                    <p>Селекторы наличия и значения атрибута выбирают все элементы по определённому атрибуту и его значению. Очень часто их можно встретить при стилизации input`ов</p>
                    <Example>
                        <CodeExample>{attrsSelectorExample}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>Универсальный селектор</h2>
                    <p>Универсальный селектор добавляет стили для всех элементов на странице</p>
                    <Example>
                        <CodeExample>{allSelectorExample}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>Соседний родственный комбинатор</h2>
                    <p>Вглядит как <Code>selector1 + selector2</Code>. Стили будут применены ко всем элементам, проходящих выборку selector2, перед которыми в DOM-дереве находится элемент, проходящих выборку selector1. Часто можно встретить при стилизации списков</p>
                    <Example>
                        <CodeExample>{neighboringRelatedCombinator}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>Дочерний комбинатор</h2>
                    <p>Вглядит как <Code>selector1 {'>'} selector2</Code>. Стили будут применены ко всем элементам, проходящих выборку selector2, являющихся прямыми потомками элементов, проходящих выборку selector1. Встречается нечасто</p>
                    <Example>
                        <CodeExample>{childCombinator}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>Общий родственный комбинатор</h2>
                    <p>Вглядит как <Code>selector1 ~ selector2</Code>. Стили будут применены ко всем элементам, проходящих выборку selector2, перед которыми в DOM-дереве находится элемент, проходящих выборку selector1. Оба элемента должны принадлежать одному родителю. Этот селектор отличается от соседнего селектора тем, что между элементами selector1  и selector2 могут находиться другие элементы. Встречается нечасто</p>
                    <Example>
                        <CodeExample>{commonRelatedCombinator}</CodeExample>
                    </Example>
                </div>
                <div>
                    <h2>Комбинатор потомка</h2>
                    <p>Вглядит как <Code>selector1 selector2</Code>. Находит все соответствующие selector2 потомки элемента, который подходит под selector1, и применяет к ним стили. Используется повсеместно</p>
                    <Example>
                        <CodeExample>{flowCombinator}</CodeExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

export default PageWithSelectors;