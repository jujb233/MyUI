import React from "react";
import clsx from "clsx";
import { useCardContext } from "./CardContext";

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { sizeConfig } = useCardContext();
    return <div className={clsx('text-[var(--text)]/85', sizeConfig.contentSize, className)}>{children}</div>;
};

CardContent.displayName = "CardContent";
