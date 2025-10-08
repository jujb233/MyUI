import NavRoot from "./MyNav"
import NavBrand from "./NavBrand"
import NavContent from "./NavContent"
import NavMenu from "./NavMenu"
import NavActions from "./NavActions"
import * as NavContext from "./NavContext"

export const MyNav = Object.assign(NavRoot, {
    Brand: NavBrand,
    Content: NavContent,
    Menu: NavMenu,
    Actions: NavActions,
})

export default MyNav

export { NavBrand, NavContent, NavMenu, NavActions }
export { NavContext }
export type { MyNavProps } from './Interface/myNavProps'
