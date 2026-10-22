import { motion } from "motion/react"
import type { palette } from "./SlideDeck";

export default function SlideIndicator({ currentSlide, totalSlides, colorPalette }: { currentSlide: number, totalSlides: number, colorPalette: palette }) {
    const porcentaje = Math.round(currentSlide * 100 / totalSlides)
    const indicatorCounter = (currentSlide: number, totalSlides: number) =>
        `${String(currentSlide).padStart(2, "0")} / ${String(totalSlides).padStart(2, "0")}`;

    return (
        <div className="slide-indicator">
            <motion.span animate={{ color: colorPalette.indicator }} transition={{ duration: 0.6 }} className="slide-indicator-text">{indicatorCounter(currentSlide, totalSlides)}</motion.span>
            <motion.span initial={{ width: "0%" }} animate={{ width: `${porcentaje}%`, backgroundColor: colorPalette.indicator }} transition={{ ease: "easeOut", backgroundColor: { duration: 0.6 } }} className="slide-indicator-bar"></motion.span>
        </div>
    );
}