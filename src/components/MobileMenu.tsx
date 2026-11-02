import { motion } from "motion/react";
import type { palette } from "./SlideDeck";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
    links: { name: string; url: string }[];
    open: boolean;
    setCurrentSlide: Function;
    colorPalette: palette;
}

export default function MobileMenu({ links, open, setCurrentSlide, colorPalette }: MobileMenuProps) {

    return (
        <motion.nav
            className={styles.mobileNav}
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
            <button className={styles.mobileLogoLink} onClick={() => setCurrentSlide(0)} >
                <span
                    className={styles.logo}
                    role="img"
                    aria-label="M.ai"
                    style={{ backgroundColor: colorPalette.text }}
                />
            </button>
            <div className={styles.mobileLinksWrapper}>
                {links.map((el, i) => (
                    <motion.button
                        key={el.name}
                        onClick={() => setCurrentSlide(i + 1)}
                        className={`${styles.mobileNavLink} ${el.name === "Cotizar" ? styles.mobileNavButton : ""}`}
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