import { MoveRight } from "lucide-react"
import { motion } from "motion/react"
import type { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./ActionButton.module.css"

interface ActionButtonProps {
    children: ReactNode
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
    className?: string
    href?: string
    target?: string
    rel?: string
    backgroundColor?: string
    borderColor?: string
    color?: string
    hoverBackgroundColor?: string
    hoverColor?: string
}

export default function ActionButton({
    children,
    type = "button",
    className,
    href,
    target,
    rel,
    backgroundColor = "#121212",
    borderColor = "#F5F3E9",
    color = "#F5F3E9",
    hoverBackgroundColor = "#333",
    hoverColor = color,
}: ActionButtonProps) {
    const motionProps = {
        className: `${styles.button} ${className ?? ""}`,
        style: { backgroundColor, borderColor, color },
        whileHover: { backgroundColor: hoverBackgroundColor, color: hoverColor },
        transition: { duration: 0.2, ease: "easeOut" as const },
    }

    if (href) {
        return (
            <motion.a {...motionProps} href={href} target={target} rel={rel}>
                {children} <MoveRight size={20} />
            </motion.a>
        )
    }

    return (
        <motion.button {...motionProps} type={type}>
            {children} <MoveRight size={20} />
        </motion.button>
    )
}
