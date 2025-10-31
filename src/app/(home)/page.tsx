"use client"
import React, {useEffect, useRef, useState} from "react";
import Section from "@/app/components/section";
import {ExperienceBox} from "@/app/components/experience-box";
import {Badge} from "@/app/components/badge";
import SkillJson from "../../../public/myskill.json";
import AnimatedDiv from "@/app/components/animated-div";
import {motion, Variants} from "framer-motion";
import LinkedinSvg from "@/app/components/svg/linkedin-svg";
import {GithubMark} from "@/app/components/svg/github-mark";

export default function HomePage() {
    const experienceBoxAnimationVariants: Variants = {
        initial: {y: -100, opacity: 0},
        visible: {y: 1, opacity: 1,transition:{delay:0.5}},
    };
    const sectionContent = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        sectionContent.current?.scrollIntoView({behavior: "smooth"});
    }
    let [workExperience, setWorkExperience] = useState<Experience[]>([]);
    let [skills, setSkills] = useState<Skill[]>([]);
    useEffect(() => {
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

    }, []);
    return <>
        <div
            className={"h-screen w-screen text-white bg-[url(/cover.jpg)] bg-cover bg-center bg-fixed flex items-center"}>
            <div className={"bg-black/50 backdrop-blur md:flex"}>
                <AnimatedDiv className={"flex-1 text-center md:text-left md:p-24 p-8"}>
                    <h1 className={"text-4xl md:text-7xl font-bold"}>Sam Yeung</h1>
                    <p className={"text-2xl md:text-4xl"}>Software Developer</p>
                    <p className={"text-xs md:text-lg my-8"}>Experienced software developer with over 6 years of
                        hands-on
                        expertise in software development. Proficient in modern programming languages and frameworks,
                        with a
                        strong focus on Node.js, PHP, and TypeScript. Skilled in designing robust API structures,
                        optimising
                        database performance, and delivering innovative, scalable solutions that enhance operational
                        efficiency.</p>
                    <div className={"flex flex-col md:flex-row items-center md:justify-start gap-4"}>
                        <button className={"btn-primary"} onClick={handleScroll}>View More</button>
                        <div className={"grid grid-cols-2 gap-2"}>
                            <a
                                className={'hover:opacity-100 opacity-70 transition duration-300 inline-block'}
                                target={"_blank"}
                                href={'https://www.linkedin.com/in/chun-sing-yeung-0626531a0'}><LinkedinSvg/></a>
                            <a
                                className={'hover:opacity-100 opacity-70 transition duration-300 inline-block'}
                                target={"_blank"}
                                href={'https://github.com/SamYeung1'}><GithubMark/></a>
                        </div>
                    </div>
                </AnimatedDiv>
                <div className={"flex-1"}></div>
            </div>
        </div>
        <div className={"w-screen md:p-24 p-8 bg-white text-gray-800"} ref={sectionContent}>
            <AnimatedDiv className={"md:grid md:grid-cols-2 gap-4"}>
                <div className={"mb-8"}>
                    <h1 className={"section-title mb-8 text-secondary"}>About Me</h1>
                    <p>Detail-oriented and analytical Software Developer with extensive
                        experience in designing and implementing scalable, robust, and
                        efficient backend systems. Proficient in backend development with an understanding of front-end
                        technologies. Expertise in developing
                        robust and scalable applications using cutting-edge technologies as well as troubleshooting,
                        debugging, and optimising code for
                        maximum performance. Ability to analyse end-user needs and tailor solutions to enhance system
                        functionality. Committed to staying
                        updated with the latest technologies and best practices in software development to deliver
                        innovative solutions. Eager to leverage solid
                        technical acumen and a collaborative mindset in contributing to dynamic development teams.</p>
                </div>
                <div className={"mb-8"}>
                    <h1 className={"section-title mb-8 text-secondary"}>Work Experience</h1>
                    <div>
                        {workExperience.map((workExperience, index) => (
                            <motion.div key={`workExperience_${index}`} variants={experienceBoxAnimationVariants} initial={"initial"} whileInView={"visible"}>
                                <ExperienceBox
                                    title={workExperience.title}
                                    date={workExperience.date}
                                    description={workExperience.description}
                                    skills={workExperience.skills}
                                    url={workExperience.url}/>
                            </motion.div>))
                        }
                    </div>
                </div>
            </AnimatedDiv>
            <AnimatedDiv className={"mb-8 col-span-2"}>
                <h1 className={"section-title mb-8 text-secondary"}>My Skills</h1>
                <div>
                    {skills.map((skill: Skill, skill_index: number) => (
                            <div key={`skill_${skill_index}`}>
                                <span className={'text-sm font-bold'}>{skill.category.title}</span>
                                <div className={'flex gap-2 flex-wrap my-2'}>
                                    {skill.skills.map((title: string, skill_item_index: number) => (
                                        <Badge key={`skill_item_${skill_item_index}`} title={title}/>))}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </AnimatedDiv>
        </div>
    </>
}
