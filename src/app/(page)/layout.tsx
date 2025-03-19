"use client"
import '../globals.css'
import React from "react";
import Header from "@/app/components/layout/header";
import {AnimatePresence, motion, Variants} from 'framer-motion';

const containerVariants: Variants = {
    enter: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: 1
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    }
}
export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    return (

        <AnimatePresence mode={'wait'}>
            <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={containerVariants}
            >
                <Header showBanner={false}/>
                <div className={'container my-4 mt-24'}>
                    <div className={'p-8 bg-white shadow-sm rounded-lg text-primary'}>{children}</div>
                </div>
            </motion.div>
        </AnimatePresence>

    )
}
