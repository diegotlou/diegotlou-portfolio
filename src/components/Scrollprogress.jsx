import { motion, useSpring, useScroll } from "motion/react";

export default function Scrollprogress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="scrollprogress z-140 fixed w-full h-5 bg-gradient-to-b from-sky-300 to-transparent"
            style={{ scaleX, originX: 0 }}
        ></motion.div>
    );
}
