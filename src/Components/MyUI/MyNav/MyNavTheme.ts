import type { SizeName } from "../../../Options"

type NavVariant = 'solid' | 'soft' | 'subtle' | 'text'

interface MyNavTheme {
    defaultProps: {
        size: SizeName
        variant: NavVariant
    },
    styles: {
        root: {
            base: string
            sizes: Record<SizeName, string>
        }
    }
}

export const MyNavTheme: MyNavTheme = {
    defaultProps: {
        size: 'medium',
        variant: 'solid',
    },
    styles: {
        root: {
            base: "flex items-center px-4",
            sizes: {
                small: "h-10",
                medium: "h-12",
                large: "h-14",
            },
        },
    },
}
