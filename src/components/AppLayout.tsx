import SlideDeck from "./SlideDeck";

export default function AppLayout() {
    return (
        <div className="layout">
            <header className="layout-header">
                <div className="header-content">
                    <a href="/"><img className="logo" src="/logo.svg" alt="logo" /></a>
                    <nav className="nav">
                        <a className="nav-link" href="/#services">Cómo funciona</a>
                        <a className="nav-link" href="/#portfolio">Planes</a>
                        <a className="nav-link" href="/#contact">Proyectos</a>
                        <a className="nav-link nav-button" href="/#contact">Cotizar</a>
                    </nav>
                </div>
            </header>

            <main className="content">
                <SlideDeck />
            </main>

            <span>01 / 06</span>
        </div>
    );
}