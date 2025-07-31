import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import MenuButton from "./MenuButton";
import AnimatedList from "./AnimatedList/AnimatedList";
import Anchor from "./Anchor";

export default function Sidebar() {
    const [estaAbierto, setEstaAbierto] = useState(false);
    const ref = useRef(null);
    const [animacionDefault, setAnimacionDefault] = useState({});
    const anchors = [
        { href: "#perfil", name: "Perfil", target: "_self" },
        { href: "#skills", name: "Skills", target: "_self" },
        { href: "#experiencia", name: "Experiencia", target: "_self" },
        { href: "#proyectos", name: "Proyectos", target: "_self" },
    ];

    const renderAnchor = (anchor) => {
        return (
            <Anchor
                href={anchor.href}
                name={anchor.name}
                target={anchor.target}
            />
        );
    };

    useEffect(() => {
        if (ref.current) {
            setAnimacionDefault({
                abrir: {
                    backgroundColor: "#000",
                    clipPath: `circle(${
                        ref.current.offsetHeight * 2 + 200
                    }px at 85% 80px)`,
                    transition: {
                        type: "spring",
                        stiffness: 20,
                        restDelta: 2,
                        duration: 10,
                    },
                },

                cerrar: {
                    backgroundColor: "#000",
                    clipPath: `circle(32px at ${
                        ref.current.offsetWidth - 56
                    }px 88px)`,
                    transition: {
                        duration: 10,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 400,
                        damping: 40,
                    },
                },
            });
        }
    }, [ref]);

    return (
        <motion.aside
            className="bg-gradient-to-b from-gray-900 to-neutral-950 justify-between right-0 h-dvh w-2xs max-w-2/3 fixed z-100"
            ref={ref}
            animate={
                estaAbierto ? animacionDefault.abrir : animacionDefault.cerrar
            }
        >
            <motion.div
                className="absolute m-0 p-0 size-16 right-6 top-14 z-50"
                variants={animacionDefault}
            >
                <MenuButton
                    clickFunction={() => setEstaAbierto(!estaAbierto)}
                    estaAbierto={estaAbierto}
                />
            </motion.div>
            <motion.div
                className="h-full w-full"
                animate={estaAbierto ? "visible" : "hidden"}
            >
                <AnimatedList
                    classname={"sidebar-list"}
                    items={anchors}
                    renderItem={renderAnchor}
                />
            </motion.div>
        </motion.aside>
    );
}
