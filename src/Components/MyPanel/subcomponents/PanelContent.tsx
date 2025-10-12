import React from "react";
import { useMyPanel } from "../../../Hooks";
import { usePanelContext } from "../MyPanel";

const PanelContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const context = usePanelContext();
    const styles = useMyPanel(context);
    return <div className={styles.content}>{children}</div>;
};

export default PanelContent
