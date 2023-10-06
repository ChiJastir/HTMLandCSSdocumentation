import React, {useState} from 'react';
import classes from './pageWithOther.module.css'
import Navigation from "../../components/navigation/navigation.jsx";
import Container from "../../UI/container.jsx";
import CodeExample, {languages} from "../../UI/codeExample.jsx";
import Code from "../../UI/code.jsx";
import img from '../../assets/react.svg'

const PageWithOther = () => {
    const [zValue, setZValue] = useState(1)
    const [opacityValue, setOpacityValue] = useState(1)

    const zIndexHTML = `<div class="container">
    <div class="elem1"/>
    <div class="elem2"/>
</div>`
    const zIndexCSS = `.container{
    position: relative;
}

.elem1{
    position: absolute;
    
    z-index: ${zValue}; /*Кнопки меняют значение*/
}

.elem2{
    position: absolute;
    left: 50px;
    top: 50px
}`

    const boxShadowWhite = `div{
    box-shadow: white 0 0 5px;
}`
    const boxShadowRed = `div{
    box-shadow: red 5px 10px;
}`

    const opacity = `div{
    background-color: #e50000
    opacity: ${opacityValue};
}`

    const alignItemsHTML = `<div class="container">
    <div style="height: 100px" class="elem"/>
    <div style="height: 150px" class="elem"/>
    <div style="height: 75px" class="elem"/>
</div>`
    const alignItemsCSS = `.container{
    border: #646cff 1px solid;
    padding: 5px;
    display: flex;
    align-items: center;
}

.elem{
    border: 1px #e50000 solid;
    width: calc(100% / 3);
}`
    return (
        <div className={'page'}>
            <Navigation/>
            <Container>
                <h1>Прочее</h1>
                <div className="item">
                    <h2>z-index</h2>
                    <p><Code>z-index</Code> это аналог слоёв в фотошопе. Чем больше значение, тем выше слой.</p>
                    <div className={'example'}>
                        <CodeExample language={languages.html}>{zIndexHTML}</CodeExample>
                        <CodeExample>{zIndexCSS}</CodeExample>
                        <div className={classes.container}>
                            <div style={{backgroundColor: '#e50000', zIndex: zValue}} className={classes.elem}></div>
                            <div style={{backgroundColor: '#646cff'}} className={classes.elem}></div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <button style={{margin: 10}} onClick={() => setZValue(zValue+1)}>z-index++</button>
                            <button style={{margin: 10}} onClick={() => setZValue(zValue-1)}>z-index--</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <h2>box-shadow</h2>
                    <p><Code>box-shadow</Code> это копия <Code>text-shadow</Code>, но для блочных элементов</p>
                    <div className={'example'}>
                        <CodeExample>{boxShadowWhite}</CodeExample>
                        <div style={{boxShadow: 'white 0 0 5px'}} className={classes.box}/>
                    </div>
                    <div className={'example'}>
                        <CodeExample>{boxShadowRed}</CodeExample>
                        <div style={{boxShadow: 'red 5px 10px'}} className={classes.box}/>
                    </div>
                </div>
                <div className="item">
                    <h2>opacity</h2>
                    <p><Code>opacity</Code> - прозрачность</p>
                    <div className={'example'}>
                        <CodeExample>{opacity}</CodeExample>
                        <div style={{position: 'relative'}}>
                            <img src={img} width='100px' height='100px'/>
                            <div style={{width: 100, height: 100, position: "absolute", top: 0, backgroundColor: '#e50000', opacity: opacityValue}}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            0
                            <input type="range" min="0" max="100" value={opacityValue*100} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setOpacityValue(parseFloat(event.target.value) / 100)}/>
                            1
                        </div>
                    </div>
                </div>
                <div className="item">
                    <h2>align-items</h2>
                    <p><Code>align-items</Code> выравнивает элементы в блоке. Обычно используется только <Code>center</Code></p>
                    <div className={'example'}>
                        <CodeExample language={languages.html}>{alignItemsHTML}</CodeExample>
                        <CodeExample>{alignItemsCSS}</CodeExample>
                        <div style={{border: '#646cff 1px solid', padding: 5, display: 'flex', alignItems: 'center'}}>
                            <div style={{height: 100}} className={classes.alignElem}/>
                            <div style={{height: 150}} className={classes.alignElem}/>
                            <div style={{height: 75}} className={classes.alignElem}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PageWithOther;