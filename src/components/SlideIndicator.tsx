import { motion } from "motion/react"
import type { palette } from "./SlideDeck";

export default function SlideIndicator({ currentSlide, totalSlides, colorPalette }: { currentSlide: number, totalSlides: number, colorPalette: palette }) {
    const porcentaje = Math.round(currentSlide * 100 / totalSlides)

    return (
        <div className="slide-indicator">
            <motion.span animate={{ color: colorPalette.indicator }} transition={{ duration: 0.6 }} className="slide-indicator-text">{currentSlide} / {totalSlides}</motion.span>
            <motion.span initial={{ width: "0%" }} animate={{ width: `${porcentaje}%`, backgroundColor: colorPalette.indicator }} transition={{ ease: "easeOut", backgroundColor: { duration: 0.6 } }} className="slide-indicator-bar"></motion.span>
        </div>
    );
}