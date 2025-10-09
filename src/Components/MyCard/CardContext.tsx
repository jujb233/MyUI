import { createContext, useContext } from "react"
import type { MyCardProps } from "./myCardProps"

export type CardContextType = MyCardProps & {
    isHorizontal: boolean
    imagePosition: "top" | "left" | "right" | "background"
    sizeConfig: {
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
