import AnimatedCard from "../AnimatedCard";
import AnimatedCardDark from "../AnimatedCardDark";
import Button from "../Button";
import type { SlideProps } from "../SlideDeck";
import Sticker from "../Sticker";
import styles from "./HeroSlide.module.css";

export default function HeroSlide({ isCurrent, setCurrentSlide }: SlideProps) {
    const handleClick = (i: number) => {
        if (!setCurrentSlide) return
        setCurrentSlide(i)
    }

    return (
        <div className={styles.content}>
            <div className={styles.text}>
                <h1>
                    TU NEGOCIO NO DEBERÍA
                    <br />
                    TENER UNA WEB DE M.
                </h1>

                <p className={styles.description}>
                    Diseño de páginas web para negocios y pequeñas empresas en Costa Rica. Muestra tus servicios, cuenta qué hace especial a tu negocio y haz que tus clientes te encuentren en Google.
                </p>

                <div className={styles.buttons}>
                    <Button />
                    <button className={styles.link} onClick={() => handleClick(2)}>
                        Ver cómo funciona
                    </button>
                </div>
            </div>
            <div className={styles.cards}>
                <AnimatedCard />
                <AnimatedCardDark />
                <Sticker />
            </div>
        </div>
    );
}