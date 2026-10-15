import { motion } from "motion/react";

export default function MobileMenu({ links, open }: any) {
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
            <a href="/">
                <img
                    className="logo"
                    src="/logo.svg"
                    alt="logo"
                />
            </a>
            <div className="mobile-links-wrapper">
                {links.map((el: any) => (
                    <a key={el.name} className={`mobile-nav-link ${el.name === "Cotizar" ? "mobile-nav-button" : ""}`} href={el.url}>{el.name}</a>
                ))}
            </div>
        </motion.nav>
    )
}