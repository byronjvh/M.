import { motion } from "motion/react";
import styles from "./Sticker.module.css";

export default function Sticker({ className }: { className?: string }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -8,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                delay: 1.5,
                duration: 0.4,
                ease: [0.3, 1.4, 0.6, 1.6],
            }}

            className={`${styles.sticker} ${className ?? ""}`}>
            Primero la ves. Después pagas.
        </motion.div>
    );
}