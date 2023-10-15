import { createSlice } from '@reduxjs/toolkit'

export enum Technologies{
    html = 'html',
    css = 'css',
}

interface TechnologiesState {
    technology: Technologies,
}

const initialState: TechnologiesState = {
    technology: Technologies.html,
}

export const technologiesSlice = createSlice({
    name: 'technology',
    initialState,
    reducers: {
        onCSS: (state) => {
            state.technology = Technologies.css
        },
        onHTML: (state) => {
            state.technology = Technologies.html
        }
    },
})

export const { onCSS, onHTML } = technologiesSlice.actions

export default technologiesSlice.reducer