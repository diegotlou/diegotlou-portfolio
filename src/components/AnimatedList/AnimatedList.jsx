import { motion } from "motion/react";
import AnimatedItem from "./AnimatedItem";

export default function AnimatedList({
    children,
    classname,
    style,
    items,
    renderItem,
}) {
    const navVariants = {
        visible: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        hidden: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    };

    return (
        <div className="@container h-full w-full">
            <motion.ul
                className={
                    style
                        ? style
                        : "h-full w-full flex justify-center items-center text-lg @max-md:flex-col @max-md:flex-wrap"
                }
                variants={navVariants}
            >
                {children
                    ? children
                    : items.map((item, i) => (
                          <AnimatedItem
                              key={
                                  "animatedlist-" +
                                  classname +
                                  "-" +
                                  i +
                                  "-" +
                                  i
                              }
                          >
                              {renderItem ? renderItem(item) : item}
                          </AnimatedItem>
                      ))}
            </motion.ul>
        </div>
    );
}
