import { createSlice } from '@reduxjs/toolkit'
import {DefaultTheme} from "styled-components";
import {darkTheme, lightTheme} from "@/shared/styles/theme";

interface ThemeState {
    themeValue: DefaultTheme,
}

const initialState: ThemeState = {
    themeValue: darkTheme,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        onLight: (state) => {
            state.themeValue = lightTheme
        },
        onDark: (state) => {
            state.themeValue = darkTheme
        },
    },
})

export const { onLight, onDark } = themeSlice.actions

export default themeSlice.reducer