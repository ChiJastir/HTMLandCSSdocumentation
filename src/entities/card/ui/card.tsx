import {motion} from "framer-motion";
import styled from "styled-components";
import {ThemeEnum} from "@/shared";
import React from "react";
import {CardProps} from "../lib/types";

export const Card: React.FC<CardProps> = ({information, children, cardAnimation, ...props}) => {
    return (
        <CardBody {...props}>
            <CardContent>
                <Img>
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        src={information.image}
                        alt={information.heading}
                    />
                </Img>
                <h3>{information.heading}</h3>
                <p>{information.description}</p>
            </CardContent>
            <Children>
                <motion.div
                    variants={cardAnimation}
                >
                    {children}
                </motion.div>
            </Children>
        </CardBody>
    );
};

const CardBody = styled.div`
  border-radius: 10px;
  background-color: ${props => props.theme.colors.bgSecond};
  box-shadow: ${props => props.theme.colors.primary} 0 0 1px;
  color: ${props => props.theme.colors.contrast};
  text-align: left;
  overflow: hidden;
  height: 700px;
  width: 100%;
  
  &:hover{
    box-shadow: ${props => props.theme.colors.secondary} 0 0 3px;
  }
  
  h3{
    font-size: clamp(18px, 4vw, 24px);
  }
  
  p{
    margin: 0;
    font-weight: 300;
  }
`

const CardContent = styled.div`
  padding: 30px;
  min-height: calc(50% - 60px)
`

const Children = styled.div`
  background: linear-gradient(90deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary});
`

const Img = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.bg};
  border-radius: 100%;
  padding: 15px;
  background:
          linear-gradient(${props => props.theme.colors.bgSecond} 0 0) padding-box,
          linear-gradient(90deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary}) border-box;
  border: 1px solid transparent;

  img{
    width: 100%;
    filter: brightness(0) invert(${props => props.theme.type === ThemeEnum.dark ? 1 : 0});
  }
`