import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import MenuCircle from "./MenuCircle";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
    currentSlide: number;
}

const NAVBAR_STATE = {
    DEFAULT: "default",
    CIRCLE: "circle",
    OPEN: "open",
} as const;

type NavbarState = typeof NAVBAR_STATE[keyof typeof NAVBAR_STATE];

export default function Navbar({ currentSlide }: NavbarProps) {
    const isMenuCircle = currentSlide > 0;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar-container" style={{ cursor: isMenuCircle && !menuOpen ? "pointer" : "" }}>


            <motion.header
                initial={{ borderRadius: "20px" }}
                animate={{
                    borderRadius: isMenuCircle ? "50px 0 50px 50px" : "0px",
                    width: isMenuCircle
                        ? menuOpen ? "200px" : "90px"
                        : "",
                    height: isMenuCircle
                        ? menuOpen ? "320px" : "90px"
                        : "",
                    backgroundColor: isMenuCircle ? "#121212" : "rgba(0,0,0,0)",
                    top: isMenuCircle ? 24 : 0,
                    right: isMenuCircle ? 24 : 0,
                }}
                transition={{
                    borderRadius: {
                        duration: 0.4,
                        ease: "easeOut",
                    },
                    width: {
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                    },
                    height: {
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                    },
                    top: {
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                    },
                    right: {
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                    },
                }}
                className="navbar"
                onClick={() => isMenuCircle && setMenuOpen(prev => !prev)}
            >

                <motion.div
                    animate={{
                        height: isMenuCircle ? 0 : "100%",
                        width: isMenuCircle ? 0 : "100%",
                        opacity: isMenuCircle ? 0 : 1,
                        right: isMenuCircle ? "100%" : ""
                    }}
                    className={`header-content ${isMenuCircle ? "menu-circle" : ""}`}
                >
                    <a href="/">
                        <img
                            className="logo"
                            src="/logo.svg"
                            alt="logo"
                        />
                    </a>

                    <motion.nav
                        className="nav"
                        animate={{
                            flexDirection: isMenuCircle && menuOpen ? "column" : "row",
                            opacity: isMenuCircle ? (menuOpen ? 1 : 0) : 1,
                        }}
                        transition={{
                            opacity: { duration: 0.2 },
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
                    </motion.nav>
                </motion.div>
                <AnimatePresence>
                    {
                        isMenuCircle && (
                            <>
                                <motion.span
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <MenuCircle />
                                </motion.span>
                                <button className="menu-icon">
                                    <ArrowUpRight size={28} />
                                </button>
                            </>
                        )
                    }
                </AnimatePresence>


            </motion.header>
        </div>
    );
}