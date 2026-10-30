import { motion } from "motion/react"
import ActionButton from "../ActionButton"
import Sticker from "../Sticker"
import type { SlideProps } from "../SlideDeck"
import styles from "./Contact.module.css"
import Button from "../Button"

const whatsappUrl = "https://wa.me/50672062036"

export default function Contact({ isCurrent }: SlideProps) {
    return (
        <section className={styles.contact}>
            <motion.div
                className={styles["contact-intro"]}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: isCurrent ? 1 : 0, x: isCurrent ? 0 : -40 }}
                transition={{ duration: 0.5, delay: isCurrent ? 0.2 : 0 }}
            >
                <h2 className={styles["contact-title"]}>
                    HAGAMOS
                    <br />
                    TU WEB
                </h2>
                <p className={styles["contact-description"]}>
                    Cuéntanos sobre tu negocio y hagamos realidad una web que te ayude a crecer.
                </p>
                <Sticker />
                <div className={styles["contact-whatsapp"]}>
                    <span>¿Prefieres hablar directamente?</span>
                    <Button
                        className={styles["contact-whatsapp-link"]}
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Escríbenos por WhatsApp
                    </Button>
                </div>
            </motion.div>

            <motion.form
                className={styles["contact-form"]}
                aria-label="Formulario de contacto"
                onSubmit={(event) => event.preventDefault()}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: isCurrent ? 1 : 0, y: isCurrent ? 0 : 32 }}
                transition={{ duration: 0.5, delay: isCurrent ? 0.35 : 0 }}
            >
                <h3 className={styles["form-title"]}>Cuéntanos tu idea</h3>
                <label className={styles["form-field"]}>
                    <span>Tu nombre</span>
                    <input type="text" name="name" autoComplete="name" placeholder="¿Cómo te llamas?" required />
                </label>
                <div className={styles["form-contact-fields"]}>
                    <label className={styles["form-field"]}>
                        <span>Teléfono</span>
                        <input type="tel" name="phone" autoComplete="tel" placeholder="8888 8888" />
                    </label>
                    <label className={styles["form-field"]}>
                        <span>Correo electrónico</span>
                        <input type="email" name="email" autoComplete="email" placeholder="hola@tunegocio.com" />
                    </label>
                </div>
                <label className={`${styles["form-field"]} ${styles["form-message"]}`}>
                    <span>Tu mensaje</span>
                    <textarea name="message" rows={3} placeholder="Cuéntanos qué necesitas para tu negocio..." required />
                </label>
                <ActionButton
                    type="submit"
                    backgroundColor="#FFC83D"
                    borderColor="#121212"
                    color="#121212"
                    hoverBackgroundColor="#FFE39C"
                >
                    Enviar mensaje
                </ActionButton>
                <p className={styles["form-note"]}>
                </p>
            </motion.form>
        </section>
    )
}
