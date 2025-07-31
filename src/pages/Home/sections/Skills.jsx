import { motion } from "motion/react";
import { AnimatedList } from "../../../components";
import {
    cssSvg,
    djangoSvg,
    htmlSvg,
    javascriptSvg,
    mysqlSvg,
    pythonSvg,
    reactSvg,
    tailwindcssSvg,
    vscodeSvg,
} from "../../../assets";

export default function Skills({}) {
    const iconosSkills = [
        [cssSvg, "CSS"],
        [djangoSvg, "Django"],
        [htmlSvg, "HTML5"],
        [javascriptSvg, "Javascript"],
        [mysqlSvg, "MySQL"],
        [pythonSvg, "Python"],
        [reactSvg, "React"],
        [tailwindcssSvg, "Tailwindcss"],
        [vscodeSvg, "VSCode"],
    ];

    const navVariants = {
        visible: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        hidden: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    };

    const renderIconSkills = (icon) => {
        return (
            <>
                <img
                    className="size-20 object-contain max-sm:size-10"
                    src={icon[0]}
                />
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
