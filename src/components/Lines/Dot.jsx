import { motion } from "motion/react";

export default function Dot({ shadowColor }) {
    const durationVar = Math.floor(Math.random() * (30 - 10) + 10);

    return (
        <motion.span
            initial={{
                y: "100vh",
                scale: 0,
                boxShadow: `0 0 0 10px ${shadowColor}44, 0 0 50px ${shadowColor}, 0 0 100px ${shadowColor}`,
                backgroundColor: shadowColor,
            }}
            animate={{
                y: "-10vh",
                scale: 1,
            }}
            transition={{
                duration: 125 / durationVar,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
            }}
            className="relative size-6 my-0 mx-1 rounded-full"
        ></motion.span>
    );
}
