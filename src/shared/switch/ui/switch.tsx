import styled from "styled-components";
import React, { HTMLAttributes } from "react";

interface SwitchProps extends HTMLAttributes<HTMLLabelElement>{
    checked: boolean,
    setChecked: (check: boolean) => void,
}

export const Switch: React.FC<SwitchProps> = ({checked, setChecked, ...props}) => {
    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <SwitchContainer {...props}>
            <input
                checked={checked}
                onChange={handleChange}
                type="checkbox"
            />
            <Slider/>
        </SwitchContainer>
    );
};

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25.5px;
  input{
    opacity: 0;
    width: 0;
    height: 0;
  }
  input:checked + span{
    background-color: ${props => props.theme.colors.bg};
  }
  input:checked + span{
    box-shadow: 0 0 1px gray;
  }
  input:checked + span:before {
    transform: translateX(19.5px);
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.bg};
  border-radius: 25.5px;
  transition: .4s;
  &:before{
    position: absolute;
    content: "";
    height: 19.5px;
    width: 19.5px;
    left: 3px;
    bottom: 3px;
    background-color: ${props => props.theme.colors.contrast};
    border-radius: 50%;
    transition: 200ms;
  }
`