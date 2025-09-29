import React, { createContext, useContext } from "react";
import type { MyButtonProps } from "./Interface/myButtonProps";

export type ButtonContextType = Omit<MyButtonProps, "children" | "className" | "onClick">;

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

export const useButtonContext = () => {
    const ctx = useContext(ButtonContext);
    if (!ctx) throw new Error("useButtonContext must be used within a ButtonProvider");
    return ctx;
};

export const ButtonProvider: React.FC<{ value: ButtonContextType; children: React.ReactNode }> = ({ value, children }) => (
    <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
);
