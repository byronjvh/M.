import { useState } from "react";
import MenuCircle from "./MenuCircle";
import SlideDeck from "./SlideDeck";
import SlideIndicator from "./SlideIndicator";
import { motion } from "motion/react"
import Navbar from "./NavBar";

export default function AppLayout() {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    return (
        <div className="layout">
            <Navbar currentSlide={currentSlide} />
            {/* <button className="menu-button">
                        <MenuCircle />
                    </button> */}

            <main className="content">
                <SlideDeck
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                />
            </main>

            <SlideIndicator currentSlide={currentSlide + 1} totalSlides={6} />
        </div >
    );
}