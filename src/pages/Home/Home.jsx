import { motion } from "motion/react";
import { Scrollprogress, Sidebar } from "../../components";
import { ModalImageProvider } from "../../contexts/ModalImageContext";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Skills from "./sections/Skills";
import Profile from "./sections/Profile";
import Experience from "./sections/Experience";
import Background from "../../components/Lines/Background";

export default function Home() {
    return (
        <>
            <motion.div className="h-dvh max-w-full fixed inset-0 -z-10 bg-neutral-950" />
            <header>
                <Scrollprogress />
            </header>
            <Background />
            <Sidebar nombre={"menu-home"} />
            <Profile />
            <Skills />
            <Experience />
            <ModalImageProvider>
                <Projects />
            </ModalImageProvider>
            <Footer />
        </>
    );
}
