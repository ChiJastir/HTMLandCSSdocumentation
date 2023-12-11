import styled, {keyframes} from "styled-components";

const gradientVerAnim = keyframes`
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: 50% 150%;
  }`

const gradientHorAnim = keyframes`
  0% {
    background-position: 0 50%;
  }
  100% {
    background-position: 150% 50%;
  }`

interface GradientProps{
    $vertical?: boolean,
    $horizontal?: boolean,
    height?: string,
    width?: string,
    speed?: string,
}

export const Gradient = styled.div<GradientProps>`
  height: ${props => props.height || '100%'};
  width: ${props => props.width || '100%'};
  background: linear-gradient(${props => props.$horizontal && '90deg, ' || props.$vertical && ''}${props => props.theme.colors.brightSecondary}, ${props => props.theme.colors.brightPrimary}, ${props => props.theme.colors.brightSecondary});
  background-size: ${props => props.$horizontal && '300% 100%' || props.$vertical && '100% 300%'};
  animation: ${props => props.$horizontal && gradientHorAnim || props.$vertical && gradientVerAnim} ${props => props.speed || '10s'} linear infinite;`