import {useState} from 'react';
import classes from './pageWithPosition.module.css'
import Navigation from "../../components/navigation/navigation.jsx";
import Container from "../../UI/container.jsx";
import CodeExample from "../../UI/codeExample.jsx";
import Code from "../../UI/code.jsx";

const PageWithPosition = () => {
    const [absolute, setAbsolute] = useState(false)
    const [relative, setRelative] = useState(false)
    const [fixed, setFixed] = useState(false)

    const absoluteStyle = `div{
    position: ${absolute ? 'absolute' : 'static'};
    top: 5px;
    left: 5px;
}`

    const relativeStyle = `div{
    position: ${relative ? 'relative' : 'static'};
    top: 5px;
    left: 5px;
}`
    const fixedStyle = `div{
    position: ${fixed ? 'fixed' : 'static'};
    top: 5px;
    left: 5px;
}`
    return (
        <div className={'page'}>
            <Navigation/>
            <Container>
                <h1>Position</h1>
                <div className="item">
                    <h2>position</h2>
                    <p><Code>position</Code> устанавливает способ позиционирования элемента относительно окна браузера или других объектов на веб-странице. Значение по умолчанию <Code>static</Code>. Самые распространённые значения <Code>absolute</Code>, <Code>relative</Code> и <Code>fixed</Code>. Все они открывают новые свойства <Code>left</Code>, <Code>top</Code>, <Code>right</Code> и <Code>bottom</Code>. Это своего рода отступы с определённой стороны. От значения <Code>position</Code> зависит относительно чего будут отступы. </p>
                </div>
                <div className="item">
                    <h2>position: absolute</h2>
                    <p><Code>absolute</Code> - отступы относительно начала координат на странице (левого верхнего угла), но если поместить такой элемент внутрь элемента <Code>relative</Code>, то позиционирование будет происходить относительно родительского элемента. Помимо этого элемент с <Code>position: absolute</Code> становится бестелесным и неосязаемым.</p>
                    <div className="example">
                        <CodeExample>{absoluteStyle}</CodeExample>
                        <p style={{position: absolute ? 'absolute' : 'static'}} className={classes.position}>{absolute ? 'absolute' : 'static'}</p>
                        <button onClick={() => setAbsolute(!absolute)}>absolute/static</button>
                    </div>
                </div>
                <div className="item">
                    <h2>position: relative</h2>
                    <p><Code>relative</Code> - отступы относительно самого себя. Бестелесным элемент не становится, но его тело не перемещается</p>
                    <div className="example">
                        <CodeExample>{relativeStyle}</CodeExample>
                        <p style={{position: relative ? 'relative' : 'static'}} className={classes.position}>{relative ? 'relative' : 'static'}</p>
                        <button onClick={() => setRelative(!relative)}>relative/static</button>
                    </div>
                </div>
                <div className="item">
                    <h2>position: fixed</h2>
                    <p><Code>fixed</Code> - похож на <Code>absolute</Code>, но привязывается к определённому положению на экране</p>
                    <div className="example">
                        <CodeExample>{fixedStyle}</CodeExample>
                        <p style={{position: fixed ? 'fixed' : 'static'}} className={classes.position}>{fixed ? 'fixed' : 'static'}</p>
                        <button onClick={() => setFixed(!fixed)}>fixed/static</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageWithPosition;