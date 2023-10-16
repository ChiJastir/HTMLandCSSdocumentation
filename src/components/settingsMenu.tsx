import React, {useState} from 'react';
import Settings from "./settings";
import ModalWindow from "../UI/modalWindow";
import settings from "../assets/settings.svg";
import {motion} from "framer-motion";
import styled from "styled-components";

interface SettingsMenuProps{
    menuVisible: (visible: boolean) => void,
}

const SettingsMenu = ({menuVisible}: SettingsMenuProps) => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <div>
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
  }`

export default SettingsMenu;