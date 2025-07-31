import {
    TextWriter,
    Copy,
    AnimatedList,
    Git,
    File,
    Linkedin,
} from "../../../components";
import ModelSection from "./ModelSection";
import Send from "../../../components/Buttons/Send";
import { diegoCV } from "../../../assets";
import { motion } from "motion/react";

export default function Profile() {
    const email = "diego13579dmc@gmail.com";
    const git = "https://github.com/diegotlou";
    const linkedin = "https://www.linkedin.com/in/diego-martinez-154244339";

    const renderGit = () => {
        return <Git href={git} />;
    };
    const renderFile = () => {
        return <File pathFile={diegoCV} />;
    };
    const renderLinkedin = () => {
        return <Linkedin href={linkedin} />;
    };
    const icons = [{ f: renderGit }, { f: renderFile }, { f: renderLinkedin }];

    const renderIcon = (icon) => {
        return <icon.f />;
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        alert("Correo copiado :D");
    };

    const sendEmail = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <section
            id="perfil"
            className="perfil box-border w-full flex justify-center items-center h-dvh max-md:flex-col max-md:h-fit"
        >
            <div className="perfil__data flex flex-col justify-center max-w-1/2 min-xl:w-3xl max-md:max-w-full max-md:h-dvh ">
                <TextWriter texto={"Diego Martínez Calzada"} />
                <h1 className="px-2 font-bold text-neutral-300 text-4xl leading-none max-sm:text-2xl">
                    Desarrollador Full-stack
                </h1>
                <p className="p-5 font-roboto text-neutral-300/85 text-lg text-pretty font-light max-sm:text-sm">
                    Egresado de la carrera de ciencias de la computación en la
                    Facultad de Ciencias, UNAM. Apacionado por el diseño y
                    desarrollo web, e inteligencia artificial. Disponible para
                    trabajar, actualmente aprendiendo sobre el diseño
                    responsive.
                </p>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                >
                    <AnimatedList
                        classname={"profile-icons"}
                        style={
                            "h-full w-full flex justify-center items-center @max-md:flex-wrap"
                        }
                        items={icons}
                        renderItem={renderIcon}
                    />
                </motion.div>
                <div className="w-full p-5 flex justify-center items-center">
                    <div className="font-roboto text-lg py-auto px-2 h-8  mr-1 w-3xs border-2 rounded-md border-neutral-300/25 max-sm:text-sm">
                        {email}
                    </div>
                    <Copy
                        onClick={copyEmail}
                        buttonDescription={"Copiar correo"}
                    />
                    <Send
                        onClick={sendEmail}
                        buttonDescription={"Enviar correo"}
                    />
                </div>
            </div>
            <div className="perfil__img w-1/2 min-xl:w-xl h-full max-md:w-5/6 max-md:h-dvh ">
                <ModelSection />
            </div>
        </section>
    );
}
