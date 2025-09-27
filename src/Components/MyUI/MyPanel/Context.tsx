import React, { createContext, useContext } from "react";
import type { MyPanelProps } from "./MyPanel";

export type PanelContextType = Omit<MyPanelProps, "children" | "className">;

const PanelContext = createContext<PanelContextType | undefined>(undefined);

export const usePanelContext = () => {
    const ctx = useContext(PanelContext);
    if (!ctx) throw new Error("usePanelContext must be used within a PanelProvider");
    return ctx;
};

export const PanelProvider: React.FC<{ value: PanelContextType; children: React.ReactNode }> = ({ value, children }) => (
    <PanelContext.Provider value={value}>{children}</PanelContext.Provider>
);
