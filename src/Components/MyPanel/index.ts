import MyPanelRoot from "./MyPanel";
import { PanelBackground } from "./subcomponents/PanelBackground";
import PanelContent from "./subcomponents/PanelContent";
import PanelFooter from "./subcomponents/PanelFooter";
import PanelHeader from "./subcomponents/PanelHeader";
import type { ICompoundComponent } from "../../Interfaces";
import type { IMyPanelProps } from "./types";

type MyPanelComponent = ICompoundComponent<IMyPanelProps> & {
    Background: typeof PanelBackground;
    Content: typeof PanelContent;
    Footer: typeof PanelFooter;
    Header: typeof PanelHeader;
};

const MyPanel = MyPanelRoot as MyPanelComponent;

MyPanel.Background = PanelBackground;
MyPanel.Content = PanelContent;
MyPanel.Footer = PanelFooter;
MyPanel.Header = PanelHeader;

export { MyPanel };
export default MyPanel;
export * from './types';
