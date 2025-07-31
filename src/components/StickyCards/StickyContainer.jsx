import StickyCard from "./StickyCard";
import { motion } from "motion/react";

export default function StickyContainer({ items, renderItem }) {
    return (
        <motion.div
            className="w-full"
            initial="initial"
            whileInView="whileInView"
            viewport={{ amount: 0.5 }}
        >
            {items.map((item, i) => (
                <StickyCard key={`sticky-container-${i}`}>
                    {renderItem ? renderItem(item) : item}
                </StickyCard>
            ))}
        </motion.div>
    );
}
