import {useEffect, useState} from 'react';
import Switch from "../../UI/switch";
import styled from "styled-components";
import {onDark, onLight} from "../../shared/store/model/slices/themeSlice";
import {useAppDispatch, useAppSelector} from "@/shared";
import Select, {Item} from "../../UI/select";
import { useTranslation } from "react-i18next";
import {inEnglish, inRussian} from "../../shared/store/model/slices/languageSlice";
import {pinMenu, unpinMenu} from "../../shared/store/model/slices/pinMenuSlice";
import {useResize} from "@/shared";
import {Button} from "../../shared";

const Settings = () => {
    const themeValue = useAppSelector((store) => store.themeSlice.themeValue)
    const isMenuPin = useAppSelector((store) => store.pinMenuSlice.isMenuPin)
    const dispatch = useAppDispatch()

    const [themeType, setThemeType] = useState(themeValue.type === 'light');
    const [pinNav, setPinNav] = useState(isMenuPin);
    const [width] = useResize();

    const { t, i18n } = useTranslation()

    useEffect(() => {
        if (themeType){
            dispatch(onLight())
        } else {
            dispatch(onDark())
        }
    }, [themeType])

    useEffect(() => {
        if (width <= 768) {
            dispatch(unpinMenu())
        }

        if (pinNav && width > 768){
            dispatch(pinMenu())
        } else {
            dispatch(unpinMenu())
        }
    }, [pinNav, width])

    const languages: Item[] = [
        {
            value: 'Русский',
            key: 'ru',
        },
        {
            value: 'English',
            key: 'en',
        },
    ]

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
        switch (language) {
            case 'ru':
                dispatch(inRussian())
                break
            case 'en':
                dispatch(inEnglish())
                break
        }
    }

    return (
        <SettingsMenu>
            <h3>{t("settings")}</h3>
            <SettingsItem>
                <p>{t("theme")}:</p>
                <Switch checked={themeType} setChecked={setThemeType}/>
            </SettingsItem>
            {window.innerWidth >= 768 && <SettingsItem>
                <p>{t("menuPin")}:</p>
                <Switch checked={pinNav} setChecked={setPinNav}/>
            </SettingsItem>}
            <SettingsItem>
                <p>{t("language")}:</p>
                <Select onClickFun={changeLanguage} items={languages}/>
            </SettingsItem>
            <ButtonDiv>
                <Button onClick={() => window.location.replace("/")} color={'black'} bg={'white'}>На главную</Button>
            </ButtonDiv>
        </SettingsMenu>
    );
};

const SettingsMenu = styled.div`
  h3{
    margin: 0 0 10px 0; 
    text-align: center;
  }`

const SettingsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    margin: 10px 0;
  }`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px`

export default Settings;