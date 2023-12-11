import React from 'react';
import { CssCodeExample } from "@/entities";
import { ButtonMonochrome, Container, Example} from "@/shared";
import img from '@/shared/assets/ui/react.svg'
import styled from "styled-components";
import { BoxElem } from '@/entities'
import { Page } from "@/shared";
import { useTranslation } from "react-i18next";
import { HtmlCodeExample } from "@/entities";
import { useCodeExamplesOther } from "../lib/codeExamplesOther";

export const PageWithOther = () => {
    const { t } = useTranslation()
    const {
        zValue,
        setZValue,
        setOpacityValue,
        opacity,
        opacityValue,
        cursor,
        alignItemsHTML,
        alignItemsCSS,
        zIndexCSS,
        zIndexHTML,
        setIsVisible,
        visibility,
        isVisible,
        boxShadowWhite,
        boxShadowRed,
        listStyle
    } = useCodeExamplesOther()

    return (
        <Page>
            <Container>
                <h1>{t("otherT")}</h1>
                <div>
                    <h2>z-index</h2>
                    <p>{t("zIndexP1")}</p>
                    <Example>
                        <HtmlCodeExample>{zIndexHTML}</HtmlCodeExample>
                        <CssCodeExample>{zIndexCSS}</CssCodeExample>
                        <ZIndexContainer>
                            <ZIndexElem1 $ZIndex={zValue}/>
                            <ZIndexElem2/>
                        </ZIndexContainer>
                        <Buttons>
                            <ButtonMonochrome onClick={() => setZValue(zValue+1)}>z-index++</ButtonMonochrome>
                            <ButtonMonochrome onClick={() => setZValue(zValue-1)}>z-index--</ButtonMonochrome>
                        </Buttons>
                    </Example>
                </div>
                <div>
                    <h2>box-shadow</h2>
                    <p>{t("boxShadowP1")}</p>
                    <Example>
                        <CssCodeExample>{boxShadowWhite}</CssCodeExample>
                        <BoxShadowWhite/>
                    </Example>
                    <Example>
                        <CssCodeExample>{boxShadowRed}</CssCodeExample>
                        <BoxShadowRed/>
                    </Example>
                </div>
                <div>
                    <h2>opacity</h2>
                    <p>{t("opacityP1")}</p>
                    <Example>
                        <CssCodeExample>{opacity}</CssCodeExample>
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
                    <p>{t("alignItemsP1")}</p>
                    <Example>
                        <HtmlCodeExample>{alignItemsHTML}</HtmlCodeExample>
                        <CssCodeExample>{alignItemsCSS}</CssCodeExample>
                        <AlignItemsExample>
                            <BoxElem width={'calc(100% / 3)'} height={'100px'}>1</BoxElem>
                            <BoxElem width={'calc(100% / 3)'} height={'150px'}>2</BoxElem>
                            <BoxElem width={'calc(100% / 3)'} height={'75px'}>3</BoxElem>
                        </AlignItemsExample>
                    </Example>
                </div>
                <div>
                    <h2>cursor</h2>
                    <p>{t("cursorP1")}</p>
                    <Example>
                        <CssCodeExample>{cursor}</CssCodeExample>
                        <CursorBox>
                            <CursorElem>.pointer</CursorElem>
                            <CursorElem>.grab</CursorElem>
                        </CursorBox>
                    </Example>
                </div>
                <div>
                    <h2>visibility</h2>
                    <p>{t("visibilityP1")}</p>
                    <Example>
                        <CssCodeExample>{visibility}</CssCodeExample>
                        <Visibility $visible={isVisible}/>
                        <ButtonMonochrome onClick={() => setIsVisible(!isVisible)}>Скрыть/показать</ButtonMonochrome>
                    </Example>
                </div>
                <div>
                    <h2>list-style</h2>
                    <p>{t("listStyle")}</p>
                    <Example>
                        <CssCodeExample>{listStyle}</CssCodeExample>
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
  height: 150px;
`

const ZIndexElem = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
`

const ZIndexElem1 = styled(ZIndexElem)<{$ZIndex?: number}>`
  z-index: ${props => props.$ZIndex};
  background-color: ${props => props.theme.colors.secondary};
`

const ZIndexElem2 = styled(ZIndexElem)`
  left: 50px;
  top: 50px;
  background-color: ${props => props.theme.colors.primary}
`

const Buttons = styled.div`
  display: flex;
  button{
    margin: 10px;
  }
`

const BoxShadow = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 100px;
  height: 100px;
`

const BoxShadowWhite = styled(BoxShadow)`
  box-shadow: white 0 0 5px
`

const BoxShadowRed = styled(BoxShadow)`
  box-shadow: ${props => props.theme.colors.secondary} 5px 10px
`

const OpacityExample = styled.div<{opacity: number}>`
  position: relative;
  div{
    width: 100px;
    height: 100px; 
    position: absolute; 
    top: 0; 
    background-color: ${props => props.theme.colors.secondary}; 
    opacity: ${props => props.opacity};
  }
`

const AlignItemsExample = styled.div`
  border: ${props => props.theme.colors.primary} 1px solid; 
  padding: 5px; 
  display: flex; 
  align-items: center
`

const CursorBox = styled.div`
  display: flex;
`

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
  }
`

interface VisibilityProps {
    $visible?: boolean,
}

const Visibility = styled.div<VisibilityProps>`
  height: 100px;
  background-color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
  cursor: pointer;
  ${props => !props.$visible && 'visibility: hidden'}
`

const ListStyle = styled.ul<{img: string}>`
  list-style: url("${props => props.img}");
`