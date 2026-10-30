import ActionButton from "../ActionButton"
import type { SlideProps } from "../SlideDeck"
import styles from "./Plans.module.css"
import { motion } from "motion/react"

export default function Plans({ isCurrent }: SlideProps) {
    return (
        <section className={styles.plans}>
            <motion.h2 initial={{ rotate: -30, opacity: 0 }} animate={{ rotate: isCurrent ? 0 : -30, opacity: isCurrent ? 1 : 0 }} transition={{ delay: isCurrent ? 1 : 0, duration: 0.5, type: "spring", damping: 30, stiffness: 500 }} className={styles["plans-title"]}>Elige tu plan</motion.h2>
            <div className={styles["plans-options"]}>
                <motion.article initial={{ y: 40, opacity: 0 }} animate={{ y: isCurrent ? 0 : 40, opacity: isCurrent ? 1 : 0 }} transition={{ delay: isCurrent ? 0.5 : 0, duration: 0.5, type: "spring", damping: 25, stiffness: 300 }} className={`${styles["plan"]} ${styles["highlighted"]}`}>
                    <span className={styles["plan-tag"]}>Empieza aquí</span>
                    <h3 className={styles["plan-title"]}>
                        Básico
                    </h3>
                    <span className={styles["plan-price-tag"]}>
                        * Desde
                    </span>
                    <p className={styles["plan-price"]}>₡0 <span>después ₡15.900/mes</span></p>
                    <ul className={styles["plan-features"]}>
                        <li>
                            <p>Demostración gratis.</p>
                        </li>
                        <li>
                            <p>La ves funcionando antes de pagar.</p>
                        </li>
                        <li>
                            <p>Si no te gusta, no pagas nada.</p>
                        </li>
                        <li>
                            <p>Ideal para pequeñas empresas</p>
                        </li>
                    </ul>
                    <ActionButton
                        className={styles["plan-button"]}
                        backgroundColor="#121212"
                        borderColor="transparent"
                        color="#FFC83D"
                        hoverBackgroundColor="#333"
                        hoverColor="#F5F3E9"
                    >
                        Quiero mi web
                    </ActionButton>
                </motion.article>
                <motion.article initial={{ y: 40, opacity: 0 }} animate={{ y: isCurrent ? 0 : 40, opacity: isCurrent ? 1 : 0 }} transition={{ delay: isCurrent ? 0.6 : 0, duration: 0.5, type: "spring", damping: 25, stiffness: 300 }} className={styles.plan}>
                    <h3 className={styles["plan-title"]}>
                        Negocio
                    </h3>
                    <span className={styles["plan-price-tag"]}>
                        * Desde
                    </span>
                    <p className={styles["plan-price"]}>₡109.900 <span>después ₡35.000/mes</span></p>
                    <ul className={styles["plan-features"]}>
                        <li>
                            <p>Diseño exclusivo para tu negocio</p>
                        </li>
                        <li>
                            <p>Funciones que simplifican tu trabajo</p>
                        </li>
                        <li>
                            <p>Procesos más eficientes y organizados</p>
                        </li>
                        <li>
                            <p>Ideal para pequeñas y medianas empresas</p>
                        </li>
                    </ul>
                    <ActionButton className={styles["plan-button"]}>Cotizar</ActionButton>
                </motion.article>
                <motion.article initial={{ y: 40, opacity: 0 }} animate={{ y: isCurrent ? 0 : 40, opacity: isCurrent ? 1 : 0 }} transition={{ delay: isCurrent ? 0.7 : 0, duration: 0.5, type: "spring", damping: 25, stiffness: 300 }} className={styles.plan}>
                    <h3 className={styles["plan-title"]}>
                        A medida
                    </h3>
                    <span className={styles["plan-price-tag"]}>
                        * Desde
                    </span>
                    <p className={styles["plan-price"]}>₡290.000 <span> después ₡70.000/mes</span></p>
                    <ul className={styles["plan-features"]}>
                        <li>
                            <p>Desarrollo totalmente personalizado</p>
                        </li>
                        <li>
                            <p>Funciones adaptadas a tus objetivos</p>
                        </li>
                        <li>
                            <p>Una solución creada para tu proyecto</p>
                        </li>
                        <li>
                            <p>Ideal para proyectos de gran alcance</p>
                        </li>
                    </ul>
                    <ActionButton className={styles["plan-button"]}>Cotizar</ActionButton>
                </motion.article>
            </div>
        </section>
    )
}