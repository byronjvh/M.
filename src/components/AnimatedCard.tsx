import Poop from "./icons/Poop";

export default function AnimatedCard() {
    return (
        <div className="animated-card">
            <div className="animated-card-tag">
                Antes
            </div>
            <div className="animated-card-content">
                <header className="animated-card-header">
                    <span></span>
                    <span></span>
                    <span></span>
                </header>
                <div className="animated-card-body">
                    <Poop size={150} />
                </div>
            </div>
        </div>
    );
}