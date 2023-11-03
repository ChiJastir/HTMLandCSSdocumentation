import styled, {css} from "styled-components";
import GradientButton, {ButtonType} from "../UI/gradientButton";
import whiteFullLogo from '../assets/white-full-logo.svg'
import blackFullLogo from '../assets/black-full-logo.svg'
import grid from '../assets/gird.svg'
import arrow from '../assets/arrow-right.svg'
import check from '../assets/check.svg'
import bgFirstElem from '../assets/mainBGfirstElement.png'
import bgSecondElem from '../assets/mainBGsecondElement.png'
import bgThirdElem from '../assets/mainBGthirdElement.png'
import SyntaxHighlighter from "react-syntax-highlighter";
import {motion, MotionValue, useScroll, useTransform} from "framer-motion";
import store from "../store";
import {ThemeEnum} from "../styles/styled";
import Card, {CardInfo} from "../UI/card";
import hexagon from '../assets/hexagon.svg'
import support from '../assets/support.svg'
import update from '../assets/update.svg'
import {useEffect, useRef, useState} from "react";
import {useAppSelector} from "../hooks/redux";
import {useResize} from "../hooks/useResize";
import BurgerButton from "../UI/burgerButton";
import {useTranslation} from "react-i18next";

const _HTML_PLACEHOLDER = `<!DOCTYPE html>
<html>
<head>
  <title>Complex HTML Example</title>
  <style>
    .enigmatic-placeholder {
      font-size: 24px;
      font-weight: bold;
      color: #FF0000;
      text-align: center;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to our Enigmatic Tutorials!</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Tutorials</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  
  <section>
    <div class="enigmatic-placeholder">Unleash the hidden language of the web with our enigmatic tutorials, leading you to create digital masterpieces that bewilder and captivate.</div>
  </section>
  
  <article>
    <h2>Why Choose Our Enigmatic Tutorials?</h2>
    <p>Our enigmatic tutorials provide a unique and captivating learning experience that enables you to explore the depths of web development. With our guidance, you will uncover the secrets of creating stunning digital masterpieces that leave your audience in awe.</p>
    <p>Whether you are a beginner or an experienced developer, our tutorials cater to all skill levels. We offer comprehensive step-by-step instructions, accompanied by real-life examples and practical exercises, to ensure your understanding and mastery of the enigmatic language of the web.</p>
  </article>
  
  <footer>
    <p>&copy; 2022 Enigmatic Tutorials. All rights reserved.</p>
  </footer>
</body>
</html>`

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

const item = {
    hidden: { y: 50, opacity: 0, scale: 0.5 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1
    }
};

const cardItemLeftTop = {
    hidden: { x: -500, opacity: 0, scale: 0.5 },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1
    }
};

const MainPage = () => {
    const colors = useAppSelector((store) => store.themeSlice.themeValue.colors)

    const [menuOpened, setMenuOpened] = useState(false)
    const mobileMenu = useRef<HTMLUListElement | null>(null)

    const [width] = useResize()

    const cardsElem = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({target: cardsElem, offset: ['start end', 'end end']})
    const xPosition = useTransform(scrollYProgress, [0, 1], ['-15%', '0%'])
    const [xPositionNormalize, setXPositionNormalize] = useState<string | MotionValue>(xPosition)

    const { t } = useTranslation()

    const _WHY_NOUSHI_INFO: CardInfo[] = [
        {
            heading: t('whyNoushiCardFirstT'),
            description: t('whyNoushiCardFirstP1'),
            image: hexagon,
        },
        {
            heading: t('whyNoushiCardSecondT'),
            description: t('whyNoushiCardSecondP1'),
            image: support,
        },
        {
            heading: t('whyNoushiCardThirdT'),
            description: t('whyNoushiCardThirdP1'),
            image: update,
        },
    ]

    const CardPropItem = {
        hidden: {x: 50, y: 100, opacity: 0},
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        if (width > 768) setXPositionNormalize(xPosition)
        else setXPositionNormalize('0%')
    }, [width])

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
                        <Header>
                            <div>
                                <img src={store.getState().themeSlice.themeValue.type === ThemeEnum.dark ? whiteFullLogo : blackFullLogo} alt="Noushi"/>
                                {width > 960 && <ul>
                                    <li><a href="#company">{t('mainHeaderNavCompany')}</a></li>
                                    <li><a href="#product">{t('mainHeaderNavProduct')}</a></li>
                                    <li><a href="#advantages">{t('mainHeaderNavAdvantages')}</a></li>
                                    <li><a href="#tools">{t('mainHeaderNavTools')}</a></li>
                                </ul>}
                                {width > 960
                                    ? <GradientButton onClick={() => window.location.replace("/html/introduction-to-HTML")} $styleType={ButtonType.outlined}>{t('mainHeaderGetStartedButton')}</GradientButton>
                                    : <div style={{width: '50px'}} onClick={() => setMenuOpened(!menuOpened)}>
                                        <BurgerButton isOpen={!menuOpened} setIsOpen={setMenuOpened}/>
                                    </div>}
                            </div>
                            <ul ref={mobileMenu} style={{maxHeight: menuOpened ? mobileMenu.current?.offsetWidth : 0}} onClick={() => setMenuOpened(false)}>
                                <li><a href="#company">{t('mainHeaderNavCompany')}</a></li>
                                <li><a href="#product">{t('mainHeaderNavProduct')}</a></li>
                                <li><a href="#advantages">{t('mainHeaderNavAdvantages')}</a></li>
                                <li><a href="#tools">{t('mainHeaderNavTools')}</a></li>
                            </ul>
                        </Header>
                    </motion.div>
                    <motion.div
                        variants={container}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{ once: true }}
                        id={'company'}
                    >
                        <MainBlock>
                            <motion.h2 variants={item}>{t('mainPageShortSlogan')}</motion.h2>
                            <motion.h1 variants={item}>{t('mainPageTH1')} <GradientText>{t('mainPageTH2')}</GradientText> {t('mainPageTH3')}</motion.h1>
                            <motion.p variants={item}>{t('mainPageP1H1')} <span>{t('mainPageP1H2')}</span> {t('mainPageP1H3')}</motion.p>
                            <motion.div variants={item}>
                                <Buttons>
                                    <GradientButton onClick={() => window.location.replace("/html/introduction-to-HTML")} $styleType={ButtonType.primary}>{t('mainPageGetStartedButton')}</GradientButton>
                                    {/*<GradientButton onClick={() => window.location.replace("/html/introduction-to-HTML")} $styleType={ButtonType.outlined}>Book A Demo</GradientButton>*/}
                                </Buttons>
                            </motion.div>
                            <motion.div variants={item}>
                                <CreditCartParagraph>{t('mainPageNoCredit')}</CreditCartParagraph>
                            </motion.div>
                            <motion.div variants={item} style={{width: '100%'}}>
                                <SyntaxHighlighter language={'handlebars'} useInlineStyles={false}>
                                    {_HTML_PLACEHOLDER}
                                </SyntaxHighlighter>
                            </motion.div>
                        </MainBlock>
                    </motion.div>
                </MainContainer>
            </GridBlock>
            <WhyNoushi ref={cardsElem} id={'product'}>
                <MainContainer>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true}}
                    >
                        <motion.h2 variants={cardItemLeftTop}>{t('whyNoushiTH1')} <GradientText>{t('whyNoushiTH2')}</GradientText></motion.h2>
                        <motion.p variants={cardItemLeftTop}>{t('whyNoushiP1')}</motion.p>
                        <motion.div
                            style={{ translateX: xPositionNormalize}}
                        >
                            <Cards>
                                {_WHY_NOUSHI_INFO.map(card => <Card key={card.heading} information={card} cardPropItem={CardPropItem}>
                                    <SyntaxHighlighter language={'handlebars'} useInlineStyles={false} customStyle={{overflow: 'hidden'}}>
                                        {_HTML_PLACEHOLDER}
                                    </SyntaxHighlighter>
                                </Card>)}
                            </Cards>
                        </motion.div>
                    </motion.div>
                </MainContainer>
            </WhyNoushi>
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
                            <GradientButton onClick={() => window.location.replace("/html/introduction-to-HTML")} bg={colors.bgSecond} $styleType={ButtonType.outlined}>{t('mainFirstInfoBlockGetStartedButton')}</GradientButton>
                        </div>
                        <div>
                            <SyntaxHighlighter language={'handlebars'} useInlineStyles={false}>
                                {_HTML_PLACEHOLDER}
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
                            <GradientButton onClick={() => window.location.replace("/html/introduction-to-HTML")} $styleType={ButtonType.outlined}>{t('mainSecondInfoBlockGetStartedButton')}</GradientButton>
                        </div>
                        <div>
                            <SyntaxHighlighter language={'handlebars'} useInlineStyles={false}>
                                {_HTML_PLACEHOLDER}
                            </SyntaxHighlighter>
                        </div>
                    </MainContainer>
                </motion.div>
            </RightInfoBlock>
            <Footer>
                <MainContainer>
                    <img src={store.getState().themeSlice.themeValue.type === ThemeEnum.dark ? whiteFullLogo : blackFullLogo} alt="Noushi"/>
                    <GradientButton onClick={() => window.location.replace("/html/introduction-to-HTML")} $styleType={ButtonType.outlined}>{t('footerGetStartedButton')}</GradientButton>
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

const Header = styled.header`
  & > div:first-child{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
  }

  & > ul:last-child{
    flex-direction: column; 
    overflow: hidden;
    transition: max-height 1s;
    
    li{
      font-size: 30px;
      text-align: center;
    }
  }
  
  img{
    width: 165px;
    cursor: pointer;
  }
  
  ul{
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
  }`

const MainBlock = styled.main`
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
  }`

const GradientText = styled.span`
  background: -webkit-linear-gradient(0deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`

const CreditCartParagraph = styled.p`${CheckText}`

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 25px 0;
  gap: 20px;`

const WhyNoushi = styled.section`
  text-align: center;
  padding: 50px 0;
  h2{
    font-size: clamp(24px, 6vw, 44px);
    margin: 0;
  }
  p{
    font-weight: 300;
  }`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  @media (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
  }
  
  width: 100%;
  gap: 15px;
  margin-top: 50px;
  pre{
    position: relative;
    top: 40px; 
    left: 40px; 
    padding: 20px;
    border-radius: 10px;
    margin: 0;
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