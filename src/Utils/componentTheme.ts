import type { JSX } from 'solid-js'
// import { type ElevationKind } from '../Options' // 已移除无效导入
import { type ShadowName } from '../types'
import type { ComponentTheme } from '../Options/Themes/themeBuilder'
import { type ThemeResolverParams } from '../Options/Themes/themeResolver'

export interface ThemeOptions extends ThemeResolverParams {
    glass?: boolean
    shadow?: ShadowName
    disabled?: boolean
    // elevationKind?: ElevationKind // 已移除无效类型
    /** 额外样式覆盖（始终应用在最后） */
    styleOverrides?: JSX.CSSProperties
    /** 禁用态下追加的样式覆盖（在禁用态时应用在最后） */
    disabledStyle?: JSX.CSSProperties
}

export interface ComponentThemeResult {
    theme: ComponentTheme
    elevation: string
    style: JSX.CSSProperties
}
