import React from "react"
import { usePanelContext } from "./PanelContext"

const PanelFooter: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const { styles } = usePanelContext()
    return <div className={styles.footer}>{children}</div>
}

export default PanelFooter
