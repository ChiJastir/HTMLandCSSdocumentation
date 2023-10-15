import React from 'react';
import styled from "styled-components";

export interface Item{
    value: string,
    key: string,
}

interface SelectProps{
    children?: React.ReactNode,
    items: Item[],
    onClickFun: (lang: string) => void,
}

const Select = ({items, onClickFun}: SelectProps) => {
    return (
        <SelectContainer>
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
  }`

const SelectItem = styled.div`
  padding: 5px;
  color: black;
  cursor: pointer;
  &:hover{
    background-color: lightgray;
  }`

export default Select;