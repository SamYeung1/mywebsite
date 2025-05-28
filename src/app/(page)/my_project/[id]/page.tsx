"use client"
import {AnimationControls, motion, useAnimation, useInView, Variants} from 'framer-motion';
import React, {LegacyRef, ReactNode, RefObject, useEffect, useRef, useState} from "react";
import moment from "moment";
import {PencilSvg} from "@/app/components/svg/pencil";

const contentVariants: Variants = {
    initial: {scale: 0.96, opacity: 0},
    visible: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: {duration: 0.5, ease: "easeOut"},
    },
};
export default function ProjectDetailPage({params}: { params: { id: string } }) {
    let [productItem, setProductItem] = useState<CardItem>();
    useEffect(() => {
        fetch('/project.json')
            .then((res) => res.json())
            .then((data: APIResponse<CardItem[]>) => {
                setProductItem(data.result.find((item) => item.id === params.id));
            });
    }, []);
    return productItem ? <div>
        <div className={'flex flex-col'}>
            <div className={'flex flex-row justify-between'}>
                <label
                    className={'text-primary text-3xl font-bold uppercase'}>{productItem?.title}
                </label>
                <div className={'flex flex-row'}>
                    <label
                        className={'font-normal text-[13px] text-gray-400'}>{moment(productItem?.createdAt).format('Do MMMM YYYY')}</label>
                </div>
            </div>
            <hr className={'my-2'}/>
            <label className={'font-normal text-xl text-primary'}>{productItem?.description}</label>
        </div>
        {
            productItem?.contentItems?.map((item: ContentItem, index) => (
                <Section key={`productItem_${index}`} image={item.icon}
                         content={item.description}
                         title={item.title} bannerRight={index % 2 == 0}/>
            ))
        }</div> : <div>Project does not exist</div>
}


function Section({image, title, content, bannerRight}: {
    image: string,
    title: string,
    content: string,
    bannerRight?: boolean
}) {
    const control: AnimationControls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    useEffect(() => {
        if (isInView) {
            control.start('visible');
        }
    }, [control, isInView]);
    return <motion.div ref={ref} initial={'initial'} animate={control} variants={contentVariants}>
        <div
            className={`py-3 flex ${bannerRight ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col m-5 items-center gap-4`}>
            <img alt={title} className={'rounded'} src={image}/>
            <div className={'flex flex-col w-full'}>
                <label className={'text-2xl font-bold'}>{title}</label>
                <label className={'font-light text-2xl'}>{content}</label>
            </div>
        </div>
    </motion.div>
}

