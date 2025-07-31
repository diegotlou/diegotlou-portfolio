import { motion, MotionConfig } from "motion/react";

export default function MenuButton({ clickFunction, estaAbierto }) {
    const transitionConfig = {
        duration: 0.5,
        ease: "easeInOut",
    };

    return (
        <MotionConfig transition={transitionConfig}>
            <motion.button
                className="relative size-16 rounded-full hover:cursor-pointer z-30"
                onClick={clickFunction}
                animate={estaAbierto ? "abrir" : "cerrar"}
            >
                <motion.span
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 w-10 bg-amber-50"
                    variants={{
                        abrir: {
                            rotate: ["0", "0", "45deg"],
                            top: ["25%", "50%", "50%"],
                        },
                        cerrar: {
                            rotate: ["45deg", "0", "0"],
                            top: ["50%", "50%", "25%"],
                        },
                        onHover: {
                            backgroundColor: "#05df72",
                        },
                    }}
                ></motion.span>
                <motion.span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 w-10 bg-amber-50"
                    variants={{
                        abrir: {
                            rotate: ["0", "0", "-45deg"],
                        },
                        cerrar: {
                            rotate: ["-45deg", "0", "0"],
                        },
                        onHover: {
                            backgroundColor: "#05df72",
                        },
                    }}
                ></motion.span>
                <motion.span
                    className="absolute bottom-1/4 translate-y-1/2 h-1 w-5 bg-amber-50"
                    variants={{
                        abrir: {
                            rotate: ["0", "0", "45deg"],
                            left: "35%",
                            bottom: ["25%", "50%", "50%"],
                        },
                        cerrar: {
                            rotate: ["45deg", "0", "0"],
                            bottom: ["50%", "50%", "25%"],
                        },
                        onHover: {
                            backgroundColor: "#05df72",
                        },
                    }}
                ></motion.span>
            </motion.button>
        </MotionConfig>
    );
}
