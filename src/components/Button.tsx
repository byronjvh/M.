import { MoveRight } from "lucide-react";
import { motion } from "motion/react"
import type React from "react";


interface ButtonProps {
    children?: React.ReactNode,
    className?: string,
    href?: string,
    target?: React.HTMLAttributeAnchorTarget,
    rel?: string,
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
}

export default function Button({ children = "Quiero mi web", className, href, target, rel, type = "button" }: ButtonProps) {
    const motionProps = {
        whileHover: { y: -8, scale: 1.02 },
        whileTap: { y: 0, scale: 1 },
        transition: { type: "spring" as const, stiffness: 300, damping: 15 },
        className: `button ${className ?? ""}`,
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