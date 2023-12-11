import styled, {css} from "styled-components";

export const BoxElem = styled.div<ElemProps>`
  width: ${props => props.width || '50px'};
  height: ${props => props.height || '50px'};
  ${props => props.styleType === styleType.primary ? css`background-color: ${props.color || props.theme.colors.secondary}` : css`border: ${props.color || props.theme.colors.secondary} 1px solid`};
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