import { motion } from "motion/react";
export default function AnimatedCardDark() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotate: 5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: [.2, .6, 0.45, 1.25],
                delay: 0.3,
            }}
            className="animated-card dark"
        >
            <div className="animated-card-tag">
                Después
            </div>
            <div className="animated-card-content">
                <header className="animated-card-header">
                    <span></span>
                    <span></span>
                    <span></span>
                </header>
                <div className="animated-card-body">
                    <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.6,
                        }}
                        className="animated-card-title"></motion.span>
                    <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.7,
                        }}
                        className="animated-card-title2"></motion.span>
                    <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.8,
                        }}
                        className="animated-card-description"></motion.span>
                    <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.9,
                        }}
                        className="animated-card-description2"></motion.span>
                    <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 1,
                        }}
                        className="animated-card-button"></motion.span>
                </div>
            </div>
        </motion.div >
    );
}