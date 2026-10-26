import AnimatedCard from "../AnimatedCard";
import AnimatedCardDark from "../AnimatedCardDark";
import Button from "../Button";
import type { SlideProps } from "../SlideDeck";
import Sticker from "../Sticker";

export default function HeroSlide({ isCurrent, setCurrentSlide }: SlideProps) {
    const handleClick = (i: number) => {
        if (!setCurrentSlide) return
        setCurrentSlide(i)
    }

    return (
        <div className="hero-content">
            <div className="hero-text">
                <h1>
                    TU NEGOCIO NO DEBERÍA
                    <br />
                    TENER UNA WEB DE M.
                </h1>

                <p className="hero-description">
                    Diseño de páginas web para negocios y pequeñas empresas en Costa Rica. Muestra tus servicios, cuenta qué hace especial a tu negocio y haz que tus clientes te encuentren en Google.
                </p>

                <div className="hero-buttons">
                    <Button />
                    <button className="hero-link" onClick={() => handleClick(2)}>
                        Ver cómo funciona
                    </button>
                </div>
            </div>
            <div className="hero-cards">
                <AnimatedCard />
                <AnimatedCardDark />
                <Sticker />
            </div>
        </div>
    );
}