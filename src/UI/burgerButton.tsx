import styled, {keyframes} from "styled-components";

interface Props{
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
}

const BurgerButton = ({isOpen, setIsOpen}: Props) => {
    return (
        <Svg $isOpen={isOpen} viewBox="0 0 60 40" onClick={() => setIsOpen(!isOpen)}>
            <g>
                <Line id="top-line" d="M10,10 L50,10 Z"></Line>
                <Line id="middle-line" d="M10,20 L50,20 Z"></Line>
                <Line id="bottom-line" d="M10,30 L50,30 Z"></Line>
            </g>
        </Svg>
    );
};

const upRotate = keyframes`
  0% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(0px);
  }
  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(-10px);
  }
  100% {
    transform-origin: center;
    transform: translateY(-10px) rotate(45deg) scale(0.9);
  }`

const unUpRotate = keyframes`
  0% {
    transform-origin: center;
    transform: translateY(-10px) rotate(45deg) scale(0.9);
  }
  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(-10px);
  }
  100% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(0px);
  }`

const downRotate = keyframes`
  0% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(0px);
  }
  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(10px);
  }
  100% {
    transform-origin: center;
    transform: translateY(10px) rotate(-45deg) scale(0.9);
  }`

const unDownRotate = keyframes`
  0% {
    transform-origin: center;
    transform: translateY(10px) rotate(-45deg) scale(0.9);
  }
  30% {
    transform-origin: center;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: translateY(10px);
  }
  100% {
    animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
    transform: translateY(0px);
  }`

const hide = keyframes`
  29% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }`

const unHide = keyframes`
  29% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`

const Svg = styled.svg<{$isOpen: boolean}>`
  width: 100%;
  border: ${props => props.theme.colors.secondary} 1px solid;
  border-radius: 5px;
  aspect-ratio: 1 / 1;
  
  g{
    stroke: ${props => props.theme.colors.contrast};
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  
  #top-line {
    animation: ${props => props.$isOpen ? unDownRotate : downRotate} 0.6s ease-out both;
  }
  
  #bottom-line {
    animation: ${props => props.$isOpen ? unUpRotate : upRotate} 0.6s ease-out both;
  }
  
  #middle-line {
    animation: ${props => props.$isOpen ? unHide : hide} 0.6s ease-out forwards;
  }`

const Line = styled.path`
  transform-box: fill-box;
  transform-origin: center;`

export default BurgerButton;