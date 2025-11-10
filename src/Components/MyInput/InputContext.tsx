import { createContext, useContext } from "solid-js"
import type { IMyInputContext } from "./types"

const MyInputContext = createContext<IMyInputContext | null>(null)

export const InputProvider = MyInputContext.Provider
export const useInputContext = () => {
    const context = useContext(MyInputContext)
    if (!context) {
        try {
            if ((import.meta as any)?.env?.DEV) {
                console.warn("[MyUI] useInputContext() called outside of <MyInput> provider. Fallback styles will be used.")
            }
        } catch { /* no-op */ }
        const fallback: IMyInputContext = {
            slots: { icon: '', options: '' }
        } as IMyInputContext
        return fallback
    }
    return context
}
