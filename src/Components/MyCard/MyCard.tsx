import { ErrorBoundary } from "../../Utils";
import { CardProvider } from "./CardContext";
import type { IMyCardProps } from "./types";

// Root MyCard component; subcomponents are attached in index.ts
const MyCard = (props: IMyCardProps) => {
    return (
        <ErrorBoundary fallback={<div class="border border-red-500 p-4">Card component failed to render.</div>}>
            <CardProvider {...props}>
                {props.children}
            </CardProvider>
        </ErrorBoundary>
    );
}

export default MyCard;
