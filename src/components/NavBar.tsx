import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import MenuCircle from "./MenuCircle";
import { ArrowUpRight, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
    currentSlide: number;
}

const NAVBAR_STATE = {
    DEFAULT: "default",
    CIRCLE: "circle",
} as const;

type NavbarState = typeof NAVBAR_STATE[keyof typeof NAVBAR_STATE];

const LINKS = [
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

export default function Navbar({ currentSlide }: NavbarProps) {
    const [navbarState, setNavbarState] = useState<NavbarState>(NAVBAR_STATE.DEFAULT)
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        if (currentSlide > 0) return setNavbarState(NAVBAR_STATE.CIRCLE)
        else {
            setNavbarState(NAVBAR_STATE.DEFAULT)
            setOpen(false)
        }
    }, [currentSlide])

    const toggleMenu = () => {
        if (navbarState === NAVBAR_STATE.DEFAULT) return
        if (open) setOpen(false)
        else setOpen(true)
    }

    const isCircleMenu = navbarState === NAVBAR_STATE.CIRCLE

    return (
        <div className="navbar-container">


            <motion.header
                className="navbar"
                style={{ alignItems: isCircleMenu ? "" : "center" }}
                animate={{
                    backgroundColor: isCircleMenu ? "#121212" : "rgba(0,0,0,0)",
                    height: !isCircleMenu ? 80 : open ? 320 : 90,
                    width: !isCircleMenu ? "100%" : open ? 230 : 90,
                    borderRadius: isCircleMenu
                        ? open
                            ? "10px 0px 10px 10px"
                            : "45px 0px 45px 45px"
                        : "2px 0px 2px 2px",
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
                                exit={{ opacity: 0, scaleX: 0, width: "10%" }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                                <a href="/">
                                    <img
                                        className="logo"
                                        src="/logo.svg"
                                        alt="logo"
                                    />
                                </a>
                                <div className="links-wrapper">
                                    {LINKS.map((el) => (
                                        <a key={el.name} className={`nav-link ${el.name === "Cotizar" ? "nav-button" : ""}`} href={el.url}>{el.name}</a>
                                    ))}
                                </div>
                            </motion.nav>
                        ) : isCircleMenu ? (
                            <MobileMenu open={open} key="mobile"
                                links={LINKS} />
                        ) : ""
                    }
                </AnimatePresence>

                <AnimatePresence>
                    <motion.button onClick={toggleMenu} className="menu-open-button"
                        initial={{ x: -200, opacity: 0, scale: 0 }}
                        animate={{ x: isCircleMenu ? 0 : -200, opacity: isCircleMenu ? 1 : 0, scale: isCircleMenu ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <MenuCircle open={open} />
                        <AnimatePresence>
                            <motion.span
                                key={open ? "close" : "open"}
                                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
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