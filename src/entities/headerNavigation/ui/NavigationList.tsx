import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLUListElement>{
    $vertical?: boolean,
    innerRef?: React.LegacyRef<HTMLUListElement> | undefined,
}

export const NavigationList: React.FC<Props> = ({$vertical = false, innerRef, ...props}) => {
    const { t } = useTranslation()

    return (
        <HeaderNavigation {...props} $vertical={$vertical} ref={innerRef}>
            <li><a href="#company">{t('mainHeaderNavCompany')}</a></li>
            <li><a href="#product">{t('mainHeaderNavProduct')}</a></li>
            <li><a href="#advantages">{t('mainHeaderNavAdvantages')}</a></li>
            <li><a href="#tools">{t('mainHeaderNavTools')}</a></li>
        </HeaderNavigation>
    );
};

const HeaderNavigation = styled.ul<{$vertical: boolean}>`
  display: flex;
  padding: 0;
  margin: 0;

  li{
    list-style: none;
    margin: 0;
    font-size: 18px;
    gap: 20px;

    a{
      all: unset;
      cursor: pointer;
      padding: 10px;
      background-image: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
      background-position: 0 100%;
      background-repeat: no-repeat;
      background-size: 0 2px;
      transition: background-size 300ms;
    }
  
    a:hover {
      background-size: 100% 2px;
    }
  }
  ${props => props.$vertical && css`
    flex-direction: column;
    overflow: hidden;
    transition: max-height 1s;

    li{
      font-size: 30px;
      text-align: center;
    }
  `}
`