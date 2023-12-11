import React, {HTMLAttributes} from 'react';
import {Button, FullLogo, ThemeEnum} from "@/shared";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

export const Footer: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <FooterContainer {...props}>
            <Logo>
                <FullLogo/>
            </Logo>
            <Button onClick={ () => navigate("/html/introduction-to-HTML") }>{t('footerGetStartedButton')}</Button>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  
  img{
    width: 165px;
    cursor: pointer;
  }
`

const Logo = styled.div`
  width: 165px;

  svg{
    width: 100%;
    height: 100%;
    cursor: pointer;

    path:last-child{
      fill: ${props => props.theme.type === ThemeEnum.dark ? 'white' : 'black'};
    }
  }
`