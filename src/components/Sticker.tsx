import { motion } from "motion/react";

export default function Sticker() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -8,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                delay: 1.5,
                duration: 0.4,
                ease: [0.3, 1.4, 0.6, 1.6],
            }}

            className="sticker">
            Primero la ves. Después pagas.
        </motion.div>
    );
}