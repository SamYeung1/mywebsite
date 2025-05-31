import {Variants, motion} from "framer-motion";
import React, {HTMLAttributes} from "react";

const variants: Variants = {
    hidden: {opacity: 0, y: 50, scale: 0.95},
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {duration: 0.8, ease: "easeOut", staggerChildren: 0.5, when: "beforeChildren"},
    },
};
export default function AnimatedDiv(props: React.PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
    return <motion.div variants={variants} initial={"hidden"} whileInView={"visible"} className={props.className}>
        {props.children}
    </motion.div>
}