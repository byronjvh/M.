import { motion } from "motion/react"

export default function MenuCircle() {
    return (
        <motion.svg
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity
            }}
            width="90"
            height="90"
            viewBox="0 0 90 90"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            className="menu-circle"
        >
            <circle
                cx="45"
                cy="45"
                r="44"
                fill="#121212"
            />

            <defs>
                <path
                    id="text-circle"
                    d="
                        M 45,45
                        m -30,0
                        a 30,30 0 1,1 60,0
                        a 30,30 0 1,1 -60,0
                    "
                    fill="none"
                />
            </defs>

            <text
                fill="#FFC83D"
                fontFamily="Saira, sans-serif"
                fontSize="12"
                fontWeight="500"
                letterSpacing="1.8"
            >
                <textPath
                    href="#text-circle"
                    startOffset="0%"
                >
                    • COTIZAR POR WHATSAPP
                </textPath>
            </text>
        </motion.svg>
    )
}