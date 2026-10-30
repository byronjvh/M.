import { useEffect, useState, type CSSProperties } from "react"
import { motion } from "motion/react"
import Button from "../Button"
import type { SlideProps } from "../SlideDeck"
import styles from "./MyWork.module.css"
import project1 from "../../assets/projects/emprendedoresacs.png"
import project2 from "../../assets/projects/cafevivar.png"
import project3 from "../../assets/projects/og-image.png"

const projects = [
    {
        href: "https://emprendimientos-acs.vercel.app/",
        image: project1,
        title: "Emprendedores ACS",
        description: "Página para emprendimientos de empleados de la empresa",
        rotation: -12,
        offset: -165,
        y: 0,
    },
    {
        href: "https://www.cafevivar.com/",
        image: project2,
        title: "Café Vivar",
        description: "Empresa tostadora local de café de alta calidad.",
        rotation: 0,
        offset: 0,
        y: -18,
    },
    {
        href: "https://makeard.com/",
        image: project3,
        title: "Makeard",
        description: "Generador de tarjetas digitales para impresiones en 3D",
        rotation: 12,
        offset: 165,
        y: 0,
    },
]

export default function MyWork({ isCurrent }: SlideProps) {
    const [enteredCards, setEnteredCards] = useState(() => projects.map(() => false))

    useEffect(() => {
        if (!isCurrent) {
            setEnteredCards(projects.map(() => false))
        }
    }, [isCurrent])

    return (
        <section className={styles.work}>
            <div className={styles["work-intro"]}>
                <h2 className={styles["work-title"]}>Nuestro Trabajo</h2>
                <p className={styles["work-description"]}>Cada negocio es diferente. Aquí puedes ver algunos de nuestros proyectos.</p>
                <Button className={styles["work-button"]}>Quiero el mío</Button>
            </div>
            <div className={styles["projects-list"]}>
                {projects.map((project, index) => (
                    <motion.a
                        key={project.title}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles["project-link"]}
                        initial={{ opacity: 0, y: project.y + 32, rotate: project.rotation }}
                        animate={isCurrent
                            ? { opacity: 1, y: project.y, rotate: project.rotation }
                            : { opacity: 0, y: project.y + 32, rotate: project.rotation }}
                        transition={{
                            duration: 0.55,
                            delay: isCurrent && !enteredCards[index] ? (index * 0.12) + 0.55 : 0,
                            ease: [0.2, 0.7, 0.3, 1],
                        }}
                        onAnimationComplete={() => {
                            if (isCurrent && !enteredCards[index]) {
                                setEnteredCards((cards) =>
                                    cards.map((entered, cardIndex) => cardIndex === index || entered)
                                )
                            }
                        }}
                        whileHover={{
                            x: project.offset === 0 ? 0 : Math.sign(project.offset) * 28,
                            y: project.y - 30,
                            rotate: 0,
                            scale: 1.04,
                            zIndex: 5,
                            transition: { duration: 0.22, delay: 0 },
                        }}
                        whileFocus={{
                            x: project.offset === 0 ? 0 : Math.sign(project.offset) * 28,
                            y: project.y - 30,
                            rotate: 0,
                            scale: 1.04,
                            zIndex: 5,
                            transition: { duration: 0.22, delay: 0 },
                        }}
                        style={{
                            zIndex: index + 1,
                            "--card-offset": `${project.offset}px`,
                        } as CSSProperties}
                    >
                        <article className={styles.project}>
                            <header className={styles["project-header"]}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </header>
                            <img className={styles["project-image"]} src={project.image.src} alt="" />
                            <div className={styles["project-text"]}>
                                <h3 className={styles["project-title"]}>{project.title}</h3>
                                <p className={styles["project-description"]}>{project.description}</p>
                            </div>
                        </article>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}