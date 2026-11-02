import Poop from "./icons/Poop";
import { motion } from "motion/react";
import styles from "./AnimatedCard.module.css";

export default function AnimatedCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotate: -5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: [.2, .6, 0.45, 1.25],
            }}
            className={styles.card}>
            <div className={styles.tag}>
                Antes
            </div>
            <div className={styles.cardContent}>
                <header className={styles.header}>
                    <span></span>
                    <span></span>
                    <span></span>
                </header>
                <div>
                    <Poop size={150} />
                </div>
            </div>
        </motion.div>
    );
}