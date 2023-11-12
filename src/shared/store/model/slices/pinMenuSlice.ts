import { createSlice } from '@reduxjs/toolkit'

interface pinMenuState {
    isMenuPin: boolean,
}

const initialState: pinMenuState = {
    isMenuPin: true,
}

export const pinMenuSlice = createSlice({
    name: 'menuPin',
    initialState,
    reducers: {
        pinMenu: (state) => {
            state.isMenuPin = true
        },
        unpinMenu: (state) => {
            state.isMenuPin = false
        },
    },
})

export const { pinMenu, unpinMenu } = pinMenuSlice.actions

export default pinMenuSlice.reducer