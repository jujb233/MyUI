import React from "react";
import { useCardContext } from "./CardContext";
import { getCardImageClasses } from "./cardUtils";

export const CardImage: React.FC<{ src: string; alt?: string }> = ({ src, alt = "" }) => {
    const { imagePosition, sizeConfig } = useCardContext();
    const imageClasses = getCardImageClasses(imagePosition, sizeConfig.borderRadius);

    if (imagePosition === "background") {
        return <div className={imageClasses} style={{ backgroundImage: `url(${src})` }} />;
    }
    return <img src={src} alt={alt} className={imageClasses} />;
};

CardImage.displayName = "CardImage";
