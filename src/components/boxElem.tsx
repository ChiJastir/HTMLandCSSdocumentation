import styled, {css} from "styled-components";
import {baseTheme} from "../styles/theme";

const Elem = styled.div<ElemProps>`
  width: ${props => props.width || '50px'};
  height: ${props => props.height || '50px'};
  ${props => props.styleType === styleType.primary ? css`background-color: ${props.color || baseTheme.colors.secondary}` : css`border: ${props.color || baseTheme.colors.secondary} 1px solid`};
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => css`${props.$elemStyle}`}`

export enum styleType{
    primary = 'primary',
    outlined = 'outlined',
}

export interface ElemProps{
    styleType?: styleType,
    width?: string,
    height?: string,
    color?: string,
    $elemStyle?: string,
}

export default Elem;