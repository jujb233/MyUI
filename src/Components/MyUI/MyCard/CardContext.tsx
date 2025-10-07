import { createContext, useContext } from "react"
import type { UseMyCardProps } from "../Hooks/useMyCard"
import type { SizeName } from "../../../Options"

export type CardContextType = UseMyCardProps & {
    size: SizeName
    isHorizontal: boolean
    imagePosition: "top" | "left" | "right" | "background"
    sizeConfig: {
        padding: string
        spacing: string
        titleSize: string
        contentSize: string
        borderRadius: string
        minHeight: string
    }
}

export const CardContext = createContext<CardContextType | null>(null)

export const useCardContext = () => {
    const context = useContext(CardContext)
    if (!context) {
        throw new Error("useCardContext必须在MyCard组件中使用")
    }
    return context
}
