import { NavProvider } from "./NavContext";
import NavContent from "./NavContent";
import NavActions from "./NavActions";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import { useMyNav } from "../Hooks/useMyNav";
import type { MyNavProps } from "./Interface/myNavProps";

function MyNav({
    variant,
    size = "medium",
    children,
    className = "",
    style,
    glass = true,
    shadow = "sm",
    title,
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
