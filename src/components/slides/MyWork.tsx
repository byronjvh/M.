import Button from "../Button"
import type { SlideProps } from "../SlideDeck"
import styles from "./MyWork.module.css"

export default function MyWork({ isCurrent }: SlideProps) {
    return (
        <section className={styles.work}>
            <div className={styles["work-intro"]}>
                <h2 className={styles["work-title"]}>Nuestro Trabajo</h2>
                <p className={styles["work-description"]}>Cada negocio es diferente. Aquí puedes ver algunos de nuestros proyectos.</p>
                <Button className={styles["work-button"]}>Quiero el mío</Button>
            </div>
            <div>
                <article className={styles["project"]}>
                    <header className={styles["project-header"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </header>
                    <img className={styles["project-image"]} src="" alt="" />
                    <div>
                        <h3 className={styles["project-title"]}>Titulo de la pagina</h3>
                        <p className={styles["project-description"]}>Descripcion de la página</p>
                    </div>
                </article>
            </div>
        </section>
    )
}