export interface ITheme {
    colors: {
        primary?: string,
        secondary?: string,
        brightPrimary?: string,
        brightSecondary?: string,
        text?: string,
        bg?: string,
        bgSecond?: string,
        btn?: string,
        contrast?: string,
    }
}

export enum ThemeEnum  {
    light = "light",
    dark = "dark"
}