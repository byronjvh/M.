import SlideDeck from "./SlideDeck";

export default function AppLayout() {
    return (
        <div className="app">
            <span>
                <a href="/"><img src="/assets/logo.svg" alt="logo" /></a>
            </span>

            <main className="content">
                <SlideDeck />
            </main>

            <span>01 / 06</span>
        </div>
    );
}