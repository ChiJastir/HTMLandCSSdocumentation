import {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Gradient} from "../UI/gradient";
import {motion} from "framer-motion";
import settings from '../assets/settings.svg'
import ModalWindow from "../UI/modalWindow";
import Switch from "../UI/switch";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {onDark, onLight} from "../features/themeSlice";

type NavigationProps = {
    swipe: boolean;
    setSwipe: (swipe: boolean) => void;
}

const Navigation = ({swipe, setSwipe}: NavigationProps) => {
    const themeValue = useAppSelector((store) => store.themeSlice.themeValue)

    const [visible, setVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [themeType, setThemeType] = useState(themeValue.type === 'light');

    const dispatch = useAppDispatch()

    useEffect(() => {
        setVisible(swipe)
    }, [swipe])

    useEffect(() => {
        setSwipe(visible)
    }, [visible])

    useEffect(() => {
        if (themeType){
            dispatch(onLight())
        } else {
            dispatch(onDark())
        }
    }, [themeType])

    return (
        <div>
            <ModalWindow isVisible={modalVisible} setIsVisible={setModalVisible}>
                <Settings>
                    <h3>Настройки</h3>
                    <div>
                        <p>Тема:</p>
                        <Switch checked={themeType} setChecked={setThemeType}/>
                    </div>
                </Settings>
            </ModalWindow>
            <Content
                $isVisible={visible}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                <Nav>
                    <NavigationHead>
                        <h3>Навигация по CSS</h3>
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
                        <li><Link to={'/'}>Селекторы</Link></li>
                        <li><Link to={'/measurement'}>Единицы измерения</Link></li>
                        <li><Link to={'/pseudoClasses'}>Псевдоклассы</Link></li>
                        <li><Link to={'/pseudoElements'}>Псевдоэлементы</Link></li>
                        <li><Link to={'/math'}>Математика</Link></li>
                        <li><Link to={'/size'}>Размеры</Link></li>
                        <li><Link to={'/text'}>Текст</Link></li>
                        <li><Link to={'/colorAndBackground'}>Цвет и фон</Link></li>
                        <li>
                            <Link to={'/displayFlex'}>Display</Link>
                            <ul>
                                <li><Link to={'/displayFlex'}>Flex</Link></li>
                                <li><Link to={'/displayGrid'}>Grid</Link></li>
                                <li><Link to={'/displayOther'}>Другие</Link></li>
                            </ul>
                        </li>
                        <li><Link to={'/position'}>Position</Link></li>
                        <li><Link to={'/transform'}>Transform</Link></li>
                        <li><Link to={'/animation'}>Анимация</Link></li>
                        <li><Link to={'/frames'}>Рамки</Link></li>
                        <li><Link to={'/indents'}>Отступы</Link></li>
                        <li><Link to={'/other'}>Прочее</Link></li>
                    </ul>
                </Nav>
                <Ver>v1.8</Ver>
                <GradientLine $vertical width={'5px'}/>
            </Content>
            <Background $isVisible={visible} onClick={() => setVisible(false)}/>
        </div>
    );
};

// CSS

const Content = styled.aside<{$isVisible: boolean}>`
  background-color: ${props => props.theme.colors.bg};
  height: 100vh;
  display: flex;
  position: fixed;
  // left: ${props => props.$isVisible ? 0 : `clamp(min(-1 * (280px - 5px), -1 *(20vw - 5px)), props.swipe px, 0px)`};
  left: ${props => props.$isVisible ? 0 : 'calc(-1 * (280px - 5px))'};
  //left: ${true ? 0 : '280px'};
  width: 280px;
  z-index: 3;
  transition: left 250ms ease-in-out;`

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

const Ver = styled.p`
  position: absolute;
  bottom: 15px;
  left: 15px;
  margin: 0;
  color: gray;`


const Nav = styled.nav`
  padding: 15px;
  width: calc(100% - (15px * 2) - 5px);
  ul {
    padding-left: 20px;
    margin: 0;
  }`

const GradientLine = styled(Gradient)`
  position: absolute;
  right: 0;
  left: auto;`

const Settings = styled.div`
  h3{
    margin: 0 0 10px 0; 
    text-align: center;
  }
  & > div{
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  }`

export default Navigation;