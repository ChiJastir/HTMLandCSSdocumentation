import styled from "styled-components";
import {baseTheme} from "../styles/theme";

export const Code = styled.code`
  background-color: rgba(255, 255, 255, 0.05);`

export const Container = styled.div`
  padding: 40px; 
  width: calc(100% - 40px * 2);`

export const ParagraphBorder = styled.p<{color?: string}>`
  margin-top: 0;
  margin-bottom: 10px;
  padding: 10px;
  border: ${({color = baseTheme.colors.primary}) => color} 1px solid;`

export const Page = styled.div`
  display: flex;`

export const Example = styled.div`
  padding: 10px 0;
  &+&{
    border-top: #494949 1px solid;
  }`