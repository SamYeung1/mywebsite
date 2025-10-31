"use client";
import {AnimatePresence, motion, Variants} from "framer-motion";
import {ReactNode, useContext, useRef} from "react";
import {LayoutRouterContext} from "next/dist/shared/lib/app-router-context";
import {usePathname} from "next/navigation";

const variants: Variants = {
    initial: {
        y:-100,
        opacity: 0,
    },
    enter: {
        y:0,
        opacity: 1,
    },
    exit: {
        y:0.5,
        opacity: 0,
    }
}
const PageTransitionEffect = ({children}: { children: ReactNode }) => {
    const key = usePathname();
    return (<AnimatePresence mode={"wait"}>
        <motion.div key={key} variants={variants} initial={"initial"} animate={"enter"} exit={"exit"} transition={{duration:1}}>
            <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
    </AnimatePresence>)
}
export function FrozenRouter({children}: { children: ReactNode }) {
    const context = useContext(LayoutRouterContext ?? {});
    const frozen = useRef(context).current;

    if (!frozen) {
        return <>{children}</>;
    }
    return (<LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>)
}
export default PageTransitionEffect;

