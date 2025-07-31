import { motion } from "motion/react";

export default function Linkedin({ href, anchorDescription, style }) {
    const variants = {
        whileHover: {
            stroke: "#7DD3FC",
        },
    };

    return (
        <motion.a
            className={
                style
                    ? style
                    : "relative flex justify-center size-9 cursor-pointer"
            }
            href={href}
            target="_blank"
            whileHover="whileHover"
            variants={{ whileHover: { scale: 1.2 } }}
        >
            <svg
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
                        d="M18 22V15C18 13.8954 17.1046 13 16 13C14.8954 13 14 13.8954 14 15V22H10"
                        stroke="#fafafa"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={variants}
                    ></motion.path>
                    <motion.path
                        d="M10 22V15C10 11.6863 12.6863 9 16 9C19.3137 9 22 11.6863 22 15V22H18"
                        stroke="#fafafa"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={variants}
                    ></motion.path>
                    <motion.rect
                        x="3"
                        y="9"
                        width="4"
                        height="13"
                        stroke="#fafafa"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={variants}
                    ></motion.rect>
                    <motion.circle
                        cx="5"
                        cy="4"
                        r="2"
                        stroke="#fafafa"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={variants}
                    ></motion.circle>
                </g>
            </svg>
            {anchorDescription && (
                <motion.span
                    className="absolute opacity-0 mt-2 hidden border-2 rounded-md min-h-8 px-2 w-max max-w-32 left-1/2 transform -translate-x-1/2 top-full"
                    variants={{
                        whileHover: { display: "block", opacity: 0.75 },
                    }}
                >
                    {anchorDescription}
                </motion.span>
            )}
        </motion.a>
    );
}
