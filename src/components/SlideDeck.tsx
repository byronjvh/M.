import { useEffect, useState } from "react";
import { motion } from "motion/react";

const slides = [
    {
        id: 1,
        color: "#009982",
        title: "SLIDE 1",
    },
    {
        id: 2,
        color: "#3155FF",
        title: "SLIDE 2",
    },
];

export default function SlideDeck() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((current) =>
            Math.min(current + 1, slides.length - 1)
        );
    };

    const previousSlide = () => {
        setCurrentSlide((current) =>
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
                        className="slide"
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
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <h1>{slide.title}</h1>
                    </motion.section>
                );
            })}
        </div>
    );
}