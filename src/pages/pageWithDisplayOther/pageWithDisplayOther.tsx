import {useState} from 'react';
import classes from './pageWithDisplayOther.module.css'
import Navigation from "../../components/navigation/navigation";
import Container from "../../UI/container";
import CodeExample from "../../UI/codeExample";
import Code from "../../UI/code";

const PageWithDisplayOther = () => {
    const [visible, setVisible] = useState(true)
    const [block, setBlock] = useState(true)

    const displayNone = `div{
    height: 100px;
    background-color: #646cff;
    ${visible ? '/* Нажатие кнопки добавляет и убирает display: none */' : 'display: none'}
}`

    const displayBlock = `div{
    display: ${block ? 'block' : 'flex'} /* Нажатие кнопки меняет значение на ${!block ? 'block' : 'flex'} */
}`
    return (
        <div className={'page'}>
            <Navigation/>
            <Container>
                <h1>None, block</h1>
                <div className="item">
                    <h2>display: none</h2>
                    <p><Code>display: none</Code> полностью уберает блок со страницы так, будто его и нет</p>
                    <div className="example">
                        <CodeExample>{displayNone}</CodeExample>
                        <div style={{display: visible ? 'block' : 'none', marginBottom: 10}} className={classes.displayNone}/>
                        <button onClick={() => setVisible(!visible)}>Скрыть/показать</button>
                    </div>
                </div>
                <div className="item">
                    <h2>display: block</h2>
                    <p><Code>display: block</Code> Значение <Code>display</Code> по умолчанию. Ничего интересного</p>
                    <div className="example">
                        <CodeExample>{displayBlock}</CodeExample>
                        <div style={{display: block ? 'block' : 'flex', marginBottom: 10}} className={classes.displayBlock}>
                            <div className={classes.elem}/>
                            <div className={classes.elem}/>
                        </div>
                        <button onClick={() => setBlock(!block)}>block/flex</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageWithDisplayOther;