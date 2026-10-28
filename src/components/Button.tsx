import { MoveRight } from "lucide-react";
import { motion } from "motion/react"
import type React from "react";


interface ButtonProps {
    children?: React.ReactNode,
    className?: string
}

export default function Button({ children = "Quiero mi web", className }: ButtonProps) {
    return (
        <motion.button whileHover={{ y: -8, scale: 1.02 }} whileTap={{ y: 0, scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className={`button ${className}`}>{children} <MoveRight size={20} /></motion.button>
    );
}