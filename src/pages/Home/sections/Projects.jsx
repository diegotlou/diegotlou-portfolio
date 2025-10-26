import { useState, useContext } from "react";
import {
    Git,
    Link,
    StickyContainer,
    Modal,
    Project,
} from "../../../components";
import {
    imagenTableroUno,
    imagenTableroDos,
    imagenTableroTres,
    imagenTableroCuatro,
    imagenScrollerUno,
    imagenScrollerDos,
    imagenScrollerTres,
    imagenScrollerCuatro,
    imagenPaisesUno,
    imagenPaisesDos,
    imagenPaisesTres,
    imagenPaisesCuatro,
    imagenPaisesCinco,
    imagenRecomendacionUno,
    imagenRecomendacionDos,
} from "../../../assets";
import { ModalImageContext } from "../../../contexts/ModalImageContext";

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const { modalImage } = useContext(ModalImageContext);
    const gitTablero = "https://github.com/diegotlou/tablero-tareas";
    const linkTablero = "https://diegotlou.github.io/gestor-de-tareas/";
    const gitPaises = "https://github.com/diegotlou/react-paises";
    const gitRecomendacion =
        "https://github.com/diegotlou/recomendacion-peliculas";
    const gitScroller = "https://github.com/diegotlou/react-infinite-scroller";
    const pigeon = "https://pigeon-maps.js.org/";
    const restcountries = "https://restcountries.com/";
    const pexels = "https://www.pexels.com/api/";
    const giphy = "https://developers.giphy.com/";
    const kaggle = "https://www.kaggle.com/datasets/shivamb/netflix-shows";

    const closeModal = () => {
        setIsOpen(false);
    };

    const renderGitTablero = () => {
        return <Git href={gitTablero} />;
    };

    const renderLinkTablero = () => {
        return <Link href={linkTablero} />;
    };

    const renderGitPaises = () => {
        return <Git href={gitPaises} />;
    };

    const renderGitRecomendacion = () => {
        return <Git href={gitRecomendacion} />;
    };

    const renderGitScroller = () => {
        return <Git href={gitScroller} />;
    };

    const renderWebPigeon = () => {
        return <Link href={pigeon} />;
    };

    const renderWebRestCountries = () => {
        return <Link href={restcountries} />;
    };

    const renderWebPexels = () => {
        return <Link href={pexels} />;
    };

    const renderWebGiphy = () => {
        return <Link href={giphy} />;
    };

    const renderWebKaggle = () => {
        return <Link href={kaggle} />;
    };

    const projects = [
        {
            title: "Tablero de tareas",
            technologies: ["React", "Bootstrap", "CSS", "Django", "MySQL"],
            links: [renderGitTablero, renderLinkTablero],
            images: [
                imagenTableroUno,
                imagenTableroDos,
                imagenTableroTres,
                imagenTableroCuatro,
            ],
            content:
                "Administra tus tareas, crea, elimina, revisa y edita tu tarea, crea una cuenta, ingresa y cierra sesión. Versión prueba disponible.",
        },
        {
            title: "Llamada a API de paises",
            links: [renderGitPaises, renderWebPigeon, renderWebPexels],
            technologies: ["React", "CSS"],
            images: [
                imagenPaisesUno,
                imagenPaisesDos,
                imagenPaisesTres,
                imagenPaisesCuatro,
                imagenPaisesCinco,
            ],
            content:
                "Busca algún país y obten información relevante, continente, gentilicio, ubicación (con pigeon-maps), etc. Usando la API de Restcountries para la información de los países y la API de Pexels para las imagenes. ",
        },
        {
            title: "Infinite scroller",
            links: [renderGitScroller, renderWebGiphy],
            technologies: ["React", "CSS"],
            images: [
                imagenScrollerUno,
                imagenScrollerDos,
                imagenScrollerTres,
                imagenScrollerCuatro,
            ],
            content:
                "Implementación de infinite scroller usando Intersection Observer y useRef, obteniendo gifs de la api de Giphy. Implementación de una barra de navegación y un dark mode con useContext y variables css.",
        },
        {
            title: "Recomendación de series y películas",
            links: [renderGitRecomendacion, renderWebKaggle],
            technologies: ["Python"],
            images: [imagenRecomendacionUno, imagenRecomendacionDos],
            content:
                "Implementacion de un modelo para la recomendación de series y películas usando Python y varias bibliotecas entre ellas pandas y sklearn. Se usó un vectorizador Tf-idf y similitud de coseno para medir la similitud entre los vectores. Data set tomado de kaggle.",
        },
    ];

    const renderProject = (project) => {
        return (
            <Project project={project} isOpen={isOpen} setIsOpen={setIsOpen} />
        );
    };

    return (
        <section id="proyectos">
            <StickyContainer items={projects} renderItem={renderProject} />
            <Modal
                isOpen={isOpen}
                closeModal={closeModal}
                style={
                    "hidden fixed z-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-5/6 rounded-lg bg-gradient-to-b from-gray-900 to-neutral-950  max-sm:h-1/2"
                }
            >
                <img
                    className="object-contain max-h-full max-w-full"
                    src={modalImage}
                />
            </Modal>
        </section>
    );
}
