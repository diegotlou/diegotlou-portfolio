import { motion } from "motion/react";

export default function Copy({ onClick, buttonDescription }) {
    const variants = {
        whileHover: {
            borderColor: "#e11d4866",
            fill: "#e11d48",
        },
    };

    return (
        <motion.button
            className="border-2 rounded-md relative h-8 w-16 flex justify-center items-center cursor-pointer after:content-none "
            onClick={onClick}
            whileHover="whileHover"
            variants={variants}
        >
            <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <motion.path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z"
                        fill="#fafafa"
                        variants={variants}
                    ></motion.path>
                    <motion.path
                        d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z"
                        fill="#fafafa"
                        variants={variants}
                    ></motion.path>
                </g>
            </svg>
            {buttonDescription && (
                <motion.span
                    className="absolute opacity-0 mt-2 hidden border-2 rounded-md min-h-8 px-2 w-max max-w-32 left-1/2 transform -translate-x-1/2 top-full"
                    variants={{
                        whileHover: { display: "block", opacity: 0.75 },
                    }}
                >
                    {buttonDescription}
                </motion.span>
            )}
        </motion.button>
    );
}
