import React from "react"


export type MyButtonProps = {
    htmlType?: "button" | "submit" | "reset"
    styleType?: "primary" | "secondary" | "danger" | "normal"
    disabled?: boolean
    onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"]
    children?: React.ReactNode
    className?: string
}


const colorMap = {
    primary: {
        bg: "#4285F4",
        hover: "#357AE8",
        text: "#fff"
    },
    secondary: {
        bg: "#B4D2F7",
        hover: "#A0C4E8",
        text: "#1A2A3A"
    },
    danger: {
        bg: "#F36C6C",
        hover: "#E35B5B",
        text: "#fff"
    },
    normal: {
        bg: "#F5F5F5",
        hover: "#E0E0E0",
        text: "#333"
    }
}


function MyButton({ htmlType = "button", styleType = "normal", disabled, onClick, children, className = "" }: MyButtonProps) {
    const color = colorMap[styleType || "normal"]
    return (
        <button
            type={htmlType}
            disabled={disabled}
            onClick={onClick}
            className={`
                px-4 py-1.5 rounded-lg font-medium shadow-sm transition-colors duration-150
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${disabled ? "opacity-60 cursor-not-allowed" : ""}
                ${className}
            `}
            style={{
                background: disabled ? "#E0E0E0" : color.bg,
                color: disabled ? "#A0A0A0" : color.text,
                border: 'none',
            }}
            onMouseOver={e => {
                if (!disabled) e.currentTarget.style.background = color.hover
            }}
            onMouseOut={e => {
                if (!disabled) e.currentTarget.style.background = color.bg
            }}
        >
            {children}
        </button>
    )
}

export default MyButton