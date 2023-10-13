import React, {useState} from 'react';
import CodeExample, {languages} from "../components/codeExample";
import {Container, Code, Example} from "../UI/components";
import img from '../assets/react.svg'
import styled from "styled-components";
import Elem from '../components/boxElem'
import Page from "../components/page";

const PageWithOther = () => {
    const [zValue, setZValue] = useState(1)
    const [opacityValue, setOpacityValue] = useState(1)
    const [isVisible, setIsVisible] = useState(true)

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

    const cursor = `.pointer{
    cursor: pointer;
}

.grad{
    cursor: grad;
}`

    const visibility = `div{
    height: 100px;
    background-color: #646cff;
    cursor: pointer;
    ${isVisible ? 'visibility: visible;' : 'visibility: hidden;'}
}`

    const listStyle = `ul{
    list-style: url("images/logo.svg");
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
                            <Elem width={'calc(100% / 3)'} height={'100px'}>1</Elem>
                            <Elem width={'calc(100% / 3)'} height={'150px'}>2</Elem>
                            <Elem width={'calc(100% / 3)'} height={'75px'}>3</Elem>
                        </AlignItemsExample>
                    </Example>
                </div>
                <div>
                    <h2>cursor</h2>
                    <p><Code>cursor</Code> обозначает тип указателя мыши при наведении</p>
                    <Example>
                        <CodeExample>{cursor}</CodeExample>
                        <CursorBox>
                            <CursorElem>.pointer</CursorElem>
                            <CursorElem>.grab</CursorElem>
                        </CursorBox>
                    </Example>
                </div>
                <div>
                    <h2>visibility</h2>
                    <p><Code>visibility: hidden</Code> скрывает элемент на странице, но место занимаемое им остаётся занятым. Возможно анимировать</p>
                    <Example>
                        <CodeExample>{visibility}</CodeExample>
                        <Visibility $visible={isVisible}/>
                        <button onClick={() => setIsVisible(!isVisible)}>Скрыть/показать</button>
                    </Example>
                </div>
                <div>
                    <h2>list-style</h2>
                    <p><Code>list-style</Code> настраивает стиль указатилей списка. Можно выбрать из множества существующих, а можно указать самому</p>
                    <Example>
                        <CodeExample>{listStyle}</CodeExample>
                        <ListStyle img={img}>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ListStyle>
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
  background-color: ${props => props.theme.colors.secondary};`

const ZIndexElem2 = styled(ZIndexElem)`
  left: 50px;
  top: 50px;
  background-color: ${props => props.theme.colors.primary}`

const Buttons = styled.div`
  display: flex;
  button{
    margin: 10px;
  }`

const BoxShadow = styled.div`
  background-color: ${props => props.theme.colors.primary};
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
    background-color: ${props => props.theme.colors.secondary}; 
    opacity: ${props => props.opacity};
  }`

const AlignItemsExample = styled.div`
  border: ${props => props.theme.colors.primary} 1px solid; 
  padding: 5px; 
  display: flex; 
  align-items: center`

const CursorBox = styled.div`
  display: flex;`

const CursorElem = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  &+&{
    background-color: ${props => props.theme.colors.primary};
    cursor: grab;
  }`

interface VisibilityProps {
    $visible?: boolean,
}

const Visibility = styled.div<VisibilityProps>`
  height: 100px;
  background-color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
  cursor: pointer;
  ${props => !props.$visible && 'visibility: hidden'}`

const ListStyle = styled.ul<{img: string}>`
  list-style: url("${props => props.img}");`

export default PageWithOther;