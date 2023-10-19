import styled, {keyframes} from "styled-components";
import React from "react";

export enum ButtonType {
    primary = 'primary',
    outlined = 'outlined',
}

interface GradientButtonProps{
    children?: React.ReactNode,
    $styleType?: ButtonType,
    onClick?: () => void,

}

const GradientButton = ({children, $styleType = ButtonType.outlined, onClick}: GradientButtonProps) => {
    return (
        <Stage>
            <Btn onClick={onClick} $styleType={$styleType}>{children}</Btn>
        </Stage>
    );
};



const move = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 200% 0;
  }
  100% {
    background-position: 0 0;
  }`

const Stage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.bg};`

const Btn = styled.button<{$styleType: ButtonType}>`
  padding: 20px 30px;
  font-size: 18px;
  border: none;
  outline: none;
  background: rgba(0, 0, 0, 0);
  color: white;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 1000px;
  &::before{
    position: absolute;
    content: "";
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    left: -1px;
    top: -1px;
    background: linear-gradient(
            90deg,
            ${props => props.theme.colors.secondary},
            ${props => props.theme.colors.primary},
            ${props => props.theme.colors.secondary},
            ${props => props.theme.colors.primary},
            ${props => props.theme.colors.secondary}
    );
    background-size: 400%;
    z-index: -1;
    ${props => props.$styleType === ButtonType.outlined && 'transition: filter 0.3s ease-in-out;'}
    border-radius: 1000px;
  }
  &:hover::before {
    animation: ${move} 20s linear infinite;
    ${props => props.$styleType === ButtonType.outlined && 'filter: blur(5px);'}
  }
  &::after{
    display: ${props => props.$styleType === ButtonType.primary && 'none'};
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.bg};
    left: 0;
    top: 0;
    border-radius: 1000px;
  }`

export default GradientButton;