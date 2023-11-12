import styled, {css} from "styled-components";
import whiteFullLogo from '../assets/white-full-logo.svg'
import blackFullLogo from '../assets/black-full-logo.svg'
import grid from '../assets/gird.svg'
import check from '../assets/check.svg'
import bgFirstElem from '../assets/mainBGfirstElement.png'
import bgSecondElem from '../assets/mainBGsecondElement.png'
import bgThirdElem from '../assets/mainBGthirdElement.png'
import SyntaxHighlighter from "react-syntax-highlighter";
import {motion} from "framer-motion";
import {store} from "@/shared";
import {ThemeEnum} from "@shared/types/lib/styled";
import {useAppSelector} from "@/shared";
import {useTranslation} from "react-i18next";
import {Header} from "@/widgets";
import {Button} from "@/shared";
import { HTML_PLACEHOLDER } from "@/shared";
import {MainBlock} from "@/widgets";
import {WhyNoushi} from "@/widgets";

const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.25
        }
    }
};

const MainPage = () => {
    const colors = useAppSelector((store) => store.themeSlice.themeValue.colors)

    const { t } = useTranslation()

    return (
        <div>
            <GridBlock>
                <MainContainer>
                    <motion.div
                        initial={{ translateY: '-50%', scale: 0 }}
                        whileInView={{ translateY: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: .3
                        }}
                    >
                        <Header/>
                    </motion.div>
                    <motion.div
                        variants={container}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{ once: true }}
                        id={'company'}
                    >
                        <MainBlock/>
                    </motion.div>
                </MainContainer>
            </GridBlock>
            <WhyNoushiContainer id={'product'}>
                <MainContainer>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true}}
                    >
                        <WhyNoushi/>
                    </motion.div>
                </MainContainer>
            </WhyNoushiContainer>
            <LeftInfoBlock style={{backgroundColor: colors.bgSecond}} id={'advantages'}>
                <motion.div
                    initial={{y: 50, opacity: 0, scale: 0.5}}
                    whileInView={{y: 0, opacity: 1, scale: 1}}
                    viewport={{ once: true}}
                >
                    <MainContainer>
                        <div>
                            <h2>{t('mainFirstInfoBlockT1')}</h2>
                            <p>{t('mainFirstInfoBlockP1')}</p>
                            <h3>{t('mainFirstInfoBlockT2')}</h3>
                            <ul>
                                <li>{t('mainFirstInfoBlockListElem1')}</li>
                                <li>{t('mainFirstInfoBlockListElem2')}</li>
                                <li>{t('mainFirstInfoBlockListElem3')}</li>
                                <li>{t('mainFirstInfoBlockListElem4')}</li>
                            </ul>
                            <Button onClick={() => window.location.replace("/html/introduction-to-HTML")} bg={colors.bgSecond}>{t('mainFirstInfoBlockGetStartedButton')}</Button>
                        </div>
                        <div>
                            <SyntaxHighlighter language={'handlebars'} useInlineStyles={false}>
                                {HTML_PLACEHOLDER}
                            </SyntaxHighlighter>
                        </div>
                    </MainContainer>
                </motion.div>
            </LeftInfoBlock>
            <RightInfoBlock id={'tools'}>
                <motion.div
                    initial={{y: 50, opacity: 0, scale: 0.5}}
                    whileInView={{y: 0, opacity: 1, scale: 1}}
                    viewport={{ once: true}}
                >
                    <MainContainer>
                        <div>
                            <h2>{t('mainSecondInfoBlockT1')}</h2>
                            <p>{t('mainSecondInfoBlockP1')}</p>
                            <h3>{t('mainSecondInfoBlockT2')}</h3>
                            <ul>
                                <li>{t('mainSecondInfoBlockListElem1')}</li>
                                <li>{t('mainSecondInfoBlockListElem2')}</li>
                                <li>{t('mainSecondInfoBlockListElem3')}</li>
                                <li>{t('mainSecondInfoBlockListElem4')}</li>
                            </ul>
                            <Button onClick={() => window.location.replace("/html/introduction-to-HTML")}>{t('mainSecondInfoBlockGetStartedButton')}</Button>
                        </div>
                        <div>
                            <SyntaxHighlighter language={'handlebars'} useInlineStyles={false}>
                                {HTML_PLACEHOLDER}
                            </SyntaxHighlighter>
                        </div>
                    </MainContainer>
                </motion.div>
            </RightInfoBlock>
            <Footer>
                <MainContainer>
                    <img src={store.getState().themeSlice.themeValue.type === ThemeEnum.dark ? whiteFullLogo : blackFullLogo} alt="Noushi"/>
                    <Button onClick={() => window.location.replace("/html/introduction-to-HTML")}>{t('footerGetStartedButton')}</Button>
                </MainContainer>
            </Footer>
        </div>
    );
};

const CheckText = css`
  padding-left: 31px;
  &::before{
    content: "";
    width: 26px;
    height: 26px;
    background-color: ${props => props.theme.colors.secondary};
    position: absolute;
    transform: translateX(-31px);
    -webkit-mask: url(${check}) no-repeat;
    mask: url(${check}) no-repeat;
    -webkit-mask-size: 100%;
    mask-size: 100%;
  }`

const GridBlock = styled.div`
  background-image: url(${grid});
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: url(${bgFirstElem}) -10% -10%/ 50% no-repeat,
    url(${bgSecondElem}) 110% -50%/ 50% no-repeat,
    url(${bgThirdElem}) 40% 50%/ 60% no-repeat;
    opacity: 0.7;
    filter: blur(50px);
  }`

const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 40px;`

const WhyNoushiContainer = styled.section`
  text-align: center;
  padding: 50px 0;
  h2{
    font-size: clamp(24px, 6vw, 44px);
    margin: 0;
  }
  p{
    font-weight: 300;
  }`

const InfoBlock = styled.section`
  padding: 40px 0;
  & > div:only-child > div:only-child {
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
        ${CheckText};
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
  }`

const LeftInfoBlock = styled(InfoBlock)``
const RightInfoBlock = styled(InfoBlock)`
  & > div:only-child > div:only-child{
    flex-direction: row-reverse;
    & > div:only-child > div:last-child::before {
      background-color: ${props => props.theme.colors.primary};
    }
  }`

const Footer = styled.footer`
  background-color: ${props => props.theme.colors.btn};
  padding: 50px 0;
  & > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }
  img{
    width: 165px;
    cursor: pointer;
  }`

export default MainPage;