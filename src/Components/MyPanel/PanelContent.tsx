import React from "react"
import { usePanelContext } from "./PanelContext"

const PanelContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const { styles } = usePanelContext()
    return <div className={styles.content}>{children}</div>
}

export default PanelContent
