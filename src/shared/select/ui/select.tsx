import React, {HTMLAttributes} from 'react';
import styled from "styled-components";

export interface SelectItem{
    value: string,
    key: string,
}

interface SelectProps extends HTMLAttributes<HTMLDivElement>{
    children?: React.ReactNode,
    items: SelectItem[],
    onClickFun: (lang: string) => void,
}

export const Select: React.FC<SelectProps> = ({items, onClickFun, ...props}) => {
    return (
        <SelectContainer {...props}>
            {items.map(item => <SelectItem key={item.key} onClick={() => onClickFun(item.key)}>
                {item.value}
            </SelectItem>)}
        </SelectContainer>
    );
};

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50px;
  border-radius: 5px;
  border: 1px lightgray solid;
  div + div{
    border-top: lightgray 1px solid;
  }
`

const SelectItem = styled.div`
  padding: 5px;
  color: black;
  cursor: pointer;
  &:hover{
    background-color: lightgray;
  }
`