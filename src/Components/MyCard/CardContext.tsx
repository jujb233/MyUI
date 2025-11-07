import { createContext, useContext, type Component } from "solid-js"
import type { IMyCardContext } from "./types"

const MyCardContext = createContext<IMyCardContext | null>(null)

export const CardProvider: Component<{ value: IMyCardContext; children: any }> = (props) => {
    return (
        <MyCardContext.Provider value={props.value}>
            {props.children}
        </MyCardContext.Provider>
    )
}

export const useCardContext = () => {
    const context = useContext(MyCardContext)
    if (!context) {
        try {
            if ((import.meta as any)?.env?.DEV) {
                console.warn("[MyUI] useCardContext() called outside of <MyCard> provider. Fallback styles will be used.")
            }
        } catch { /* no-op */ }

        const fallback = {
            variant: undefined,
            size: 'medium',
            glass: true,
            shadow: 'md',
            className: '',
            id: undefined,
            bordered: true,
            direction: 'vertical',
            clickable: false,
            hover: false,
            onClick: undefined as any,
            title: undefined,
            footer: undefined,
            backgroundImage: '',
            imagePosition: 'top',
            isHorizontal: false,
            sizeConfig: {
                spacing: 'space-y-3',
                titleSize: 'text-xl',
                contentSize: 'text-base',
                borderRadius: 'rounded-xl',
                minHeight: 'min-h-40',
            },
            slots: {
                image: '',
                header: '',
                title: '',
                content: '',
                footer: '',
                actions: '',
                tagsContainer: '',
                tag: '',
            },
        } as unknown as IMyCardContext

        return fallback
    }
    return context
}
