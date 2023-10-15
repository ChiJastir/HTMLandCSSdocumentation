import styled from "styled-components";

export const Code = styled.code`
  background-color: ${props => props.theme.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'};`

export const Container = styled.div`
  padding: 40px; 
  width: calc(100% - 40px * 2);`

export const ParagraphBorder = styled.p<{color?: string}>`
  z-index: 10;
  margin-top: 0;
  margin-bottom: 10px;
  padding: 10px;
  border: ${props => props.theme.colors.primary} 1px solid;`

export const Example = styled.div`
  padding: 10px 0;
  &+&{
    border-top: #494949 1px solid;
  }`