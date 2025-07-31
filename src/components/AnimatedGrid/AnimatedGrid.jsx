import { motion } from "motion/react";
import AnimatedGridItem from "./AnimatedGridItem";

export default function AnimatedGrid({
    children,
    className,
    gridStyle,
    items,
    renderItem,
}) {
    const defaultStyle = items
        ? `grid-rows-${items.length} grid-flow-row auto-rows-max`
        : "grid-rows-8 grid-flow-row auto-rows-max";

    const variants = {
        visible: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        hidden: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    };

    return (
        <motion.div
            className={gridStyle ? gridStyle : `grid gap-4 ${defaultStyle}`}
            variants={variants}
        >
            {items
                ? items.map((item, i) => (
                      <AnimatedGridItem
                          key={
                              "animatedgriditem-" +
                              className +
                              "-" +
                              i +
                              "-" +
                              i
                          }
                          gridItemStyle={item.class}
                      >
                          {renderItem ? renderItem(item, i) : item}
                      </AnimatedGridItem>
                  ))
                : children}
        </motion.div>
    );
}
