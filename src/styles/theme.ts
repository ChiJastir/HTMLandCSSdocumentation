import {ITheme, ThemeEnum} from "./styled";
import {DefaultTheme} from "styled-components";

export const baseTheme: ITheme = {
    colors: {
        primary: '#646cff',
        // primary: '#444de8',
        secondary: '#e50035',
        brightPrimary: 'blue',
        brightSecondary: 'red ',
    },
}

export const lightTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.light,

    colors: {
        ...baseTheme.colors,
        text: 'rgba(0, 0, 0, 0.87)',
        bg: '#f2f2f2',
        btn: '#e3e3e3',
        contrast: 'black',
    },
}

export const darkTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.dark,

    colors: {
        ...baseTheme.colors,
        text: 'rgba(255, 255, 255, 0.87)',
        bg: '#242424',
        btn: '#1a1a1a',
        contrast: 'white',
    },
}