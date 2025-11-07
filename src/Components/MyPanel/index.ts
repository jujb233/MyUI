import MyPanelRoot from "./MyPanel"
import { PanelBackground } from "./subcomponents/PanelBackground"
import PanelContent from "./subcomponents/PanelContent"
import PanelFooter from "./subcomponents/PanelFooter"
import PanelHeader from "./subcomponents/PanelHeader"

type MyPanelComponent = {
    Background: typeof PanelBackground
    Content: typeof PanelContent
    Footer: typeof PanelFooter
    Header: typeof PanelHeader
}

const MyPanel = MyPanelRoot as unknown as MyPanelComponent

MyPanel.Background = PanelBackground
MyPanel.Content = PanelContent
MyPanel.Footer = PanelFooter
MyPanel.Header = PanelHeader

export { MyPanel }
export default MyPanel
export * from './types'
