import React from "react";
import { type SizeName } from "../../../Options";
import { NavProvider } from "./NavContext";
import NavContent from "./NavContent";
import NavActions from "./NavActions";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import { useMyNav } from "../Hooks/useMyNav";
import type { ThemeableProps, StylableProps, WithTitleProps, WithActionsProps } from "../Interfase";

export type MyNavProps =
    ThemeableProps &
    StylableProps &
    WithTitleProps &
    WithActionsProps & {
        size?: SizeName;
        children?: React.ReactNode;
        menu?: React.ReactNode;
    };

function MyNav({
    variant,
    size = "medium",
    children,
    className = "",
    style,
    glass = true,
    shadow = "sm",
    title: title,
    menu,
    actions,
}: MyNavProps) {
    const { navStyle, navClasses } = useMyNav({ variant, size, glass, shadow, className });

    return (
        <NavProvider value={{ variant, size, glass, shadow }}>
            <nav className={navClasses} style={{ ...navStyle, ...(style || {}) }}>
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
