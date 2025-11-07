import MyPanelRoot from "./MyPanel";
import { PanelBackground } from "./subcomponents/PanelBackground";
import PanelContent from "./subcomponents/PanelContent";
import PanelFooter from "./subcomponents/PanelFooter";
import PanelHeader from "./subcomponents/PanelHeader";
import type { Component } from "solid-js";
import type { IMyPanelProps } from "./types";

type MyPanelComponent = Component<IMyPanelProps> & {
    Background: typeof PanelBackground;
    Content: typeof PanelContent;
    Footer: typeof PanelFooter;
    Header: typeof PanelHeader;
};

const MyPanel: MyPanelComponent = Object.assign(MyPanelRoot, {
    Background: PanelBackground,
    Content: PanelContent,
    Footer: PanelFooter,
    Header: PanelHeader,
});

export { MyPanel };
export default MyPanel;
export * from "./types";
