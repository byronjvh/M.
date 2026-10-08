import AnimatedCard from "../AnimatedCard";
import AnimatedCardDark from "../AnimatedCardDark";
import Button from "../Button";
import Sticker from "../Sticker";

export default function HeroSlide() {
    return (
        <div className="hero-content">
            <div className="hero-text">
                <h1>
                    TU NEGOCIO NO DEBERÍA
                    <br />
                    TENER UNA WEB DE M.
                </h1>

                <p className="hero-description">
                    Diseño de páginas web en Costa Rica para negocios y pymes. Webs rápidas, que se ven bien en el celular y que tus clientes encuentran en Google.
                </p>

                <div className="hero-buttons">
                    <Button />
                    <a className="hero-link" href="/">
                        Ver cómo funciona
                    </a>
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