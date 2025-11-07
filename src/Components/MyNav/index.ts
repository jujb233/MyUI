import MyNavRoot from "./MyNav"
import NavActions from "./subcomponents/NavActions"
import NavBrand from "./subcomponents/NavBrand"
import NavContent from "./subcomponents/NavContent"
import NavMenu from "./subcomponents/NavMenu"

type MyNavComponent = {
    Actions: typeof NavActions
    Brand: typeof NavBrand
    Content: typeof NavContent
    Menu: typeof NavMenu
}

const MyNav = MyNavRoot as unknown as MyNavComponent

MyNav.Actions = NavActions
MyNav.Brand = NavBrand
MyNav.Content = NavContent
MyNav.Menu = NavMenu

export { MyNav }
export default MyNav
export * from './types'
