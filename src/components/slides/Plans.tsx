import type { SlideProps } from "../SlideDeck"
import styles from "./Plans.module.css"

export default function Plans({ isCurrent }: SlideProps) {
    return (
        <section className={styles.plans}>
            <h2 className={styles["plans-title"]}>Elige tu plan</h2>
            <div className={styles["plans-options"]}>
                <article className={`${styles["plan"]} ${styles["highlighted"]}`}>
                    <span className={styles["plan-tag"]}>Empieza aquí</span>
                    <h3 className={styles["plan-title"]}>
                        Básico
                    </h3>
                    <p className={styles["plan-price"]}>₡15000 <span>/ mes</span></p>
                    <ul className={styles["plan-features"]}>
                        <li>
                            <p>Demostración gratis</p>
                        </li>
                        <li>
                            <p>La ves funcionando antes de pagar</p>
                        </li>
                        <li>
                            <p>Si no te gusta, no pagas nada</p>
                        </li>
                    </ul>
                </article>
                <article className={styles.plan}>
                    <h3 className={styles["plan-title"]}>
                        Básico
                    </h3>
                    <p className={styles["plan-price"]}>₡15000 <span>/ mes</span></p>
                    <ul className={styles["plan-features"]}>
                        <li>
                            <p>Demostración gratis</p>
                        </li>
                        <li>
                            <p>La ves funcionando antes de pagar</p>
                        </li>
                        <li>
                            <p>Si no te gusta, no pagas nada</p>
                        </li>
                    </ul>
                </article>
                <article className={styles.plan}>
                    <h3 className={styles["plan-title"]}>
                        Básico
                    </h3>
                    <p className={styles["plan-price"]}>₡15000 <span>/ mes</span></p>
                    <ul className={styles["plan-features"]}>
                        <li>
                            <p>Demostración gratis</p>
                        </li>
                        <li>
                            <p>La ves funcionando antes de pagar</p>
                        </li>
                        <li>
                            <p>Si no te gusta, no pagas nada</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}