
import { motion } from "motion/react"
import ActionButton from "../ActionButton"
import Sticker from "../Sticker"
import type { SlideProps } from "../SlideDeck"
import styles from "./Contact.module.css"
import Button from "../Button"
import { useEffect, useState } from "react"

const whatsappUrl = "https://wa.me/50672062036"

// URL de tu backend desplegado en Vercel
const API_URL = "https://mwebcr-resend.vercel.app/api/send"

export default function Contact({
    isCurrent,
    currentMessage = "Quiero una página web para mi negocio."
}: SlideProps) {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: currentMessage
    })

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState("")

    useEffect(() => {
        if (currentMessage) {
            setForm(prev => ({
                ...prev,
                message: currentMessage
            }))
        }
    }, [currentMessage])

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!form.phone.trim() && !form.email.trim()) {
            setStatus("Ingresá un teléfono o correo electrónico.")
            return
        }

        setLoading(true)
        setStatus("")

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error)
            }

            setStatus("¡Mensaje enviado correctamente!")

            setForm({
                name: "",
                phone: "",
                email: "",
                message: ""
            })

        } catch (error) {
            setStatus("No se pudo enviar el mensaje. Intentá nuevamente.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className={styles.contact}>
            <motion.div
                className={styles["contact-intro"]}
                initial={{ opacity: 0, x: -40 }}
                animate={{
                    opacity: isCurrent ? 1 : 0,
                    x: isCurrent ? 0 : -40
                }}
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

                <Sticker className={styles["contact-sticker"]} />

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
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 32 }}
                animate={{
                    opacity: isCurrent ? 1 : 0,
                    y: isCurrent ? 0 : 32
                }}
                transition={{ duration: 0.5, delay: isCurrent ? 0.35 : 0 }}
            >
                <h3 className={styles["form-title"]}>Cuéntanos tu idea</h3>

                <label className={styles["form-field"]}>
                    <span>Tu nombre</span>
                    <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="¿Cómo te llamas?"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </label>

                <div className={styles["form-contact-fields"]}>
                    <label className={styles["form-field"]}>
                        <span>Teléfono</span>
                        <input
                            type="tel"
                            name="phone"
                            autoComplete="tel"
                            placeholder="8888 8888"
                            value={form.phone}
                            onChange={handleChange}
                        />
                    </label>

                    <label className={styles["form-field"]}>
                        <span>Correo electrónico</span>
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="hola@tunegocio.com"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <label className={`${styles["form-field"]} ${styles["form-message"]}`}>
                    <span>Tu mensaje</span>
                    <textarea
                        name="message"
                        rows={3}
                        placeholder="Cuéntanos qué necesitas para tu negocio..."
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                </label>

                <ActionButton
                    type="submit"
                    backgroundColor="#FFC83D"
                    borderColor="#121212"
                    color="#121212"
                    hoverBackgroundColor="#FFE39C"
                >
                    {loading ? "Enviando..." : "Enviar mensaje"}
                </ActionButton>

                <p className={styles["form-note"]} aria-live="polite">
                    {status}
                </p>
            </motion.form>
        </section>
    )
}
