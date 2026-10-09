import { useState } from "react";
import { motion } from "motion/react";

interface NavbarProps {
    currentSlide: number;
}

export default function Navbar({ currentSlide }: NavbarProps) {
    const isMenuCircle = currentSlide > 0;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.header
            className={`layout-header ${isMenuCircle ? "menu-circle-mode" : ""}`}
            animate={{
                width: isMenuCircle ? 90 : "100%",
                height: isMenuCircle ? 90 : 80,
                top: isMenuCircle ? 24 : 0,
                right: isMenuCircle ? 24 : 0,
                borderRadius: isMenuCircle ? "50%" : "0%",
                backgroundColor: isMenuCircle
                    ? "#121212"
                    : "rgba(0, 0, 0, 0)",
            }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
        >

            {/* HEADER DEFAULT */}
            <motion.div
                className="header-content"
                initial={false}
                animate={{
                    opacity: isMenuCircle ? 0 : 1,
                    scale: isMenuCircle ? 0 : 1,
                }}
                transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <a href="/">
                    <img
                        className="logo"
                        src="/logo.svg"
                        alt="logo"
                    />
                </a>

                <nav className="nav">
                    <a className="nav-link" href="/#services">
                        Cómo funciona
                    </a>

                    <a className="nav-link" href="/#portfolio">
                        Planes
                    </a>

                    <a className="nav-link" href="/#contact">
                        Proyectos
                    </a>

                    <a className="nav-link nav-button" href="/#contact">
                        Cotizar
                    </a>
                </nav>
            </motion.div>


            {/* HEADER DEL MENÚ */}
            {isMenuCircle && (
                <motion.div
                    className="header-content"
                    initial={{
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        opacity: menuOpen ? 1 : 0,
                        scale: menuOpen ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <nav
                        className="nav"
                        style={{
                            flexDirection: "column",
                        }}
                    >
                        <a className="nav-link" href="/#services">
                            Cómo funciona
                        </a>

                        <a className="nav-link" href="/#portfolio">
                            Planes
                        </a>

                        <a className="nav-link" href="/#contact">
                            Proyectos
                        </a>

                        <a className="nav-link nav-button" href="/#contact">
                            Cotizar
                        </a>
                    </nav>
                </motion.div>
            )}


            {/* BOTÓN CIRCULAR */}
            {isMenuCircle && !menuOpen && (
                <button
                    className="menu-circle-button"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Abrir menú"
                >
                    <span>+</span>
                </button>
            )}

        </motion.header>
    );
}