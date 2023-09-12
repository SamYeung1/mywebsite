"use client"
import Image from 'next/image'
import Nav from "@/app/components/Nav";
import React, {useEffect, useState} from "react";
import {ProductCard} from "@/app/components/ProductCard";
import Section from "@/app/components/Section";
import {Link} from "@/app/components/svg/Link";
import {ExperienceBox} from "@/app/components/ExperienceBox";
import {Badge} from "@/app/components/Badge";

export default function Home() {
    let bannerRef = React.createRef<HTMLElement>();
    let [isTop, setIsTop] = useState(true);
    let [showGradient, setShowGradient] = useState(false);
    let [workExperience, setWorkExperience] = useState<Experience[]>([]);
    let [skills, setSkills] = useState<Skill[]>([]);
    useEffect(() => {
        let bannerHeight = bannerRef.current?.offsetHeight ?? 0;
        let handleScroll = () => {
            if (window.scrollY <= bannerHeight) {
                setShowGradient(window.scrollY !== 0);
                setIsTop(true);
            } else {
                setIsTop(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        fetch('/work.json')
            .then((res) => res.json())
            .then((data: APIResponse<Experience[]>) => {
                setWorkExperience(data.result ?? []);
            });
        fetch('/myskill.json')
            .then((res) => res.json())
            .then((data: APIResponse<Skill[]>) => {
                setSkills(data.result ?? []);
            });
    });
    return (
        <div>
            <header ref={bannerRef} className={'h-screen bg-banner bg-cover bg-center'}>
                <div
                    className={`absolute bg-gradient-to-b to-primary opacity-${showGradient ? 100 : 0} from-80% from-transparent w-full h-full`}></div>
                <Nav className={`backdrop-blur-sm backdrop-brightness-50 fixed ${isTop ? '' : 'bg-primary'}`}
                     menuItems={[
                         {name: 'Home', url: '#'},
                         {name: 'My Project', url: '#'}
                     ]}/>
            </header>
            <div className={'container p-8 bg-white shadow-sm rounded-lg text-primary'}>
                <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
                    <Section title={'About'}>
                        A developer with 4+ years working experience in different projects. Specializing
                        in Node.js and PHP, Backend development and application integration. Capable
                        at all aspects of development from project planning to requirements gathering
                        through to writing and testing code. Excellent Communication collaborating with
                        team members. Proficient in effectively resolving project risks and issues.
                        Demonstrates an approach to learning and readily embraces new technologies in
                        projects.
                    </Section>
                    <Section title={'Work Experience'}>

                        {workExperience.map((item: Experience, index: number) => (
                            <ExperienceBox key={index} title={item.title}
                                           period={item.date}
                                           skills={item.skills}
                                           description={item.description}/>
                        ))}
                    </Section>
                    <div className={'md:col-span-2'}>
                        <Section title={'My Skills'}>
                            {skills.map((skill: Skill, skill_index: number) => (
                                    <div key={`skill_${skill_index}`}>
                                        <span className={'text-sm font-bold'}>{skill.category.title}</span>
                                        <div className={'flex gap-2 flex-wrap my-2'}>
                                            {skill.skills.map((title: string,skill_item_index:number) => (<Badge key={`skill_item_${skill_item_index}`} title={title}/>))}
                                        </div>
                                    </div>
                                )
                            )}
                        </Section>
                    </div>
                </div>
            </div>
        </div>
    )
}
