import {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Gradient} from "../UI/gradient";
import {motion} from "framer-motion";
import settings from '../assets/settings.svg'
import ModalWindow from "../UI/modalWindow";
import Settings from "./settings";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {onCSS, onHTML} from "../features/technologySlice";

type NavigationProps = {
    swipe: boolean;
    setSwipe: (swipe: boolean) => void;
}

const NavigationCSS = ({swipe, setSwipe}: NavigationProps) => {
    const [visible, setVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const isMenuPin = useAppSelector((store) => store.pinMenuSlice.isMenuPin)
    const dispatch = useAppDispatch()

    const { t } = useTranslation()

    useEffect(() => {
        setVisible(swipe)
    }, [swipe])

    useEffect(() => {
        setSwipe(visible)
    }, [visible])

    return (
        <div>
            <ModalWindow isVisible={modalVisible} setIsVisible={setModalVisible}>
                <Settings/>
            </ModalWindow>
            <Content
                $isVisible={visible}
                $isMenuPin={isMenuPin}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                <Placeholder>
                    <Nav>
                        <NavigationHead>
                            <h3>{t("htmlNav")}</h3>
                            <motion.img
                                whileHover={{ scale: 1.2, rotate: 90 }}
                                whileTap={{
                                    scale: 0.8,
                                    rotate: -90,
                                }}
                                src={settings}
                                alt="settings"
                                onTap={() => {setModalVisible(true); setVisible(false)}}
                            />
                        </NavigationHead>
                        <ul>
                            <li><Link to={'/'}>{t("selectorsT")}</Link></li>
                            <li><Link to={'/measurement'}>{t("measurementUnitsT")}</Link></li>
                            <li><Link to={'/pseudoClasses'}>{t("pseudoClassesT")}</Link></li>
                            <li><Link to={'/pseudoElements'}>{t("pseudoElementsT")}</Link></li>
                            <li><Link to={'/math'}>{t("mathematicsT")}</Link></li>
                            <li><Link to={'/size'}>{t("sizesT")}</Link></li>
                            <li><Link to={'/text'}>{t("textT")}</Link></li>
                            <li><Link to={'/colorAndBackground'}>{t("colorAndBackgroundT")}</Link></li>
                            <li>
                                <Link to={'/displayFlex'}>Display</Link>
                                <ul>
                                    <li><Link to={'/displayFlex'}>Flex</Link></li>
                                    <li><Link to={'/displayGrid'}>Grid</Link></li>
                                    <li><Link to={'/displayOther'}>None, block</Link></li>
                                </ul>
                            </li>
                            <li><Link to={'/position'}>Position</Link></li>
                            <li><Link to={'/transform'}>Transform</Link></li>
                            <li><Link to={'/animation'}>{t("AnimationT")}</Link></li>
                            <li><Link to={'/frames'}>{t("framesT")}</Link></li>
                            <li><Link to={'/indents'}>{t("indentsT")}</Link></li>
                            <li><Link to={'/other'}>{t("otherT")}</Link></li>
                        </ul>
                    </Nav>
                    <TechnologySwapBtn onClick={() => dispatch(onCSS())}>CSS</TechnologySwapBtn>
                </Placeholder>
                {/*<Ver>v1.92</Ver>*/}
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

const TechnologySwapBtn = styled.button`
  width: 100%`

const NavigationHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    width: 30px;
    height: 30px;
    cursor: pointer;
    filter: brightness(0) ${props => props.theme.type !== 'light' && 'invert(1)'};
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

// const Ver = styled.p`
//   position: absolute;
//   bottom: 15px;
//   left: 15px;
//   margin: 0;
//   color: gray;`

const Nav = styled.nav`
  ul {
    padding-left: 20px;
    margin: 0;
  }`

const GradientLine = styled(Gradient)`
  position: absolute;
  right: 0;
  left: auto;`

export default NavigationCSS;