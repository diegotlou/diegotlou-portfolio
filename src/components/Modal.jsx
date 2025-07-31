import { AnimatePresence, motion, scale } from "motion/react";
import Close from "./Buttons/Close";

export default function Modal({
    children,
    style,
    titleModal,
    isOpen,
    closeModal,
}) {
    const animation = {
        initial: {
            clipPath: "circle(0 at 0% 50%)",
            WebkitClipPath: "circle(0 at 0% 50%)",
            scale: 1,
        },
        open: {
            clipPath: "circle(140% at 0 14%)",
            WebkitClipPath: "circle(140% at 0 14%)",
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
            display: "block",
        },
        exit: {
            clipPath: "circle(0 at 0% 50%)",
            WebkitClipPath: "circle(0 at 0% 50%)",
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
            display: "none",
        },
        whileInView: {
            scale: 1,
        },
    };

    const animationBg = {
        initial: {
            scale: 1,
            opacity: 0,
        },
        open: {
            opacity: 0.75,
        },
        exit: {
            opacity: 0,
        },
        whileInView: {
            scale: 1,
        },
    };

    return (
        <AnimatePresence>
            {isOpen ? (
                <motion.div
                    className="overflow-hidden"
                    initial={"initial"}
                    animate={isOpen ? "open" : ""}
                    exit={"exit"}
                    transition={"transition"}
                >
                    <motion.dialog
                        className={
                            style
                                ? style
                                : "hidden fixed z-150 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2/3 rounded-lg bg-gradient-to-b from-gray-900 to-neutral-950"
                        }
                        variants={animation}
                    >
                        <div className="size-full  overflow-hidden relative flex justify-center items-center">
                            {titleModal && <h2>{titleModal}</h2>}
                            {children}
                            <motion.form
                                method="dialog"
                                className="absolute top-0 right-0 size-9 mr-2 mt-2"
                            >
                                <Close onClick={closeModal} />
                            </motion.form>
                        </div>
                    </motion.dialog>
                    <motion.div
                        className="block fixed z-140 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-dvh w-dvw bg-gray-950 opacity-25"
                        variants={animationBg}
                        onClick={closeModal}
                    />
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}
