import {
    inEnglish,
    inRussian,
    onDark,
    onLight,
    pinMenu,
    SelectItem,
    unpinMenu,
    useAppDispatch,
    useAppSelector,
    useResize
} from "@/shared";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

export const useSettings = () => {
    const { i18n } = useTranslation()

    const themeValue = useAppSelector((store) => store.themeSlice.themeValue)
    const isMenuPin = useAppSelector((store) => store.pinMenuSlice.isMenuPin)
    const dispatch = useAppDispatch()

    const [themeType, setThemeType] = useState(themeValue.type === 'light');
    const [pinNav, setPinNav] = useState(isMenuPin);
    const [width] = useResize();

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

    const languages: SelectItem[] = [
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

    return {
        themeType,
        setThemeType,
        pinNav,
        setPinNav,
        languages,
        changeLanguage,
    }
}