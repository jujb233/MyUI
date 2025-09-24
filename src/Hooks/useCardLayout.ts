export type UseCardLayoutProps = {
    direction?: "vertical" | "horizontal";
    imagePosition?: "top" | "left" | "right" | "background";
    hasImage?: boolean;
};

export function useCardLayout(props: UseCardLayoutProps) {
    const {
        direction = "vertical",
        imagePosition = "top",
        hasImage = false,
    } = props;

    const isHorizontal = direction === "horizontal" && hasImage && imagePosition !== "top";
    return { isHorizontal, imagePosition };
}
