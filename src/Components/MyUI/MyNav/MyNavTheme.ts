import { type ComponentTheme } from "../../Options";

export const MyNavTheme: ComponentTheme = {
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
};
