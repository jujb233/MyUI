import clsx from "clsx"


export const getCardImageClasses = (
    position: "top" | "left" | "right" | "background",
    borderRadius: string | undefined
) => {
    if (position === "background") {
        return "absolute inset-0 bg-cover bg-center opacity-10"
    }

    return clsx(
        "object-cover",
        position === "top" && "w-full h-48",
        position === "left" && "w-32 h-full",
        position === "right" && "w-32 h-full",
        borderRadius
    )
}
