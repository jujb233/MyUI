import type { JSX } from "solid-js"
import type {
    ThemeProps,
    StyleProps,
    Disableable,
    WithIcon,
    WithOptions,
    HtmlInputType,
    Focusable,
} from "../../Interfaces"

export interface IMyInputProps extends
    ThemeProps,
    StyleProps,
    Disableable,
    Focusable,
    WithIcon,
    WithOptions,
    HtmlInputType {
    value?: string
    placeholder?: string
    onInput?: (e: Event) => void
}

export interface IMyInputContext extends Omit<IMyInputProps, 'onInput'> {
    slots: {
        icon: string
        options: string
    }
}
