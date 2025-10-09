import React from "react"

const PanelContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="flex-1">{children}</div>
)

export default PanelContent
