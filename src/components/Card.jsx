import { motion } from "motion/react";

export default function Card({ children, title }) {
    const variantsCover = {
        visible: {
            x: "0%",
        },
        hover: {
            x: "100%",
        },
    };

    return (
        <motion.div
            className="size-full relative"
            initial="visible"
            whileHover="hover"
        >
            <div className="absolute z-10 size-full flex flex-col justify-center items-center">
                {children}
            </div>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
                <motion.div
                    className="font-bold text-3xl max-sm:text-xl px-4 absolute flex justify-center items-center bg-rose-600 size-full rounded-lg z-30 backdrop-blur-md"
                    variants={variantsCover}
                >
                    <p className="text-white">{title}</p>
                </motion.div>
            </div>
        </motion.div>
    );
}
