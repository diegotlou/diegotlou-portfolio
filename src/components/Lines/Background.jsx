import Dot from "./Dot";

export default function Background() {
    const colors = ["#e11d48", "#7dd3fc"];

    return (
        <div className="fixed top-0 left-0 right-0 h-dvh w-full overflow-hidden flex justify-evenly flex-wrap -z-10">
            <Dot shadowColor={"#e11d48"} />
            <Dot shadowColor={"#7dd3fc"} />
            <Dot shadowColor={"#e11d48"} />
            <Dot shadowColor={"#7dd3fc"} />
            <Dot shadowColor={"#e11d48"} />
            <Dot shadowColor={"#7dd3fc"} />
            <Dot shadowColor={"#e11d48"} />
            <Dot shadowColor={"#7dd3fc"} />
            <Dot shadowColor={"#e11d48"} />
            <Dot shadowColor={"#7dd3fc"} />
            <Dot shadowColor={"#e11d48"} />
            <Dot shadowColor={"#7dd3fc"} />
            <Dot shadowColor={"#e11d48"} />
            <Dot shadowColor={"#7dd3fc"} />
            <Dot shadowColor={"#e11d48"} />
            <Dot shadowColor={"#7dd3fc"} />
            <Dot shadowColor={"#e11d48"} />
        </div>
    );
}
