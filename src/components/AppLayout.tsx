import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SlideDeck, { type palette } from "./SlideDeck";
import SlideIndicator from "./SlideIndicator";
import Navbar from "./NavBar";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [colorPalette, setColorPalette] = useState<palette>({
        background: "#009982",
        onLight: "#121212",
        onDark: "#F5F3E9",
        hover: "#FFC83D",
        button: "#121212",
        buttonHover: "#FFC83D",
        indicator: "#F5F3E9",
        floatingShadow: "0 0 0 0 rgba(0,0,0,0)",
        cardShadow: "0 0 0 0 rgba(0,0,0,0)",
        text: "#F5F3E9",
        textHover: "#ffe39c"
    });

    return (
        <div className={styles.layout}>
            <AnimatePresence>
                {menuOpen && (
                    <motion.button
                        className={styles.backdrop}
                        aria-label="Cerrar menú"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            <Navbar
                colorPalette={colorPalette}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                open={menuOpen}
                setOpen={setMenuOpen}
            />

            <main>
                <SlideDeck
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    setColorPalette={setColorPalette}
                />
            </main>

            <SlideIndicator colorPalette={colorPalette} currentSlide={currentSlide + 1} totalSlides={6} />
        </div >
    );
}