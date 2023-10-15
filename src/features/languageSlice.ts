import { createSlice } from '@reduxjs/toolkit'

export enum Languages{
    en = 'en',
    ru = 'ru',
}

interface LanguagesState {
    languagesValue: Languages,
}

const initialState: LanguagesState = {
    languagesValue: Languages.en,
}

export const languagesSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        inRussian: (state) => {
            state.languagesValue = Languages.ru
        },
        inEnglish: (state) => {
            state.languagesValue = Languages.en
        }
    },
})

export const { inRussian, inEnglish } = languagesSlice.actions

export default languagesSlice.reducer