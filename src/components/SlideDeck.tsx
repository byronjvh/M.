import { useEffect, useState } from "react";
import { motion } from "motion/react";
import HeroSlide from "./slides/HeroSlide";
import ServicesSlide from "./slides/ServicesSlide";

const slides = [
    {
        id: "hero",
        color: "#009982",
        name: "Hero",
        content: <HeroSlide />,
    },
    {
        id: "services",
        color: "#3155FF",
        name: "Services",
        content: <ServicesSlide />,
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
                            {slide.content}
                        </div>
                    </motion.section>
                );
            })}
        </div>
    );
}