import React, { HTMLAttributes } from 'react';
import {InfoBlockTypes} from "@/entities";
import styled, {css} from "styled-components";
import { CheckedText } from "@/shared"

interface Props extends HTMLAttributes<HTMLDivElement>{
    type?: InfoBlockTypes
}

export const InfoBlock: React.FC<Props> = ({children, type = InfoBlockTypes.left, ...props}) => {
    return (
        <InfoBlockComponent type={type} {...props}>
            {children}
        </InfoBlockComponent>
    );
};

const InfoBlockComponent = styled.section<{type: InfoBlockTypes}>`
  padding: 40px 0;
  & > div:only-child {
    display: flex;
    width: calc(100% - 40px * 2);
    gap: 25px;
    align-items: center;

    & > div {
      width: 50%;
      @media (max-width: 768px){
        width: 100%;
      }
    }

    & > div:first-child {
      h2 {
        font-size: clamp(20px, 6vw, 36px);
        line-height: clamp(24px, 6vw, 44px);
        margin-top: 0;
      }

      p {
        font-weight: 300;
      }

      h3 {
        font-size: clamp(18px, 4vw, 26px);
        font-weight: 500;
      }

      ul {
        padding: 0;
        margin: 0;
        margin-bottom: 25px;
        list-style: none;
      }

      li {
        ${CheckedText};
        margin: 15px 0;
      }
    }
    & > div:last-child {
      position: relative;
      z-index: 0;
      
      @media (max-width: 768px){
        display: none;
      }
    }
    & > div:last-child::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${props => props.theme.colors.secondary};
      z-index: -1;
      filter: blur(150px);
      scale: 0.65;
      border-radius: 100%;
    }

    pre {
      overflow: hidden;
      padding: 20px;
      border-radius: 10px;
      max-height: 450px;
      margin: 0;
    }
  }

  ${props => props.type === InfoBlockTypes.right && css`
    & > div:only-child{
      flex-direction: row-reverse;
      & > div:last-child::before {
        background-color: ${props => props.theme.colors.primary};
      }
    }
  `}
`
