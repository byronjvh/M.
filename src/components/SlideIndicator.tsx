export default function SlideIndicator({ currentSlide, totalSlides }: { currentSlide: number, totalSlides: number }) {
    return (
        <div className="slide-indicator">
            <span>{currentSlide} / {totalSlides}</span>
        </div>
    );
}