import { motion } from "motion/react"
import type { palette } from "./SlideDeck";
import styles from "./SlideIndicator.module.css";
import { MoveDown } from "lucide-react";

export default function SlideIndicator({ currentSlide, totalSlides, colorPalette }: { currentSlide: number, totalSlides: number, colorPalette: palette }) {
    const porcentaje = Math.round(currentSlide * 100 / totalSlides)
    const indicatorCounter = (currentSlide: number, totalSlides: number) =>
        `${String(currentSlide).padStart(2, "0")} / ${String(totalSlides).padStart(2, "0")}`;

    return (
        <div className={styles.slideIndicator}>
            <div className={styles.labels}>
                <motion.span animate={{ color: colorPalette.indicator }} transition={{ duration: 0.6 }} className={styles.text}>{indicatorCounter(currentSlide, totalSlides)}</motion.span>
                <motion.span
                    animate={{ color: colorPalette.indicator, y: [0, -4, 0] }}
                    transition={{
                        color: { duration: 0.6 },
                        y: { duration: 1.2, ease: "easeInOut", repeat: Infinity },
                    }}
                    className={`${styles.text} ${styles.swipe}`}
                >
                    Desliza <MoveDown size={18} aria-hidden="true" />
                </motion.span>
            </div>
            <motion.span initial={{ width: "0%" }} animate={{ width: `${porcentaje}%`, backgroundColor: colorPalette.indicator }} transition={{ ease: "easeOut", backgroundColor: { duration: 0.6 } }} className={styles.bar}></motion.span>
        </div>
    );
}