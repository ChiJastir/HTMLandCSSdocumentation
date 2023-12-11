import React, { HTMLAttributes } from 'react';
import { motion } from "framer-motion";
import home from "@shared/assets/ui/home.svg";
import styled from "styled-components";

const HomeButton: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <SettingsBtnContainer {...props}>
            <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{
                    scale: 0.8,
                }}
                src={home}
                alt="home"
            />
        </SettingsBtnContainer>
    );
};

const SettingsBtnContainer = styled.div`
  img{
    width: 30px;
    height: 30px;
    cursor: pointer;
    filter: brightness(0) ${props => props.theme.type !== 'light' && 'invert(1)'};
  }
`

export default HomeButton;