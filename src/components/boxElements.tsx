import Elem, {styleType} from "./boxElem";
import styled, {css} from "styled-components";
import {baseTheme} from "../styles/theme";

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

const BoxElements = ({length, $containerStyle, color, styleType, height, width, $elemStyle}: ContainerProps) => {
    const nums = [...Array(length).keys()]

    return (
        <Container $containerStyle={$containerStyle}>
            {nums.map(num => <Elem color={color} styleType={styleType} height={height} width={width} $elemStyle={$elemStyle} key={num}>
                {num+1}
            </Elem>)}
        </Container>
    );
};

const Container = styled.div<ContainerProps>`
  border: ${baseTheme.colors.primary} 1px solid;
  ${props => css`${props.$containerStyle}`}`

export default BoxElements;