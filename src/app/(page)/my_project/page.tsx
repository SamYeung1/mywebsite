"use client"
import React, {useEffect, useState} from "react";
import {ProductCard} from "@/app/components/product-card";
import Link from "next/link";
import {motion} from "framer-motion";

let cards: CardItem[] = [
    {id: '1', icon: '/cover.jpg', description: '', title: 'Wherever App'}
];
const cardVariants = {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
        scale: 0.6,
        y: 100,
        opacity: 0,
        transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
    }
};
export default function MyProjectPage() {
    return <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{exit: {transition: {staggerChildren: 0.1}}}}
    >
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
            {
                cards.map((card: CardItem, index: number) => (
                    <motion.div variants={cardVariants}>
                        <Link scroll={false} href={`my_project/${card.id}`}><ProductCard key={`production-card_${index}`}
                                                                          cardItem={card}/></Link>
                    </motion.div>))
            }
        </div>
    </motion.div>
}
