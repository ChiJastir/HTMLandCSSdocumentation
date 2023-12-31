import { BoxElem, styleType } from "./boxElem";
import styled, { css } from "styled-components";

export enum displayType{
    flex = 'flex',
    grid = 'grid',
}

interface ContainerProps {
    length?: number,
    $containerStyle?: string,
    $elemStyle?: string,
    styleType?: styleType,
    width?: string,
    height?: string,
    color?: string,
}

export const BoxElements = ({length, $containerStyle, color, styleType, height, width, $elemStyle}: ContainerProps) => {
    const nums = [...Array(length).keys()]

    return (
        <Container $containerStyle={$containerStyle}>
            {nums.map(num => <BoxElem color={color} styleType={styleType} height={height} width={width} $elemStyle={$elemStyle} key={num}>
                {num+1}
            </BoxElem>)}
        </Container>
    );
};

const Container = styled.div<ContainerProps>`
  border: ${props => props.theme.colors.primary} 1px solid;
  ${props => css`${props.$containerStyle}`}
`