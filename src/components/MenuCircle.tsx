import { motion, useAnimate } from "motion/react";
import { useEffect, useRef } from "react";

export default function MenuCircle({ open }: { open: boolean }) {
    const [scope, animate] = useAnimate<SVGSVGElement>();
    const animationRef = useRef<ReturnType<typeof animate> | null>(null);

    useEffect(() => {
        animationRef.current = animate(
            scope.current,
            { rotate: 360 },
            {
                duration: 15,
                ease: "linear",
                repeat: Infinity,
            }
        );

        return () => {
            animationRef.current?.stop();
        };
    }, [animate, scope]);

    return (
        <motion.svg
            ref={scope}
            animate={{
                opacity: open ? 0 : 1,
                scale: open ? 0 : 1,
            }}
            transition={{
                duration: 0.25,
                ease: "easeInOut",
            }}
            style={{ pointerEvents: open ? "none" : "auto" }}
            onHoverStart={() => animationRef.current?.pause()}
            onHoverEnd={() => animationRef.current?.play()}
            width="90"
            height="90"
            viewBox="0 0 90 90"
            xmlns="http://www.w3.org/2000/svg"
            className="menu-circle"
        >
            <circle cx="45" cy="45" r="44" fill="#121212" />

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
                fill="currentColor"
                fontFamily="Saira, sans-serif"
                fontSize="12"
                fontWeight="500"
                letterSpacing="1.8"
            >
                <textPath href="#text-circle" startOffset="52%" textAnchor="middle">
                    • COTIZAR POR WHATSAPP
                </textPath>
            </text>
        </motion.svg>
    );
}