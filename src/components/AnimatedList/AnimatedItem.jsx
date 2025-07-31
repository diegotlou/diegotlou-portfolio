import { motion } from "framer-motion";

export default function AnimatedItem({ children }) {
    const variants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        },
        hidden: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            },
        },
    };

    return (
        <motion.li className="m-2" variants={variants}>
            {children}
        </motion.li>
    );
}
