import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Expand from "./Buttons/Expand";
import { ModalImageContext } from "../contexts/ModalImageContext";

export default function ImageSlider({ images, setIsOpen }) {
    const [currentImage, setCurrentImage] = useState(0);
    const { setModalImage } = useContext(ModalImageContext);

    const getImage = (image) => {
        return new URL(image, import.meta.url).href;
    };

    const onClickImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const onClickExpand = () => {
        setIsOpen(true);
        setModalImage(getImage(images[currentImage]));
    };

    const backgroundImageVariants = {
        hidden: { opacity: 0.2, scale: 0.95 },
        visible: { opacity: 0.2, scale: 1 },
    };

    const mainImageVariants = {
        enter: {
            opacity: 0,
            x: 100,
            transition: { duration: 0.3 },
        },
        center: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            x: -100,
            transition: { duration: 0.3 },
        },
    };

    return (
        <>
            <div className="size-full relative overflow-hidden">
                <motion.div
                    className="w-full h-full relative"
                    variants={backgroundImageVariants}
                    initial="hidden"
                    animate="visible"
                    key={`bg-${(currentImage + 1) % images.length}`}
                >
                    <img
                        className="object-cover h-full w-full object-center"
                        src={getImage(
                            images[(currentImage + 1) % images.length]
                        )}
                        alt="Background"
                    />
                    <div className="absolute size-full bg-gradient-to-b from-gray-900 to-neutral-950 opacity-30 top-0 z-200"></div>
                </motion.div>
                <div
                    className="absolute w-full h-full top-0 left-0 flex items-center justify-center"
                    onClick={onClickImage}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImage}
                            variants={mainImageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="w-full h-full flex items-center justify-center relative"
                        >
                            <img
                                className="object-contain max-h-full max-w-full cursor-pointer"
                                src={getImage(images[currentImage])}
                                alt="Main"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
                {setIsOpen && (
                    <Expand
                        style={"absolute top-2 right-2 cursor-pointer z-50"}
                        onClick={onClickExpand}
                    />
                )}
            </div>
        </>
    );
}
