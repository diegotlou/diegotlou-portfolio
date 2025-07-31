import { motion } from "motion/react";

export default function StickyCard({ children }) {
    const variants = {
        initial: { scale: 1 },
        whileInView: { scale: 0.9 },
    };

    return (
        <motion.div
            className="h-dvh w-full sticky top-0 flex justify-center items-center"
            initial="initial"
            whileInView="whileInView"
            viewport={{ amount: "all" }}
        >
            <motion.div
                className="h-3/4 w-4/5 text-rose-50 bg-neutral-950/5 border-transparent border-2 rounded-2xl p-3 backdrop-blur-md hover:bg-blue-300/20 hover:border-blue-300"
                variants={variants}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
