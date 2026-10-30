import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import MenuCircle from "./MenuCircle";
import { ArrowUpRight, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import type { palette } from "./SlideDeck";

interface NavbarProps {
    currentSlide: number;
    colorPalette: palette;
    setCurrentSlide: Function;
}

const NAVBAR_STATE = {
    DEFAULT: "default",
    CIRCLE: "circle",
} as const;

type NavbarState = typeof NAVBAR_STATE[keyof typeof NAVBAR_STATE];

const LINKS = [
    {
        name: "El problema",
        url: "/"
    },
    {
        name: "Cómo funciona",
        url: "/"
    },
    {
        name: "Planes",
        url: "/"
    },
    {
        name: "Proyectos",
        url: "/"
    },
    {
        name: "Cotizar",
        url: "/"
    }
]

export default function Navbar({ currentSlide, colorPalette, setCurrentSlide }: NavbarProps) {
    const [navbarState, setNavbarState] = useState<NavbarState>(NAVBAR_STATE.DEFAULT)
    const [open, setOpen] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)")
        const updateIsMobile = () => setIsMobile(mediaQuery.matches)

        updateIsMobile()
        mediaQuery.addEventListener("change", updateIsMobile)

        return () => mediaQuery.removeEventListener("change", updateIsMobile)
    }, [])

    useEffect(() => {
        if (currentSlide > 0 || isMobile) return setNavbarState(NAVBAR_STATE.CIRCLE)
        else {
            setNavbarState(NAVBAR_STATE.DEFAULT)
            setOpen(false)
        }
    }, [currentSlide, isMobile])

    const toggleMenu = () => {
        if (navbarState === NAVBAR_STATE.DEFAULT) return
        if (open) setOpen(false)
        else setOpen(true)
    }

    const handleMobileMenuSelect = (index: number) => {
        setCurrentSlide(index)
        setOpen(false)
    }

    const isCircleMenu = navbarState === NAVBAR_STATE.CIRCLE

    return (
        <div className="navbar-container">


            <motion.header
                className="navbar"
                style={{ alignItems: isCircleMenu ? "" : "center" }}
                animate={{
                    backgroundColor: isCircleMenu ? colorPalette.onLight : "rgba(0,0,0,0)",
                    height: !isCircleMenu ? 80 : open ? 314 : 90,
                    width: !isCircleMenu ? "calc(100% - 0px)" : open ? 200 : 90,
                    x: !isCircleMenu ? "16px" : 0,
                    borderRadius: isCircleMenu
                        ? open
                            ? "10px 0px 10px 10px"
                            : "45px 0px 45px 45px"
                        : "2px 0px 2px 2px",

                    boxShadow: !isCircleMenu ? "0px 0px 0px 0px rgba(0,0,0,0)" : open ? colorPalette.cardShadow : colorPalette.floatingShadow
                }}
                transition={{
                    width: {
                        type: "spring",
                        stiffness: 220,
                        damping: 26,
                    },
                    height: {
                    },
                    borderRadius: {
                        duration: 0.25,
                        ease: "easeOut",
                    },
                    boxShadow: {
                        duration: 0.1,
                        ease: "easeIn",
                    },
                    backgroundColor: {
                        duration: 0.25,
                    },
                }}
            >
                <AnimatePresence mode="wait">

                    {
                        navbarState === NAVBAR_STATE.DEFAULT ? (

                            <motion.nav key="default"
                                className="nav"
                                initial={{ opacity: 0, y: -12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, width: "10%" }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                                <button className="nav-logo-link" onClick={() => setCurrentSlide(0)}>
                                    <span
                                        className="logo"
                                        role="img"
                                        aria-label="M.ai"
                                        style={{ backgroundColor: colorPalette.text }}
                                    />
                                </button>
                                <div className="links-wrapper">
                                    {LINKS.map((el, i) => (
                                        <motion.button
                                            key={el.name}
                                            onClick={() => setCurrentSlide(i + 1)}
                                            className={`nav-link ${el.name === "Cotizar" ? "nav-button" : ""}`}
                                            animate={el.name === "Cotizar"
                                                ? { color: colorPalette.onDark, backgroundColor: colorPalette.button, borderColor: colorPalette.button }
                                                : { color: colorPalette.text }}
                                            whileHover={el.name === "Cotizar"
                                                ? { color: colorPalette.onLight, backgroundColor: colorPalette.buttonHover }
                                                : { color: colorPalette.textHover }}
                                        >
                                            {el.name}
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.nav>
                        ) : isCircleMenu ? (
                            <MobileMenu open={open} setCurrentSlide={handleMobileMenuSelect} colorPalette={colorPalette} key="mobile"
                                links={LINKS} />
                        ) : ""
                    }
                </AnimatePresence>

                <AnimatePresence>
                    <motion.button onClick={toggleMenu} className="menu-open-button"
                        initial={{ x: -200, opacity: 0, scale: 0, color: colorPalette.onLight }}
                        animate={{ x: isCircleMenu ? 0 : -200, opacity: isCircleMenu ? 1 : 0, scale: isCircleMenu ? 1 : 0, color: colorPalette.onDark }}
                        whileHover={{ color: colorPalette.hover }}
                        transition={{ duration: 0.3, ease: "easeOut" }}

                    >
                        <MenuCircle backgroundColor={colorPalette.onLight} open={open} />
                        <AnimatePresence>
                            <motion.span
                                key={open ? "close" : "open"}
                                initial={{ opacity: 0, rotate: -90, scale: 0.7, color: colorPalette.onLight, backgroundColor: colorPalette.onDark }}
                                animate={{ opacity: 1, rotate: 0, scale: 1, color: colorPalette.onLight, backgroundColor: colorPalette.onDark }}
                                whileHover={{ backgroundColor: colorPalette.hover }}
                                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="menu-open-icon">
                                {
                                    open ? (
                                        <X size={28} />
                                    ) : (
                                        <ArrowUpRight size={28} />
                                    )
                                }
                            </motion.span>
                        </AnimatePresence>
                    </motion.button>
                </AnimatePresence>



            </motion.header>
        </div >
    );
}