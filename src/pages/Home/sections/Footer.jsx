export default function Footer() {
    return (
        <section className="h-64 w-full">
            <footer className="bg-neutral-900 h-full w-full border-t-2 border-blue-300">
                <div className="h-3/4 w-full flex justify-center items-center">
                    <p className="font-roboto text-xl text-center text-white opacity-75">
                        Cualquier retroalimentación es bienvenida. Iconos
                        obtenidos de
                        <a
                            className="font-mono"
                            href="https://www.svgrepo.com/"
                        >
                            {" "}
                            svgrepo.com
                        </a>
                        . Modelo 3D hecho por{" "}
                        <a
                            className="font-mono"
                            href="https://sketchfab.com/thcyrax"
                        >
                            Thcyrax
                        </a>
                        .
                    </p>
                </div>
                <div className="h-1/4 w-5/6 border-t-2 border-blue-300/35 py-5 m-auto">
                    <p className="font-roboto text-2xs text-center text-white opacity-30">
                        Hecho con React, Motion y Tailwind CSS
                    </p>
                </div>
            </footer>
        </section>
    );
}
