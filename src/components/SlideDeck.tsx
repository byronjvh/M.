import { useEffect, useState } from "react";
import { motion } from "motion/react";
import HeroSlide from "./slides/HeroSlide";
import Problem from "./slides/Problem";
import { cloneElement, type ReactElement } from "react";

export interface SlideProps {
    isCurrent: boolean;
}

interface Slide {
    id: string;
    color: string;
    name: string;
    content: ReactElement<SlideProps>;
}

const slides: Slide[] = [
    {
        id: "hero",
        color: "#009982",
        name: "Hero",
        content: <HeroSlide isCurrent={false} />,
    },
    {
        id: "services",
        color: "#f5f3e9",
        name: "Services",
        content: <Problem isCurrent={false} />,
    },
];

export default function SlideDeck({ currentSlide, setCurrentSlide }: { currentSlide: number, setCurrentSlide: Function }) {
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

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (event.deltaY > 0) {
                nextSlide();
            } else if (event.deltaY < 0) {
                previousSlide();
            }
        };

        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

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
                            backgroundColor: slide.color,
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
                            {cloneElement(slide.content, { isCurrent })}
                        </div>
                    </motion.section>
                );
            })}
        </div>
    );
}