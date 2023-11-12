import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import {store} from "@/shared";
import en from '@/shared/i18next/lib/translations/en/translation.json'
import ru from '@/shared/i18next/lib/translations/ru/translation.json'

store.subscribe(() => {
    i18n.use(initReactI18next).use(LanguageDetector).init({
        resources: {
            en: en,
            ru: ru
        },
        fallbackLng: store.getState().languagesSlice.languagesValue,
        interpolation: {
            escapeValue: false
        },
    })
})

export default i18n