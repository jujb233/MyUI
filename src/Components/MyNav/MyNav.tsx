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
    const { navClasses } = useMyNav({ variant, size, glass, shadow, className, animation, interactionEnabled, interaction })
    const classes = navClasses

    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-4">Nav component failed to render.</div>}>
            <NavProvider value={{ variant, size, glass, shadow }}>
                <nav className={classes}>
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
