import MyPanelRoot from "./MyPanel"
import { PanelBackground } from "./subcomponents/PanelBackground"
import PanelContent from "./subcomponents/PanelContent"
import PanelFooter from "./subcomponents/PanelFooter"
import PanelTitle from "./subcomponents/PanelTitle"
import type { Component } from "solid-js"
import type { IMyPanelProps } from "./types"

type MyPanelComponent = Component<IMyPanelProps> & {
    Background: typeof PanelBackground
    Content: typeof PanelContent
    Footer: typeof PanelFooter
    Header: typeof PanelTitle
}

const MyPanel: MyPanelComponent = Object.assign(MyPanelRoot, {
    Background: PanelBackground,
    Content: PanelContent,
    Footer: PanelFooter,
    Header: PanelTitle,
})

export { MyPanel }
export default MyPanel
export * from "./types"
