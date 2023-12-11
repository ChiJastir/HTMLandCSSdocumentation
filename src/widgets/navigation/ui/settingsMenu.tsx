import React, { HTMLAttributes, useState } from 'react';
import { Settings } from "@/features";
import { ModalWindow } from "@/shared";
import settings from "@shared/assets/ui/settings.svg";
import { motion } from "framer-motion";
import styled from "styled-components";

interface SettingsMenuProps extends HTMLAttributes<HTMLDivElement>{
    menuVisible: (visible: boolean) => void,
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({menuVisible, ...props}) => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <div {...props}>
            <ModalWindow isVisible={modalVisible} setIsVisible={setModalVisible}>
                <Settings/>
            </ModalWindow>
            <SettingsBtnContainer>
                <motion.img
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                    }}
                    src={settings}
                    alt="settings"
                    onTap={() => {setModalVisible(true); menuVisible(false)}}
                />
            </SettingsBtnContainer>
        </div>
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

export default SettingsMenu