import classes from './pageWithAnimation.module.css'
import Navigation from "../../components/navigation/navigation.jsx";
import Container from "../../UI/container.tsx";
import CodeExample, {languages} from "../../UI/codeExample.tsx"
import Code from "../../UI/code.tsx";

const PageWithAnimation = () => {
    const textExample = 'Hello world'

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
        <div className={'page'}>
            <Navigation/>
            <Container>
                <h1>Анимация</h1>
                <div className="item">
                    <h2>Transition</h2>
                    <p><Code>transition</Code> позволяет добавить плавное изменение CSS-свойства. Указывается небходимое свойство (можно указать <Code>all</Code>), а также время в миллисекундах или секундах. Можно указать задержку перед началом анимации и кривую анимации</p>
                    <div className={'example'}>
                        <CodeExample language={languages.css}>{transition}</CodeExample>
                        <p className={classes.transition}>{textExample}</p>
                    </div>
                </div>
                <div className="item">
                    <h2>@keyframes и animation</h2>
                    <p><Code>@keyframes</Code> позволяет нам создать анимацию с помощью ключивых кадров и дать ей название. Ключивые кадры задаются процентами от анимации. С помощью <Code>animation</Code> мы применяем созданную анимацию и указываем дополнительные параметры, такие как время, задержка, кривая анимации, повторяемость и др</p>
                    <div className={'example'}>
                        <CodeExample>{keyframesAndAnimation}</CodeExample>
                        <div className={classes.keyframesBox}>
                            <div className={classes.keyframes}></div>
                        </div>
                    </div>
                    <p>Для интереса, примерно так реализован градиент:</p>
                    <div className={'example'}>
                        <CodeExample>{gradient}</CodeExample>
                        <div className={classes.gradient}/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageWithAnimation;