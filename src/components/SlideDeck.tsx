import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import HeroSlide from "./slides/HeroSlide";
import Problem from "./slides/Problem";
import { cloneElement, type ReactElement } from "react";
import HowItWorks from "./slides/HowItWorks";
import Plans from "./slides/Plans";
import MyWork from "./slides/MyWork";

export interface SlideProps {
    isCurrent: boolean;
    setCurrentSlide?: Function;
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
            indicator: "#F5F3E9",
            floatingShadow: "6px 6px 0px 0px rgba(0,0,0,0.2)",
            cardShadow: "6px 6px 0px 0px #FFC83D",
            text: "#F5F3E9",
            textHover: "#ffe39c"
        },
        content: <MyWork isCurrent={false} />,
    },
];

export default function SlideDeck({ currentSlide, setCurrentSlide, setColorPalette }: { currentSlide: number, setCurrentSlide: Function, setColorPalette: Function }) {
    const nextSlide = () => {
        setCurrentSlide((current: number) =>
            Math.min(current + 1, slides.length - 1)
        );
    };

    const previousSlide = () => {
        setCurrentSlide((current: number) =>
            Math.max(current - 1, 0)
        );
    };

    const isScrolling = useRef(false);

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (isScrolling.current || event.deltaY === 0) return;

            isScrolling.current = true;

            if (event.deltaY > 0) {
                nextSlide();
            } else {
                previousSlide();
            }

            setTimeout(() => {
                isScrolling.current = false;
            }, 500);
        };

        window.addEventListener("wheel", handleWheel, { passive: true });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    useEffect(() => {
        setColorPalette(slides[currentSlide].palette)
    }, [currentSlide])

    return (
        <div className="deck">
            {slides.map((slide, index) => {
                const isCurrent = index === currentSlide;
                const isPrevious = index < currentSlide;
                return (
                    <motion.section
                        key={slide.id}
                        className={`slide slide-${slide.name.toLowerCase()}`}
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
                        <div className="slide-content">
                            {cloneElement(slide.content, { isCurrent, setCurrentSlide })}
                        </div>
                    </motion.section>
                );
            })}
        </div>
    );
}