import { MoveRight } from "lucide-react";
import { motion } from "motion/react"


export default function Button() {
    return (
        <motion.button whileHover={{ y: -8, scale: 1.02 }} whileTap={{ y: 0, scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 15 }} className="button">QUIERO MI WEB  <MoveRight size={20} /></motion.button>
    );
}