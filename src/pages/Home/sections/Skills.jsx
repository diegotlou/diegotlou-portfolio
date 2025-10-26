import { motion } from "motion/react";
import { AnimatedList } from "../../../components";
import {
    Css,
    Django,
    Html,
    Javascript,
    Mysql,
    Python,
    React,
    Tailwind,
    Vscode,
} from "../../../components/Icons";

export default function Skills({}) {
    const iconosSkills = [
        [<Css />, "CSS"],
        [<Django />, "Django"],
        [<Html />, "HTML5"],
        [<Javascript />, "Javascript"],
        [<Mysql />, "MySQL"],
        [<Python />, "Python"],
        [<React />, "React"],
        [<Tailwind />, "Tailwindcss"],
        [<Vscode />, "VSCode"],
    ];

    const renderIconSkills = (icon) => {
        return (
            <>
                <>{icon[0]}</>
                <p className="text-center  max-sm:text-xs">{icon[1]}</p>
            </>
        );
    };

    return (
        <section id="skills" className="proyectos h-dvh">
            <motion.div
                className="h-full w-full flex flex-col justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
            >
                <motion.h2
                    className="text-5xl font-roboto mx-auto max-sm:text-4xl"
                    variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    Skills
                </motion.h2>
                <motion.p
                    className="my-4 text-pretty mx-6 p-5 font-roboto text-neutral-300/85 text-lg font-light max-sm:text-sm max-sm:m-0"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { delay: 1 },
                        },
                    }}
                >
                    Estas son las herramientas y tecnologías que he utilizada
                    tanto en proyectos propios como escolares. Cuento con
                    experiencia en el desarrollo front-end y back-end.
                </motion.p>
                <div className="max-h-96">
                    <AnimatedList
                        classname={"lista-iconos"}
                        style={
                            "h-full w-full flex justify-center items-center flex-wrap"
                        }
                        items={iconosSkills}
                        renderItem={renderIconSkills}
                    />
                </div>
            </motion.div>
        </section>
    );
}
