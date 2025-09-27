import React from "react";
import {
    type ComponentVariant,
    type SizeName,
    type ShadowName,
} from "../../../Options";
import { NavProvider } from "./NavContext";
import NavContent from "./NavContent";
import NavActions from "./NavActions";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import { useMyNav } from "../Hooks/useMyNav";

export type MyNavProps = {
    variant?: ComponentVariant;
    size?: SizeName;
    children?: React.ReactNode;
    className?: string;
    glass?: boolean;
    shadow?: ShadowName;
    title?: React.ReactNode;
    menu?: React.ReactNode;
    actions?: React.ReactNode;
};

function MyNav({
    variant,
    size = "medium",
    children,
    className = "",
    glass = true,
    shadow = "sm",
    title: title,
    menu,
    actions,
}: MyNavProps) {
    const { navStyle, navClasses } = useMyNav({ variant, size, glass, shadow, className });

    return (
        <NavProvider value={{ variant, size, glass, shadow }}>
            <nav
                className={navClasses}
                style={navStyle}
            >
                {title && <NavBrand>{title}</NavBrand>}
                <NavContent>
                    {menu && <NavMenu>{menu}</NavMenu>}
                    {children}
                </NavContent>
                {actions && <NavActions>{actions}</NavActions>}
            </nav>
        </NavProvider>
    );
}

export default MyNav;
