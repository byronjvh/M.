import { motion } from "motion/react";

export default function MobileMenu({ links, open, setCurrentSlide, colorPalette }: any) {

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
                <img
                    className="logo"
                    src="/logo.svg"
                    alt="logo"
                />
            </button>
            <div className="mobile-links-wrapper">
                {links.map((el: any, i: number) => (
                    <motion.button animate={{ color: colorPalette.text }} key={el.name} onClick={() => setCurrentSlide(i + 1)} className={`mobile-nav-link ${el.name === "Cotizar" ? "mobile-nav-button" : ""}`} >{el.name}</motion.button>
                ))}
            </div>
        </motion.nav>
    )
}