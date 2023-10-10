import React, {useState} from 'react';
import CodeExample, {languages} from "../components/codeExample";
import {Container, Code, Example} from "../UI/components";
import img from '../assets/react.svg'
import styled from "styled-components";
import {baseTheme} from "../styles/theme";
import Elem from '../components/boxElem'
import Page from "../components/page";

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
        <Page>
            <Container>
                <h1>Прочее</h1>
                <div>
                    <h2>z-index</h2>
                    <p><Code>z-index</Code> это аналог слоёв в фотошопе. Чем больше значение, тем выше слой.</p>
                    <Example>
                        <CodeExample language={languages.html}>{zIndexHTML}</CodeExample>
                        <CodeExample>{zIndexCSS}</CodeExample>
                        <ZIndexContainer>
                            <ZIndexElem1 $ZIndex={zValue}/>
                            <ZIndexElem2/>
                        </ZIndexContainer>
                        <Buttons>
                            <button onClick={() => setZValue(zValue+1)}>z-index++</button>
                            <button onClick={() => setZValue(zValue-1)}>z-index--</button>
                        </Buttons>
                    </Example>
                </div>
                <div>
                    <h2>box-shadow</h2>
                    <p><Code>box-shadow</Code> это копия <Code>text-shadow</Code>, но для блочных элементов</p>
                    <Example>
                        <CodeExample>{boxShadowWhite}</CodeExample>
                        <BoxShadowWhite/>
                    </Example>
                    <Example>
                        <CodeExample>{boxShadowRed}</CodeExample>
                        <BoxShadowRed/>
                    </Example>
                </div>
                <div>
                    <h2>opacity</h2>
                    <p><Code>opacity</Code> - прозрачность</p>
                    <Example>
                        <CodeExample>{opacity}</CodeExample>
                        <OpacityExample opacity={opacityValue}>
                            <img src={img} width='100px' height='100px'/>
                            <div/>
                        </OpacityExample>
                        <div>
                            0
                            <input type="range" min="0" max="100" value={opacityValue*100} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setOpacityValue(parseFloat(event.target.value) / 100)}/>
                            1
                        </div>
                    </Example>
                </div>
                <div>
                    <h2>align-items</h2>
                    <p><Code>align-items</Code> выравнивает элементы в блоке. Обычно используется только <Code>center</Code></p>
                    <Example>
                        <CodeExample language={languages.html}>{alignItemsHTML}</CodeExample>
                        <CodeExample>{alignItemsCSS}</CodeExample>
                        <AlignItemsExample>
                            <Elem width={'calc(100% / 3)'} height={'100px'}/>
                            <Elem width={'calc(100% / 3)'} height={'150px'}/>
                            <Elem width={'calc(100% / 3)'} height={'75px'}/>
                            {/*<AlignElem style={{height: 150}}/>*/}
                            {/*<AlignElem style={{height: 75}}/>*/}
                        </AlignItemsExample>
                    </Example>
                </div>
            </Container>
        </Page>
    );
};

const ZIndexContainer = styled.div`
  position: relative;
  height: 150px;`

const ZIndexElem = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;`

const ZIndexElem1 = styled(ZIndexElem)<{$ZIndex?: number}>`
  z-index: ${props => props.$ZIndex};
  background-color: ${baseTheme.colors.secondary};`

const ZIndexElem2 = styled(ZIndexElem)`
  left: 50px;
  top: 50px;
  background-color: ${baseTheme.colors.primary}`

const Buttons = styled.div`
  display: flex;
  button{
    margin: 10px;
  }`

const BoxShadow = styled.div`
  background-color: ${baseTheme.colors.primary};
  width: 100px;
  height: 100px;`

const BoxShadowWhite = styled(BoxShadow)`
  box-shadow: white 0 0 5px`

const BoxShadowRed = styled(BoxShadow)`
  box-shadow: red 5px 10px`

const OpacityExample = styled.div<{opacity: number}>`
  position: relative;
  div{
    width: 100px;
    height: 100px; 
    position: absolute; 
    top: 0; 
    background-color: ${baseTheme.colors.secondary}; 
    opacity: ${props => props.opacity};
  }`

const AlignItemsExample = styled.div`
  border: ${baseTheme.colors.primary} 1px solid; 
  padding: 5px; 
  display: flex; 
  align-items: center`

// const AlignElem = styled.div`
//   border: 1px #e50000 solid;
//   width: calc(100% / 3);`

export default PageWithOther;