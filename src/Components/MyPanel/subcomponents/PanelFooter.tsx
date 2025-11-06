import { useMyPanel } from "../../../Hooks";
import { usePanelContext } from "../MyPanel";
import type { Component, JSX } from "solid-js";

const PanelFooter: Component<{ children?: JSX.Element }> = (props) => {
    const context = usePanelContext();
    const styles = useMyPanel(context);
    return <div class={styles.footer}>{props.children}</div>;
};

export default PanelFooter
