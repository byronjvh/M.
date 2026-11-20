import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import HeroSlide from "./slides/HeroSlide";
import Problem from "./slides/Problem";
import { cloneElement, type ReactElement } from "react";
import HowItWorks from "./slides/HowItWorks";
import Plans from "./slides/Plans";
import MyWork from "./slides/MyWork";
import Contact from "./slides/Contact";
import styles from "./SlideDeck.module.css";

export interface SlideProps {
    isCurrent: boolean;
    setCurrentSlide?: React.Dispatch<React.SetStateAction<number>>;
    currentMessage?: string;
    setCurrentMessage?: React.Dispatch<React.SetStateAction<string>>;
}

export interface palette {
    background: string,
    onLight: string,
    onDark: string,
    hover: string,
    button: string,
    buttonHover: string,
    indicator: string,
    floatingShadow: string,
    cardShadow: string,
    text: string,
    textHover: string
}

interface Slide {
    id: string;
    name: string;
    palette: palette
    content: ReactElement<SlideProps>;
}

const slides: Slide[] = [
    {
        id: "hero",
        name: "Hero",
        palette: {
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
        },
        content: <HeroSlide isCurrent={false} />,
    },
    {
        id: "problem",
        name: "Problem",
        palette: {
            background: "#F5F3E9",
            onLight: "#121212",
            onDark: "#F5F3E9",
            hover: "#ffe39c",
            button: "#FFC83D",
            buttonHover: "#ffe39c",
            indicator: "#121212",
            floatingShadow: "6px 6px 0px 0px rgba(0,0,0,0.2)",
            cardShadow: "6px 6px 0px 0px #FFC83D",
            text: "#F5F3E9",
            textHover: "#ffe39c"
        },
        content: <Problem isCurrent={false} />,
    },
    {
        id: "howItWorks",
        name: "HowItWorks",
        palette: {
            background: "#FFC83D",
            onLight: "#121212",
            onDark: "#FFC83D",
            hover: "#ffe39c",
            button: "#FFC83D",
            buttonHover: "#ffe39c",
            indicator: "#121212",
            floatingShadow: "6px 6px 0px 0px rgba(0,0,0,0.2)",
            cardShadow: "6px 6px 0px 0px rgba(0,0,0,0.2)",
            text: "#F5F3E9",
            textHover: "#ffe39c"
        },
        content: <HowItWorks isCurrent={false} />,
    },
    {
        id: "plans",
        name: "Plans",
        palette: {
            background: "#121212",
            onLight: "#FFC83D",
            onDark: "#121212",
            hover: "#333",
            button: "#121212",
            buttonHover: "#333",
            indicator: "#F5F3E9",
            floatingShadow: "6px 6px 0px 0px #F5F3E933",
            cardShadow: "6px 6px 0px 0px #F5F3E933",
            text: "#121212",
            textHover: "#333"
        },
        content: <Plans isCurrent={false} />,
    },
    {
        id: "work",
        name: "Works",
        palette: {
            background: "#FF6A55",
            onLight: "#121212",
            onDark: "#F5F3E9",
            hover: "#ffe39c",
            button: "#FFC83D",
            buttonHover: "#ffe39c",
            indicator: "#121212",
            floatingShadow: "6px 6px 0px 0px rgba(0,0,0,0.2)",
            cardShadow: "6px 6px 0px 0px #FFC83D",
            text: "#F5F3E9",
            textHover: "#ffe39c"
        },
        content: <MyWork isCurrent={false} />,
    },
    {
        id: "contact",
        name: "Contact",
        palette: {
            background: "#009982",
            onLight: "#121212",
            onDark: "#F5F3E9",
            hover: "#ffe39c",
            button: "#FFC83D",
            buttonHover: "#ffe39c",
            indicator: "#F5F3E9",
            floatingShadow: "6px 6px 0px 0px rgba(0,0,0,0.2)",
            cardShadow: "6px 6px 0px 0px #FFC83D",
            text: "#F5F3E9",
            textHover: "#ffe39c"
        },
        content: <Contact isCurrent={false} />,
    },
];

interface SlideDeckProps {
    currentSlide: number;
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
    setColorPalette: React.Dispatch<React.SetStateAction<palette>>;
    currentMessage: string;
    setCurrentMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function SlideDeck({ currentSlide, setCurrentSlide, setColorPalette, currentMessage, setCurrentMessage }: SlideDeckProps) {
    const deckRef = useRef<HTMLDivElement>(null);
    const isNavigating = useRef(false);

    useEffect(() => {
        let touchStart: { x: number; y: number } | null = null;
        let unlockTimeout: ReturnType<typeof setTimeout> | null = null;

        const navigate = (direction: 1 | -1) => {
            if (isNavigating.current) return;

            isNavigating.current = true;
            setCurrentSlide((current) =>
                Math.max(0, Math.min(current + direction, slides.length - 1))
            );

            unlockTimeout = setTimeout(() => {
                isNavigating.current = false;
                unlockTimeout = null;
            }, 500);
        };

        const handleWheel = (event: WheelEvent) => {
            if (event.deltaY === 0 || Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
            navigate(event.deltaY > 0 ? 1 : -1);
        };

        const handleTouchStart = (event: TouchEvent) => {
            if (event.touches.length !== 1) {
                touchStart = null;
                return;
            }

            const target = event.target;
            if (
                target instanceof Element &&
                target.closest("a, button, input, textarea, select, [contenteditable='true'], [data-no-slide-swipe]")
            ) {
                touchStart = null;
                return;
            }

            const touch = event.touches[0];
            touchStart = touch ? { x: touch.clientX, y: touch.clientY } : null;
        };

        const handleTouchEnd = (event: TouchEvent) => {
            if (!touchStart) return;

            const start = touchStart;
            const touch = event.changedTouches[0];
            touchStart = null;
            if (!start || !touch) return;

            const deltaX = touch.clientX - start.x;
            const deltaY = touch.clientY - start.y;

            if (Math.abs(deltaY) < 50 || Math.abs(deltaY) <= Math.abs(deltaX) * 1.2) return;
            navigate(deltaY < 0 ? 1 : -1);
        };

        const handleTouchCancel = () => {
            touchStart = null;
        };

        window.addEventListener("wheel", handleWheel, { passive: true });
        const deck = deckRef.current;
        deck?.addEventListener("touchstart", handleTouchStart, { passive: true });
        deck?.addEventListener("touchend", handleTouchEnd, { passive: true });
        deck?.addEventListener("touchcancel", handleTouchCancel, { passive: true });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            deck?.removeEventListener("touchstart", handleTouchStart);
            deck?.removeEventListener("touchend", handleTouchEnd);
            deck?.removeEventListener("touchcancel", handleTouchCancel);
            if (unlockTimeout !== null) clearTimeout(unlockTimeout);
            isNavigating.current = false;
        };
    }, [setCurrentSlide]);

    useEffect(() => {
        setColorPalette(slides[currentSlide].palette)
    }, [currentSlide])

    return (
        <div ref={deckRef} className={styles.deck}>
            {slides.map((slide, index) => {
                const isCurrent = index === currentSlide;
                const isPrevious = index < currentSlide;
                return (
                    <motion.section
                        key={slide.id}
                        className={`${styles.slide} ${slide.id === "hero" ? styles.heroSlide : styles.compactSlide}`}
                        style={{
                            backgroundColor: slide.palette.background,
                            zIndex: isPrevious ? 20 : slides.length - index,
                        }}
                        animate={{
                            rotate: isPrevious ? -90 : 0,
                            x: isPrevious ? "-100%" : "0%",
                            y: isPrevious ? "0%" : "0%",
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.65, 0, 0.35, 1],
                        }}
                    >
                        <div className={styles.slideContent}>
                            {cloneElement(slide.content, { isCurrent, setCurrentSlide, currentMessage, setCurrentMessage })}
                        </div>
                    </motion.section>
                );
            })}
        </div>
    );
}