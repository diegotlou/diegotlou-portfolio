import { motion } from "motion/react";

export default function Anchor({ href, name, target }) {
    const animacion = {
        oculto: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        initial: {
            color: "#e11d48",
            border: "0px solid #ffffff40",
        },
        hover: {
            borderBottom: "1px solid #e11d48",
            transition: {
                duration: 0.5,
                repeatType: "reverse",
            },
        },
    };

    return (
        <motion.div className="a-contenedor w-full" variants={animacion}>
            <motion.a
                className="px-3 py-0.5"
                href={href ? href : "#"}
                target={target ? target : "_self"}
                initial={animacion.initial}
                whileHover={animacion.hover}
            >
                {name}
            </motion.a>
        </motion.div>
    );
}
