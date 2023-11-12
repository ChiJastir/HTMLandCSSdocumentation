import 'styled-components';

import {ITheme, ThemeEnum} from '@shared/types/lib/styled';

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {
        type: ThemeEnum
    }
}