import styled from "styled-components";
import CodeExample from "../components/codeExample.tsx"
import {Container, Code, Example} from "../UI/components";
import Page from "../components/page";
import img from '../assets/react.svg'

const PageWithColorAndBackground = () => {
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
                <h1>Цвет и фон</h1>
                <div>
                    <h2>Форматы указания цвета</h2>
                    <ol style={{paddingLeft: '16px'}}>
                        <li>Именованные цвета - предопределенные названия цветов, такие как "red", "blue", "green" и т. д.</li>
                        <li>HEX-коды - шестнадцатеричное представление цвета, состоящее из символов 0-9 и A-F. Например, "#FF0000" представляет красный цвет</li>
                        <li>RGB - представление цвета в виде комбинации значений красного (R), зеленого (G) и синего (B) компонентов. Например, "rgb(255, 0, 0)" представляет красный цвет.</li>
                        <li>RGBA - аналогично RGB, но с добавлением альфа-канала, который определяет прозрачность цвета. Например, "rgba(255, 0, 0, 0.5)" представляет полупрозрачный красный цвет.</li>
                        <li>CSS3 цветовые функции - CSS3 предоставляет функции для создания цветов, такие как linear-gradient() и radial-gradient(). Эти функции позволяют создавать градиенты и другие сложные эффекты цвета.</li>
                    </ol>
                </div>
                <div>
                    <h2>Color</h2>
                    <p><Code>color</Code> задаёт цвет для текста</p>
                    <Example>
                        <CodeExample>{color}</CodeExample>
                        <Color>Hello world</Color>
                    </Example>
                </div>
                <div>
                    <h2>Background-color</h2>
                    <p><Code>background-color</Code> задаёт цвет для фона элемента</p>
                    <Example>
                        <CodeExample>{backgroundColor}</CodeExample>
                        <BackgroundColor>Hello world</BackgroundColor>
                    </Example>
                </div>
                <div>
                    <h2>Background-image</h2>
                    <p><Code>background-image</Code> задаёт элементу фоновое изображение через <Code>url("URL")</Code></p>
                    <Example>
                        <CodeExample>{backgroundImage}</CodeExample>
                        <BackgroundImage img={img}>Hello world</BackgroundImage>
                    </Example>
                </div>
                <div>
                    <h2>Background-attachment</h2>
                    <p><Code>background-attachment</Code> устанавливает, будет ли прокручиваться фоновое изображение вместе с содержимым элемента</p>
                    <Example>
                        <CodeExample>{backgroundAttachment}</CodeExample>
                        <BackgroundAttachment img={img}>Hello world</BackgroundAttachment>
                    </Example>
                </div>
                <div>
                    <h2>Background-repeat</h2>
                    <p><Code>background-repeat</Code> устанавливает способ повторения заднего фона. Основные значения: <Code>repeat</Code>, <Code>round</Code> и <Code>no-repeat</Code></p>
                    <Example>
                        <CodeExample>{backgroundRepeat}</CodeExample>
                        <BackgroundRepeat img={img}>Hello world</BackgroundRepeat>
                    </Example>
                </div>
                <div>
                    <h2>Background-size</h2>
                    <p><Code>background-size</Code> устанавливает размер заднего фона. Основные значения: <Code>contain</Code>, <Code>cover</Code> и произвольное значение</p>
                    <Example>
                        <CodeExample>{backgroundSize}</CodeExample>
                        <BackgroundSize img={img}>Hello world</BackgroundSize>
                    </Example>
                </div>
                <div>
                    <h2>Background-position</h2>
                    <p><Code>background-position</Code> устанавливает позицию заднего фона. Значения можно указывать словами, а можно произвольно</p>
                    <Example>
                        <CodeExample>{backgroundPosition}</CodeExample>
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