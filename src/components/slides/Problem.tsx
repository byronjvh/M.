import { useState } from "react";
import type { SlideProps } from "../SlideDeck";
import styles from "./Problem.module.css"
import { motion } from "motion/react"


export default function Problem({ isCurrent }: SlideProps) {
    const [hoveredCards, setHoveredCards] = useState<number[]>([]);

    const handleHover = (index: number, hovered: boolean) => {
        setHoveredCards((current) =>
            hovered
                ? [...current, index]
                : current.filter((item) => item !== index)
        );
    };
    return (
        <section className={styles.problem}>
            <div className={styles["problem-intro"]}>
                <h2 className={styles["problem-title"]}>
                    <span>
                        Tu competencia ya tiene web.
                    </span>
                    <motion.span
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: isCurrent ? -20 : 0, opacity: isCurrent ? 1 : 0 }}
                        transition={{
                            duration: 0.8,
                            delay: isCurrent ? 1.5 : 0,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className={styles["problem-decoration"]}>
                        ¿Y tú?
                    </motion.span>
                </h2>
                <p className={styles["problem-description"]}>
                    En Costa Rica, tus clientes buscan en Google antes de escribirte. Si no apareces, le escriben a otro.
                </p>
            </div>

            <div className={styles["problem-cards"]}>
                <motion.article
                    initial={{ rotate: 0, y: 0, opacity: 0 }}
                    animate={{ rotate: hoveredCards.includes(0) ? 0 : isCurrent ? -2 : 0, y: isCurrent ? 0 : 40, opacity: isCurrent ? 1 : 0 }}
                    transition={{
                        rotate: {
                            delay: hoveredCards.includes(0) ? 0 : isCurrent ? 0.6 : 0,
                            duration: 0.2,
                        },
                        y: { delay: isCurrent ? 0.6 : 0 },
                        opacity: { delay: isCurrent ? 0.6 : 0 },
                    }}
                    onHoverStart={() => handleHover(0, true)}
                    onHoverEnd={() => handleHover(0, false)}
                    className={`${styles["problem-card"]} ${styles["problem-card-1"]}`}>
                    <span>01</span>
                    <p>Sin web tus clientes no te encuentran</p>
                </motion.article>
                <motion.article
                    initial={{ rotate: 0, y: 0, opacity: 0 }}
                    animate={{ rotate: hoveredCards.includes(1) ? 0 : isCurrent ? 2 : 0, y: isCurrent ? 0 : 40, opacity: isCurrent ? 1 : 0 }}
                    transition={{
                        rotate: {
                            delay: hoveredCards.includes(1) ? 0 : isCurrent ? 0.8 : 0,
                            duration: 0.2,
                        },
                        y: { delay: isCurrent ? 0.8 : 0 },
                        opacity: { delay: isCurrent ? 0.8 : 0 },
                    }}
                    onHoverStart={() => handleHover(1, true)}
                    onHoverEnd={() => handleHover(1, false)}
                    className={`${styles["problem-card"]} ${styles["problem-card-2"]}`}>
                    <span>02</span>
                    <p>Una web lenta se cierra antes de leerla.
                    </p>
                </motion.article>
                <motion.article
                    initial={{ rotate: 0, y: 0, opacity: 0 }}
                    animate={{ rotate: hoveredCards.includes(2) ? 0 : isCurrent ? -2 : 0, y: isCurrent ? 0 : 40, opacity: isCurrent ? 1 : 0 }}
                    transition={{
                        rotate: {
                            delay: hoveredCards.includes(2) ? 0 : isCurrent ? 1 : 0,
                            duration: 0.2,
                        },
                        y: { delay: isCurrent ? 1 : 0 },
                        opacity: { delay: isCurrent ? 1 : 0 },
                    }}
                    onHoverStart={() => handleHover(2, true)}
                    onHoverEnd={() => handleHover(2, false)}
                    className={`${styles["problem-card"]} ${styles["problem-card-3"]}`}>
                    <span>03</span>
                    <p>Si no se ve bien en el celular, pierdes ventas.
                    </p>
                </motion.article>
            </div>
        </section>
    );
}