import { motion } from "motion/react";

export default function TextWriter({ texto, style }) {
    const animacion = {
        initial: {
            textShadow:
                "1px 1px 0 #e11d48, 1px 2px 0 #e11d48, 1px 3px 0 #e11d48, 1px 4px 0 #e11d48, 1px 5px 0 #e11d48, 1px 6px 0 #e11d48, 1px 7px 0 #e11d48, 1px 8px 0 #e11d48",
        },
        oculto: { opacity: 0, translateY: 20 },
        visible: { opacity: 1, translateY: 0, transition: { duration: 0.2 } },
    };

    return (
        <div className="textwriter-contenedor p-4">
            <motion.div
                className={`texto-neon text-6xl inline-block max-sm:text-5xl font-roboto text-sky-300  ${style}`}
                initial="oculto"
                whileInView="visible"
                transition={{ staggerChildren: 0.1 }}
            >
                {texto.split(" ").map((palabra, i) => (
                    <motion.span
                        key={"span-palabra-" + i}
                        className="inline-block"
                        initial={animacion.initial}
                    >
                        {palabra.split("").map((letra, j) => (
                            <motion.span
                                key={"span-letra-" + i + "-" + j}
                                className="inline-block"
                                variants={animacion}
                            >
                                {letra}
                            </motion.span>
                        ))}
                        <span className="inline-block">&nbsp;</span>
                    </motion.span>
                ))}
                {/* </div> */}
            </motion.div>
        </div>
    );
}
