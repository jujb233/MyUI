import { createContext, useContext } from "solid-js"
import type { IMyPanelContext } from "./types"

const MyPanelContext = createContext<IMyPanelContext | null>(null)

export const PanelProvider = MyPanelContext.Provider
export const usePanelContext = () => {
    const context = useContext(MyPanelContext)
    if (!context) {
        try {
            if ((import.meta as any)?.env?.DEV) {
                console.warn("[MyUI] usePanelContext() called outside of <MyPanel> provider. Fallback styles will be used.")
            }
        } catch { /* no-op */ }
        // fallback，保证 slots 不报错
        const fallback: IMyPanelContext = {
            backgroundImage: '',
            slots: {
                background: '',
                header: '',
                content: '',
                footer: ''
            }
        }
        return fallback
    }
    return context
}
