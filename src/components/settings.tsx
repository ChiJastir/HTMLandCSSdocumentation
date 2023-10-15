import {useEffect, useState} from 'react';
import Switch from "../UI/switch";
import styled from "styled-components";
import {onDark, onLight} from "../features/themeSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import Select, {Item} from "../UI/select";
import { useTranslation } from "react-i18next";
import {inEnglish, inRussian} from "../features/languageSlice";

const Settings = () => {
    const themeValue = useAppSelector((store) => store.themeSlice.themeValue)
    const dispatch = useAppDispatch()

    const [themeType, setThemeType] = useState(themeValue.type === 'light');

    const { t, i18n } = useTranslation()

    useEffect(() => {
        if (themeType){
            dispatch(onLight())
        } else {
            dispatch(onDark())
        }
    }, [themeType])

    // useEffect(() => {
    //     if (languageValue === 'ru'){
    //         dispatch(inRussian())
    //     } else {
    //         dispatch(inEnglish())
    //     }
    // }, [])

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
            <SettingsItem>
                <p>{t("language")}:</p>
                <Select onClickFun={changeLanguage} items={languages}/>
            </SettingsItem>
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
  align-items: center;`

export default Settings;