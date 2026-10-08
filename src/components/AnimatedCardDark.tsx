import Poop from "./icons/Poop";

export default function AnimatedCardDark() {
    return (
        <div className="animated-card dark">
            <div className="animated-card-tag">
                Después
            </div>
            <div className="animated-card-content">
                <header className="animated-card-header">
                    <span></span>
                    <span></span>
                    <span></span>
                </header>
                <div className="animated-card-body">
                    <span className="animated-card-title"></span>
                    <span className="animated-card-title2"></span>
                    <span className="animated-card-description"></span>
                    <span className="animated-card-description2"></span>
                    <span className="animated-card-button"></span>
                </div>
            </div>
        </div>
    );
}