import MyNavRoot from "./MyNav";
import NavOptions from "./subcomponents/NavOptions";
import NavTitle from "./subcomponents/NavTitle";
import NavContent from "./subcomponents/NavContent";
import NavMenu from "./subcomponents/NavMenu";
import type { Component } from "solid-js";
import type { IMyNavProps } from "./types";

type MyNavComponent = Component<IMyNavProps> & {
    Options: typeof NavOptions;
    Title: typeof NavTitle;
    Content: typeof NavContent;
    Menu: typeof NavMenu;
};

const MyNav: MyNavComponent = Object.assign(MyNavRoot, {
    Options: NavOptions,
    Title: NavTitle,
    Content: NavContent,
    Menu: NavMenu,
});

export { MyNav };
export default MyNav;
export * from "./types";
