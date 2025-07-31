import AnimatedList from "./AnimatedList/AnimatedList";
import ImageSlider from "./ImageSlider";

export default function Project({ project, isOpen, setIsOpen }) {
    const renderTechnology = (technology) => {
        return (
            <div className="p-1 bg-rose-600 text-rose-100 rounded-xl px-2 py-0.5-">
                {technology}
            </div>
        );
    };

    const renderLinkFunction = (Icon) => {
        return <Icon />;
    };

    return (
        <div className="flex size-full max-sm:flex-col">
            <div className="h-full w-1/2 flex flex-col justify-center font-roboto max-sm:w-full">
                <h3 className="pl-7 pt-4 font-raleway text-2xl font-semibold text-sky-300 p-2 text-balance">
                    {project.title}
                </h3>
                <p className="p-2 font-roboto font-light text-pretty max-sm:text-sm">
                    {project.content}
                </p>
                <div className="p-2">
                    <AnimatedList
                        style={
                            "flex justify-center items-center gap-4 w-full list-none m-0 p-0"
                        }
                        items={project.links}
                        renderItem={renderLinkFunction}
                    />
                </div>
                <div className="max-h-28">
                    <AnimatedList
                        style={
                            "h-full w-full flex justify-center items-center flex-wrap text-2xs max-sm:text-sm"
                        }
                        items={project.technologies}
                        renderItem={renderTechnology}
                    />
                </div>
            </div>
            <div className="h-full w-1/2 max-sm:w-full">
                <ImageSlider images={project.images} setIsOpen={setIsOpen} />
            </div>
        </div>
    );
}
