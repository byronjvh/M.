import type { SlideProps } from "../SlideDeck";
import styles from "./HowItWorks.module.css"
import { motion } from "motion/react"

export default function HowItWorks({ isCurrent }: SlideProps) {
    return (
        <section className={styles.HIW}>
            <div className={styles["HIW-intro"]}>
                <h2 className={styles["HIW-title"]}>
                    <motion.span
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: isCurrent ? 1 : 0, x: isCurrent ? 0 : -60 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25, delay: isCurrent ? 0.7 : 0 }}
                    >
                        La hacemos.
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: isCurrent ? 1 : 0, x: isCurrent ? 0 : -60 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25, delay: isCurrent ? 1 : 0 }}
                    >
                        La ves.
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: isCurrent ? 1 : 0, x: isCurrent ? 0 : -60 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25, delay: isCurrent ? 1.3 : 0 }}
                    >
                        Tú decides.
                    </motion.span>
                </h2>
                <p className={styles["HIW-description"]}>
                    Si no te gusta, no pagas nada y no hacemos trato.
                </p>
            </div>
            <div className={styles["HIW-cards"]}>
                <motion.article className={styles["HIW-card"]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isCurrent ? 1 : 0, y: isCurrent ? 0 : 20 }}
                    transition={{ delay: isCurrent ? 0.2 : 0, duration: 0.4 }}
                >
                    <span>01</span>
                    <div>
                        <h3>Te escuchamos</h3>
                        <p>Nos cuentas qué hace tu negocio y qué necesitas mostrar a tus clientes.</p>
                    </div>
                </motion.article>
                <motion.article className={styles["HIW-card"]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isCurrent ? 1 : 0, y: isCurrent ? 0 : 20 }}
                    transition={{ delay: isCurrent ? 0.3 : 0, duration: 0.4 }}
                >
                    <span>02</span>
                    <div>
                        <h3>La ves funcionando</h3>
                        <p>Pruebas tu web en el celular o en la computadora. No es una imagen.</p>
                    </div>
                </motion.article>
                <motion.article className={`${styles["HIW-card"]} ${styles["HIW-card-highlight"]}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isCurrent ? 1 : 0, y: isCurrent ? 0 : 20 }}
                    transition={{ delay: isCurrent ? 0.4 : 0, duration: 0.4 }}
                >
                    <span>03</span>
                    <div>
                        <h3>Si te gusta, pagas</h3>
                        <p>Si decides continuar, tu web sigue funcionando desde <b>₡15.000*</b> al mes.</p>
                    </div>
                </motion.article>
            </div>
        </section>
    )
}