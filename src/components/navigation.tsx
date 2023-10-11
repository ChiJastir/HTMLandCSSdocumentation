import {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Gradient} from "../UI/gradient";

type NavigationProps = {
    swipe: boolean;
    setSwipe: (swipe: boolean) => void;
}

const Navigation = ({swipe, setSwipe}: NavigationProps) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(swipe)
    }, [swipe])
    useEffect(() => {
        setSwipe(visible)
    }, [visible])

    return (
        <div>
            <Content
                $isVisible={visible}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                <Nav>
                    <h3>Навигация по CSS</h3>
                    <ul>
                        <li><Link to={'/'}>Селекторы</Link></li>
                        <li><Link to={'/measurement'}>Единицы измерения</Link></li>
                        <li><Link to={'/pseudoClasses'}>Псевдоклассы</Link></li>
                        <li><Link to={'/pseudoElements'}>Псевдоэлементы</Link></li>
                        <li><Link to={'/math'}>Математика</Link></li>
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
                <Ver>v1.6</Ver>
                <GradientLine $vertical width={'5px'}/>
            </Content>
            <Background $isVisible={visible} onClick={() => setVisible(false)}/>
        </div>
    );
};

// CSS

const Content = styled.aside<{$isVisible: boolean}>`
  background-color: #1f1f1f;
  height: 100vh;
  display: flex;
  position: fixed;
  // left: ${props => props.$isVisible ? 0 : `clamp(min(-1 * (280px - 5px), -1 *(20vw - 5px)), props.swipe px, 0px)`};
  left: ${props => props.$isVisible ? 0 : 'min(-1 * (280px - 5px), -1 *(20vw - 5px))'};
  width: max(280px, 20vw);
  z-index: 3;
  transition: left 250ms ease-in-out;`

const Background = styled.div<{$isVisible: boolean}>`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
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
  ul {
    padding-left: 20px;
  }`

const GradientLine = styled(Gradient)`
  position: absolute;
  right: 0;
  left: auto;`

export default Navigation;