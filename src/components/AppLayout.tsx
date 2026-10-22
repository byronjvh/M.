import { useState } from "react";
import SlideDeck, { type palette } from "./SlideDeck";
import SlideIndicator from "./SlideIndicator";
import Navbar from "./NavBar";

export default function AppLayout() {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [colorPalette, setColorPalette] = useState<palette>({
        background: "#009982",
        onLight: "#121212",
        onDark: "#F5F3E9",
        hover: "#FFC83D",
        indicator: "#F5F3E9"
    });

    return (
        <div className="layout">
            <Navbar colorPalette={colorPalette} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />

            <main className="content">
                <SlideDeck
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    setColorPalette={setColorPalette}
                />
            </main>

            <SlideIndicator colorPalette={colorPalette} currentSlide={currentSlide + 1} totalSlides={6} />
        </div >
    );
}