import {motion} from "framer-motion";
import {Card} from "@/entities";
import SyntaxHighlighter from "react-syntax-highlighter";
import {HTML_PLACEHOLDER} from "@/shared";
import { GradientText } from "@/shared";
import {useCardsInfo} from "@widgets/whyNoushi/lib/useCardInfo";
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {cardItemLeftTop, cardAnimation} from "../lib/motionAnimation";
import React, {HTMLAttributes} from "react";
import {useCardsScroll} from "@widgets/whyNoushi/lib/useCardsScroll";

export const WhyNoushi: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    const CardInfo = useCardsInfo()
    const {cardsElem, xPositionNormalize} = useCardsScroll()
    const { t } = useTranslation()

    return (
        <div {...props} ref={cardsElem}>
            <motion.h2 variants={cardItemLeftTop}>{t('whyNoushiTH1')} <GradientText>{t('whyNoushiTH2')}</GradientText></motion.h2>
            <motion.p variants={cardItemLeftTop}>{t('whyNoushiP1')}</motion.p>
            <motion.div
                style={{ translateX: xPositionNormalize}}
            >
                <Cards>
                    {CardInfo.map(card => <Card key={card.heading} information={card} cardAnimation={cardAnimation}>
                        <SyntaxHighlighter language={'handlebars'} useInlineStyles={false} customStyle={{overflow: 'hidden'}}>
                            {HTML_PLACEHOLDER}
                        </SyntaxHighlighter>
                    </Card>)}
                </Cards>
            </motion.div>
        </div>
    );
};

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
  }
`