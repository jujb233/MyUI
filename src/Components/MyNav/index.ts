import MyNavRoot from "./MyNav";
import NavOptions from "./subcomponents/NavOptions";
import NavBrand from "./subcomponents/NavBrand";
import NavContent from "./subcomponents/NavContent";
import NavMenu from "./subcomponents/NavMenu";
import type { Component } from "solid-js";
import type { IMyNavProps } from "./types";

type MyNavComponent = Component<IMyNavProps> & {
    Options: typeof NavOptions;
    Brand: typeof NavBrand;
    Content: typeof NavContent;
    Menu: typeof NavMenu;
};

const MyNav: MyNavComponent = Object.assign(MyNavRoot, {
    Options: NavOptions,
    Brand: NavBrand,
    Content: NavContent,
    Menu: NavMenu,
});

export { MyNav };
export default MyNav;
export * from "./types";
