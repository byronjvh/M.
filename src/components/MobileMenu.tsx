import { motion } from "motion/react";
import type { palette } from "./SlideDeck";

interface MobileMenuProps {
    links: { name: string; url: string }[];
    open: boolean;
    setCurrentSlide: Function;
    colorPalette: palette;
}

export default function MobileMenu({ links, open, setCurrentSlide, colorPalette }: MobileMenuProps) {

    return (
        <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{
                opacity: open ? 1 : 0,
                y: open ? 0 : -8,
            }}
            transition={{
                duration: 0.2,
                ease: "easeOut",
            }}
        >
            <button className="mobile-logo-link" onClick={() => setCurrentSlide(0)} >
                <span
                    className="logo"
                    role="img"
                    aria-label="M.ai"
                    style={{ backgroundColor: colorPalette.text }}
                />
            </button>
            <div className="mobile-links-wrapper">
                {links.map((el, i) => (
                    <motion.button
                        key={el.name}
                        onClick={() => setCurrentSlide(i + 1)}
                        className={`mobile-nav-link ${el.name === "Cotizar" ? "mobile-nav-button" : ""}`}
                        animate={el.name === "Cotizar"
                            ? { color: colorPalette.onLight, backgroundColor: colorPalette.button, borderColor: colorPalette.button }
                            : { color: colorPalette.text }}
                        whileHover={el.name === "Cotizar"
                            ? { backgroundColor: colorPalette.buttonHover, borderColor: colorPalette.buttonHover }
                            : { color: colorPalette.textHover }}
                    >
                        {el.name}
                    </motion.button>
                ))}
            </div>
        </motion.nav>
    )
}