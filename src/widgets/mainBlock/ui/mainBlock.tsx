import {motion} from "framer-motion";
import {Button, CheckedText, GradientText, HTML_PLACEHOLDER} from "@/shared";
import SyntaxHighlighter from "react-syntax-highlighter";
import styled from "styled-components";
import arrow from "@shared/assets/ui/arrow-right.svg";
import {animationItem} from "../lib/motionAnimation";
import {useTranslation} from "react-i18next";
import React, {HTMLAttributes} from "react";
import {useNavigate} from "react-router-dom";

export const MainBlock: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <Main {...props}>
            <motion.h2 variants={animationItem}>{t('mainPageShortSlogan')}</motion.h2>
            <motion.h1 variants={animationItem}>{t('mainPageTH1')} <GradientText>{t('mainPageTH2')}</GradientText> {t('mainPageTH3')}</motion.h1>
            <motion.p variants={animationItem}>{t('mainPageP1H1')} <span>{t('mainPageP1H2')}</span> {t('mainPageP1H3')}</motion.p>
            <motion.div variants={animationItem}>
                <Buttons>
                    <Button onClick={ () => navigate("/html/introduction-to-HTML") } $primary>{t('mainPageGetStartedButton')}</Button>
                </Buttons>
            </motion.div>
            <motion.div variants={animationItem}>
                <CreditCartParagraph>{t('mainPageNoCredit')}</CreditCartParagraph>
            </motion.div>
            <motion.div variants={animationItem} style={{width: '100%'}}>
                <SyntaxHighlighter language={'handlebars'} useInlineStyles={false}>
                    {HTML_PLACEHOLDER}
                </SyntaxHighlighter>
            </motion.div>
        </Main>
    );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: min(800px, 100%);
  margin: auto;
  padding: 50px 0;
  
  h2{
    color: ${props => props.theme.colors.secondary};
    font-size: 16px;
    font-weight: 500;
    display: inline-block;
    //padding-right: 33px;
    &::after{
      content: "";
      width: 28px;
      height: 28px;
      background-color: ${props => props.theme.colors.secondary};
      position: absolute;
      transform: translateX(5px);
      -webkit-mask: url(${arrow}) no-repeat;
      mask: url(${arrow}) no-repeat;
      -webkit-mask-size: 100%;
      mask-size: 100%;
    }
  }
  h1{
    font-size: clamp(36px, 8vw, 54px);
    margin: 15px 0;
  }
  p{
    font-weight: 300;
    span{
      font-weight: 600;
    }
  }
  pre{
    background:
            linear-gradient(${props => props.theme.colors.btn} 0 0) padding-box,
            linear-gradient(90deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary}) border-box;
    padding: 20px;
    border: 2px solid transparent;
    border-radius: 10px;
    display: inline-block;
    width: calc(100% - 20px * 2);
    height: 400px;
    text-align: left;
    overflow: hidden;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 25px 0;
  gap: 20px;
`

const CreditCartParagraph = styled.p`${CheckedText}`