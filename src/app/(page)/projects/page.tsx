"use client"
import React, {useEffect, useState} from "react";
import {ProductCard} from "@/app/components/product-card";
import Link from "next/link";
import {motion, Variants} from "framer-motion";
import ImageItem from "@/app/components/image-item";

const cardVariants: Variants = {
    initial: {scale: 0.96, opacity: 0},
    enter: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: {duration: 0.5, ease: "easeOut"},
    },
    exit: {
        scale: 0.6,
        y: 100,
        opacity: 0,
        transition: {duration: 0.5, ease: "easeIn"},
    },
};
export default function MyProjectPage() {
    let [productItems, setProductItems] = useState<CardItem[]>([]);
    useEffect(() => {
        fetch('/project.json')
            .then((res) => res.json())
            .then((data: APIResponse<CardItem[]>) => {
                setProductItems(data.result ?? []);
            });
    }, []);
    return <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
        {
            productItems.map((project: CardItem, index: number) => (
                <Link scroll={false} href={`/projects/${project.id}`} key={`project_${index}`}>
                    <ImageItem key={`project_${index}`} imageUrl={project.icon}
                               title={project.title}/>
                </Link>))
        }
    </div>
}
