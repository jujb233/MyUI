import { NavProvider } from "./NavContext"
import NavContent from "./NavContent"
import NavActions from "./NavActions"
import NavBrand from "./NavBrand"
import NavMenu from "./NavMenu"
import { useMyNav } from "../../Hooks"
import type { MyNavProps } from "./myNavProps"
import { ErrorBoundary } from "../../Utils"

function MyNav({
    variant,
    size = "medium",
    children,
    className = "",
    glass = true,
    shadow = "sm",
    title,
    menu,
    actions,
    animation,
    interactionEnabled,
    interaction,
}: MyNavProps) {
    const classes = useMyNav({ variant, size, glass, shadow, className, animation, interactionEnabled, interaction })

    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-4">Nav component failed to render.</div>}>
            <NavProvider value={{ classes }}>
                <nav className={classes.nav}>
                    {title && <NavBrand>{title}</NavBrand>}
                    <NavContent>
                        {menu && <NavMenu>{menu}</NavMenu>}
                        {children}
                    </NavContent>
                    {actions && <NavActions>{actions}</NavActions>}
                </nav>
            </NavProvider>
        </ErrorBoundary>
    )
}

export default MyNav
