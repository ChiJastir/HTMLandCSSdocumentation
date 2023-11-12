import {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Gradient} from "@UI/gradient";
import {useAppDispatch, useAppSelector} from "@/shared";
import SettingsMenu from "../settings/settingsMenu";
import {onCSS, onHTML} from "@/shared";
import NavigationCSS from "./navigationCSS";
import NavigationHTML from "./navigationHTML";

type NavigationProps = {
    swipe: boolean;
    setSwipe: (swipe: boolean) => void;
}

const Navigation = ({swipe, setSwipe}: NavigationProps) => {
    const [visible, setVisible] = useState(false)

    const firstBtn = useRef<null | HTMLButtonElement>(null)
    const secondBtn = useRef<null | HTMLButtonElement>(null)

    const isMenuPin = useAppSelector((store) => store.pinMenuSlice.isMenuPin)
    const technology = useAppSelector((store) => store.technologySlice.technology)
    const dispatch = useAppDispatch()

    useEffect(() => {
        setVisible(swipe)
    }, [swipe])

    useEffect(() => {
        setSwipe(visible)
    }, [visible])

    useEffect(() => {
        const htmlReg = /html/
        if (htmlReg.test(window.location.pathname)){
            dispatch(onHTML())
        } else {
            dispatch(onCSS())
        }
    }, [])

    return (
        <div>
            <Content
                $isVisible={visible}
                $isMenuPin={isMenuPin}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                <Placeholder>
                    <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%'}}>
                        <Nav>
                            <NavigationHead>
                                <svg style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}>
                                    {technology === 'html'
                                        ? <path d={
                                            `M ${(firstBtn.current?.offsetLeft ?? 0) + (firstBtn.current?.offsetWidth ?? 0) -1} 
                                            ${(firstBtn.current?.offsetTop ?? 0) + 1} 
                                            
                                            C ${((secondBtn.current?.offsetLeft ?? 0) - ((firstBtn.current?.offsetLeft ?? 0) + (firstBtn.current?.offsetWidth ?? 0))) * 0.6 + ((firstBtn.current?.offsetLeft ?? 0) + (firstBtn.current?.offsetWidth ?? 0))} 
                                            ${(firstBtn.current?.offsetTop ?? 0)} 
                                            
                                            ${((secondBtn.current?.offsetLeft ?? 0) - ((firstBtn.current?.offsetLeft ?? 0) + (firstBtn.current?.offsetWidth ?? 0))) * 0.4 + ((firstBtn.current?.offsetLeft ?? 0) + (firstBtn.current?.offsetWidth ?? 0))} 
                                            ${(secondBtn.current?.offsetTop ?? 0) + (secondBtn.current?.offsetHeight ?? 0)} 
                                            
                                            ${(secondBtn.current?.offsetLeft ?? 0) + 1} 
                                            ${(secondBtn.current?.offsetTop ?? 0) + (secondBtn.current?.offsetHeight ?? 0) - 1}`
                                        }/>
                                        : <path d={
                                            `M ${(firstBtn.current?.offsetLeft ?? 0) + (firstBtn.current?.offsetWidth ?? 0) - 1} 
                                            ${(firstBtn.current?.offsetTop ?? 0) + (firstBtn.current?.offsetHeight ?? 0) - 1}
                                            
                                            C ${((secondBtn.current?.offsetLeft ?? 0) - ((firstBtn.current?.offsetLeft ?? 0) + (firstBtn.current?.offsetWidth ?? 0))) * 0.6 + ((firstBtn.current?.offsetLeft ?? 0) + (firstBtn.current?.offsetWidth ?? 0))} 
                                            ${(firstBtn.current?.offsetTop ?? 0) + (firstBtn.current?.offsetHeight ?? 0)} 
                                            
                                            ${((secondBtn.current?.offsetLeft ?? 0) - ((firstBtn.current?.offsetLeft ?? 0) + (firstBtn.current?.offsetWidth ?? 0))) * 0.4 + ((firstBtn.current?.offsetLeft ?? 0) + (firstBtn.current?.offsetWidth ?? 0))} 
                                            ${(secondBtn.current?.offsetTop ?? 0)}
                                            
                                            ${(secondBtn.current?.offsetLeft ?? 0) + 1} 
                                            ${(secondBtn.current?.offsetTop ?? 0) + 1}`
                                        }/>
                                    }
                                </svg>
                                <TechnologyButton ref={firstBtn} $isActive={technology === 'html'} onClick={() => dispatch(onHTML())}>HTML</TechnologyButton>
                                <TechnologyButton ref={secondBtn} $isActive={technology === 'css'} onClick={() => dispatch(onCSS())}>CSS</TechnologyButton>
                            </NavigationHead>
                            {technology === 'html'
                                ? <NavigationHTML/>
                                : <NavigationCSS/>
                            }
                        </Nav>
                        <SettingsMenu menuVisible={setVisible}/>
                    </div>
                </Placeholder>
                <GradientLine $vertical width={'5px'}/>
            </Content>
            <Background $isVisible={visible && !isMenuPin} onClick={() => setVisible(false)}/>
        </div>
    );
};

// CSS
const Content = styled.aside<{$isVisible: boolean, $isMenuPin: boolean}>`
  background-color: ${props => props.theme.colors.bg};
  height: 100vh;
  display: flex;
  position: fixed;
  left: ${props => props.$isVisible ? 0 : 'calc(-1 * (280px - 5px))'};
  left: ${props => props.$isMenuPin && 0};
  width: 280px;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px;
  transition: left 250ms ease-in-out;`

const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: calc(100% - (15px * 2) - 5px);`

const NavigationHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  width: calc(100% + 15px * 2);
  transform: translateX(-15px);

  svg{
    path{
      stroke: ${props => props.theme.colors.primary};
      stroke-width: 2px;
      fill: rgba(0, 0, 0, 0);
    }
  }`

interface TechnologyButtonProps{
    $isActive: boolean,
}

const TechnologyButton = styled.button<TechnologyButtonProps>`
  all: unset;
  position: relative;
  cursor: pointer;
  background-color: rgb(0, 0, 0, 0);
  outline: none;
  border: none;
  border-radius: 0;
  font-size: 24px;
  font-weight: 600;
  padding: 10px 25px;
  color: ${props => props.$isActive ? props.theme.colors.contrast : 'gray'};
  ${props => props.$isActive ? 'border-top' : 'border-bottom'}: 2px ${props => props.theme.colors.primary} solid;
  
  &:active,
  &:focus{
    outline: inherit;
  }
  &:hover{
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.contrast};
  }`

const Background = styled.div<{$isVisible: boolean}>`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.$isVisible ? 'block' : 'none'};`

const Nav = styled.nav`
  ul {
    padding-left: 20px;
    margin: 0;
  }`

const GradientLine = styled(Gradient)`
  position: absolute;
  right: 0;
  left: auto;`

export default Navigation;