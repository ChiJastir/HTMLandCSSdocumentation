import styled, {css, keyframes} from "styled-components";
import React, {HTMLAttributes} from "react";

interface Props extends HTMLAttributes<HTMLDivElement>{
    children?: React.ReactNode,
    $primary?: boolean,
    onClick?: () => void,
    bg?: string,
    color?: string,
}

export const Button: React.FC<Props> = ({children, $primary = false, onClick, bg, color, ...props}) => {
    return (
        <Stage {...props}>
            <Btn onClick={onClick} $primary={$primary} $bg={bg} $customColor={color}>{children}</Btn>
        </Stage>
    );
};



const glow = keyframes`
  0% {
    background-position: 0 0;
  }
  
  50% {
    background-position: 200% 0;
  }
  
  100% {
    background-position: 0 0;
  }
`

const Stage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  width: max-content;
`

const Btn = styled.button<{$primary: boolean, $bg: string | undefined, $customColor: string | undefined}>`
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  outline: none;
  background: rgba(0, 0, 0, 0);
  font-weight: 700;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 1000px;
  color: ${props => props.$customColor ? props.$customColor : props.$primary ? 'white' : props.theme.colors.contrast};
  
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
    border-radius: 1000px;
    
    transition: filter 0.3s ease-in-out;
  }
  
  &:hover::before {
    animation: ${glow} 10s linear infinite;
    
    ${props => !props.$primary && css`
      filter: blur(5px);
    `}
  }
  
  &::after{
    display: ${props => props.$primary && 'none'};
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => props.$bg ?? props.theme.colors.bg};
    left: 0;
    top: 0;
    border-radius: 1000px;
  }
`