import { motion } from "motion/react"

export default function SlideIndicator({ currentSlide, totalSlides }: { currentSlide: number, totalSlides: number }) {
    const porcentaje = Math.round(currentSlide * 100 / totalSlides)

    return (
        <div className="slide-indicator">
            <span className="slide-indicator-text">{currentSlide} / {totalSlides}</span>
            <motion.span initial={{ width: "0%" }} animate={{ width: `${porcentaje}%` }} transition={{ ease: "easeOut" }} className="slide-indicator-bar"></motion.span>
        </div>
    );
}