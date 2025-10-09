import PanelRoot from "./MyPanel"
import PanelHeader from "./PanelHeader"
import PanelContent from "./PanelContent"
import PanelFooter from "./PanelFooter"
import * as PanelContext from "./PanelContext"

export const MyPanel = Object.assign(PanelRoot, {
    Header: PanelHeader,
    Content: PanelContent,
    Footer: PanelFooter,
})

export default MyPanel

export { PanelHeader, PanelContent, PanelFooter }
export { PanelContext }
export type { MyPanelProps } from './myPanelProps'
