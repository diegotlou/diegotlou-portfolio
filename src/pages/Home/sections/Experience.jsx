import { AnimatedGrid, AnimatedList, Card } from "../../../components";
import { motion } from "motion/react";

export default function Experience({}) {
    const experiences = [
        {
            title: "ICAT, Muro Colaborativo (servicio social)",
            images: [],
            content:
                "Colaboré trabajando en equipo para definir requisitos y resolver problemas. Analicé y resolví problemas técnicos relacionados con las solicitudes AJAX y la optimización de la interfaz de usuario. Documenté procesos y capacité a los usuarios finales.",
            technologies: ["Node", "HTML", "CSS"],
        },
        {
            title: "Servicios en la nube con GCP (proyecto académico)",
            technologies: ["Django", "MySQL", "HTML", "CSS"],
            images: [],
            content:
                "Creación de dominios con .Tech. Gestión de registros DNS con CloudFlare. Creación y configuración de instancias de Google Cloud Platform. Configuración de la conexión entre instancias (conexión entre la base de datos y el servidor).",
        },
    ];

    const renderTechnology = (technology) => {
        return (
            <div className="p-1 bg-rose-600 text-rose-100 rounded-xl px-2 py-0.5-">
                {technology}
            </div>
        );
    };

    const renderGridExp = (exp, index) => {
        return (
            <Card title={exp.title}>
                <div className="z-10 size-full p-3 flex flex-col justify-center items-center overflow-hidden bg-sky-300 text-neutral-950 rounded-lg ">
                    <h3 className="pl-7 pt-4 font-raleway text-2xl font-semibold p-2 text-balance max-sm:text-sm">
                        {exp.title}
                    </h3>
                    <p className="max-sm:text-xs">{exp.content}</p>
                    <div className="max-h-28">
                        <AnimatedList
                            style={
                                "h-full w-full flex justify-center items-center text-2xs max-sm:text-xs"
                            }
                            items={exp.technologies}
                            renderItem={renderTechnology}
                        />
                    </div>
                </div>
            </Card>
        );
    };

    return (
        <section id="experiencia" className="proyectos h-dvh">
            <motion.div
                className="size-full flex flex-col justify-center items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
            >
                <motion.h2
                    className="pb-5 text-6xl font-roboto mx-auto max-sm:text-4xl"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { delay: 1 },
                        },
                    }}
                >
                    Experiencia
                </motion.h2>
                <AnimatedGrid
                    className={"proyectos-grid"}
                    gridStyle={
                        "h-3/4 w-3/4 grid grid-cols-2 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-2 gap-4 z-10"
                    }
                    items={experiences}
                    renderItem={renderGridExp}
                />
            </motion.div>
        </section>
    );
}
