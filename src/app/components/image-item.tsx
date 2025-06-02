import {motion, Variants, useAnimation} from "framer-motion";
import {useCallback} from "react";

const animationVariant: Variants = {
    hidden: {
        opacity: 0,
        y: '100%',
        transition: {
            ease: "easeInOut"
        }
    },
    show: {
        opacity: 1,
        y: '0%',
        transition: {
            ease: "easeInOut"
        }
    }
}
export default function ImageItem({imageUrl, title}: ImageItemProp) {
    const controls = useAnimation();
    const handleHoverStart = useCallback(() => {
        controls.start("show");
    }, [controls]);

    const handleHoverEnd = useCallback(() => {
        controls.start("hidden");
    }, [controls]);
    return <div className={`cursor-pointer relative rounded-lg overflow-hidden w-full h-64`} onMouseEnter={handleHoverStart}
                onMouseLeave={handleHoverEnd}>
        <img draggable={false} src={imageUrl} className={"w-full absolute top-2/4 -translate-y-2/4"}/>
        <motion.div variants={animationVariant} initial={"hidden"} animate={controls}
                    className={"bg-black/50 text-white absolute top-0 w-full h-full flex items-center justify-center"}>
            <span className={"section-title"}>{title}</span>
        </motion.div>
    </div>

}