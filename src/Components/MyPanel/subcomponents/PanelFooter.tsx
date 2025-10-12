import React from "react";
import { useMyPanel } from "../../../Hooks";
import { usePanelContext } from "../MyPanel";

const PanelFooter: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const context = usePanelContext();
    const styles = useMyPanel(context);
    return <div className={styles.footer}>{children}</div>;
};

export default PanelFooter
