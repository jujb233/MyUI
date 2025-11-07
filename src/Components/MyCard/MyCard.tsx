import { ErrorCheck } from "../../Utils"
import { CardProvider } from "./CardContext"
import type { IMyCardProps, IMyCardContext } from "./types"
import { useMyCard } from "../../Hooks"

// Root MyCard component subcomponents are attached in index.ts
const MyCard = (props: IMyCardProps) => {
    const { slots, ...styles } = useMyCard(props)

    const contextValue: IMyCardContext = {
        ...props,
        ...styles,
        slots,
    }

    return (
        <ErrorCheck fallback={<div class="border border-red-500 p-4">Card component failed to render.</div>}>
            <CardProvider value={contextValue}>
                {props.children}
            </CardProvider>
        </ErrorCheck>
    )
}

export default MyCard
