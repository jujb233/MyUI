import { createContext, useContext } from "solid-js"
import type { IMyButtonContext } from "./types"

const MyButtonContext = createContext<IMyButtonContext | null>(null)

export const ButtonProvider = MyButtonContext.Provider
export const useButtonContext = () => {
    const context = useContext(MyButtonContext)
    if (!context) {
        try {
            if ((import.meta as any)?.env?.DEV) {
                console.warn("[MyUI] useButtonContext() called outside of <MyButton> provider. Fallback styles will be used.")
            }
        } catch { /* no-op */ }
        // fallback，保证 slots 不报错
        const fallback: IMyButtonContext = {
            slots: {
                icon: '',
                content: '',
                options: ''
            }
        } as IMyButtonContext
        return fallback
    }
    return context
}
