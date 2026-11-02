import { motion } from "motion/react";
import styles from "./AnimatedCard.module.css";
export default function AnimatedCardDark() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotate: 5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 1,
                ease: [.2, .6, 0.45, 1.25],
                delay: 0.3,
            }}
            className={`${styles.card} ${styles.dark}`}
        >
            <div className={styles.tag}>
                Después
            </div>
            <div className={styles.cardContent}>
                <header className={styles.header}>
                    <span></span>
                    <span></span>
                    <span></span>
                </header>
                <div className={styles.body}>
                    <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.6,
                        }}
                        className={styles.title}></motion.span>
                    <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.7,
                        }}
                        className={styles.title2}></motion.span>
                    <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.8,
                        }}
                        className={styles.description}></motion.span>
                    <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.9,
                        }}
                        className={styles.description2}></motion.span>
                    <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 1,
                        }}
                        className={styles.button}></motion.span>
                </div>
            </div>
        </motion.div >
    );
}