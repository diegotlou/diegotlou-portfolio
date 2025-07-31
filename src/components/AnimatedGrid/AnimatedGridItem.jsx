import { motion } from "motion/react";

export default function AnimatedGridItem({ children, gridItemStyle }) {
    const defaultClass = "overflow-hidden bg-teal-950 rounded-lg ";
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
        <motion.div
            className={gridItemStyle ? gridItemStyle : defaultClass}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
