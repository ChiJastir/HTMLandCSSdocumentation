import styled, {keyframes} from "styled-components";
import CodeExample from "../components/codeExample.tsx"
import {Container, Code, Example} from "../UI/components";
import {Gradient} from "../UI/gradient";
import {baseTheme} from "../styles/theme";
import Page from "../components/page";

const PageWithAnimation = () => {
    const transition = `p{
    padding: 15px;
    background-color: #535bf2;

    transition: background-color 800ms;
}

p:hover{
    background-color: #e50035;
}`
    const keyframesAndAnimation = `div{
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #535bf2;

    animation: move 10s linear infinite;
}

@keyframes move {
    0% {
        left: 0;
        transform: translateX(0);
    }
    50% {
        left: 100%;
        transform: translateX(-100%);
    }
    100% {
        left: 0;
        transform: translateX(0);
    }
}`
    const gradient = `div{
    width: 100%;
    height: 50px;
    background: linear-gradient(90deg, #e50000, blue, #e50000);
    background-size: 300% 100%;
    animation: gradient 10s linear infinite;
}

@keyframes gradient {
    0% {
        background-position: 0 50%;
    }
    100% {
        background-position: 150% 50%;
    }
}`

    return (
        <Page>
            <Container>
                <h1>Анимация</h1>
                <div>
                    <h2>Transition</h2>
                    <p><Code>transition</Code> позволяет добавить плавное изменение CSS-свойства. Указывается небходимое свойство (можно указать <Code>all</Code>), а также время в миллисекундах или секундах. Можно указать задержку перед началом анимации и кривую анимации</p>
                    <Example>
                        <CodeExample>{transition}</CodeExample>
                        <TransitionExample>Hello world</TransitionExample>
                    </Example>
                </div>
                <div>
                    <h2>@keyframes и animation</h2>
                    <p><Code>@keyframes</Code> позволяет нам создать анимацию с помощью ключивых кадров и дать ей название. Ключивые кадры задаются процентами от анимации. С помощью <Code>animation</Code> мы применяем созданную анимацию и указываем дополнительные параметры, такие как время, задержка, кривая анимации, повторяемость и др</p>
                    <Example>
                        <CodeExample>{keyframesAndAnimation}</CodeExample>
                        <Keyframe><div/></Keyframe>
                    </Example>
                    <p>Для интереса, примерно так реализован градиент:</p>
                    <Example>
                        <CodeExample>{gradient}</CodeExample>
                        <Gradient $horizontal height={'50px'}/>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const TransitionExample = styled.p`
  padding: 15px;
  background-color: ${baseTheme.colors.primary};
  transition: background-color 800ms;
  &:hover{
    background-color: ${baseTheme.colors.secondary};
  }`

const move = keyframes`
  0% {
    left: 0;
    transform: translateX(0);
  }
  50% {
    left: 100%;
    transform: translateX(-100%);
  }
  100% {
    left: 0;
    transform: translateX(0);
  }`

const Keyframe = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  div{
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: ${baseTheme.colors.primary};

    animation: ${move} 10s linear infinite;
  }`

export default PageWithAnimation;