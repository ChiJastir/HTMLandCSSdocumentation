import styled from "styled-components";
import grid from '@/shared/assets/ui/gird.svg'
import bgFirstElem from '@shared/assets/ui/mainBGfirstElement.png'
import bgSecondElem from '@shared/assets/ui/mainBGsecondElement.png'
import bgThirdElem from '@shared/assets/ui/mainBGthirdElement.png'
import { motion } from "framer-motion";
import { useAppSelector } from "@/shared";
import { Header, OurCare, OurPride, Footer, WhyNoushi, MainBlock } from "@/widgets";
import { InfoBlock, InfoBlockTypes } from "@/entities";

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

export const MainPage = () => {
    const colors = useAppSelector((store) => store.themeSlice.themeValue.colors)

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
            <MainContainer>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true}}
                >
                    <WhyNoushi id={'product'}/>
                </motion.div>
            </MainContainer>
            <motion.div
                initial={{y: 50, opacity: 0, scale: 0.5}}
                whileInView={{y: 0, opacity: 1, scale: 1}}
                viewport={{ once: true}}
            >
                <InfoBlock style={{backgroundColor: colors.bgSecond}} id={'advantages'}>
                    <MainContainer>
                        <OurPride/>
                    </MainContainer>
                </InfoBlock>
            </motion.div>
            <motion.div
                initial={{y: 50, opacity: 0, scale: 0.5}}
                whileInView={{y: 0, opacity: 1, scale: 1}}
                viewport={{ once: true}}
            >
                <InfoBlock type={InfoBlockTypes.right} id={'tools'}>
                    <MainContainer>
                        <OurCare/>
                    </MainContainer>
                </InfoBlock>
            </motion.div>
            <FooterContainer>
                <MainContainer>
                    <Footer/>
                </MainContainer>
            </FooterContainer>
        </div>
    );
};

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
    background: 
                url(${bgFirstElem}) -10% -10%/ 50% no-repeat, 
                url(${bgSecondElem}) 110% -50%/ 50% no-repeat, 
                url(${bgThirdElem}) 40% 50%/ 60% no-repeat;
    opacity: 0.7;
    filter: blur(50px);
  }
`

const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 40px;
`

const FooterContainer = styled.div`
  background-color: ${props => props.theme.colors.btn};
`