import type React from 'react'
import { type ShadowName, type ElevationKind } from '../Options'
import type { ComponentTheme } from '../Options/Themes/themeBuilder'
import { type ThemeResolverParams } from '../Options/Themes/themeResolver'

export interface ThemeOptions extends ThemeResolverParams {
    glass?: boolean
    shadow?: ShadowName
    disabled?: boolean
    elevationKind?: ElevationKind
    /** 额外样式覆盖（始终应用在最后） */
    styleOverrides?: React.CSSProperties
    /** 禁用态下追加的样式覆盖（在禁用态时应用在最后） */
    disabledStyle?: React.CSSProperties
}

export interface ComponentThemeResult {
    theme: ComponentTheme
    elevation: string
    style: React.CSSProperties
}
