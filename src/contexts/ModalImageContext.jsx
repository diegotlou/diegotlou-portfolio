import { createContext, useState } from "react";

export const ModalImageContext = createContext();

export const ModalImageProvider = ({ children }) => {
    const [modalImage, setModalImage] = useState("");

    const closeModalImage = () => {
        setModalImage("");
    };

    return (
        <ModalImageContext.Provider
            value={{ modalImage, setModalImage, closeModalImage }}
        >
            {children}
        </ModalImageContext.Provider>
    );
};
