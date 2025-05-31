"use client"
import React, {useEffect, useRef, useState} from "react";
import Section from "@/app/components/section";
import {ExperienceBox} from "@/app/components/experience-box";
import {Badge} from "@/app/components/badge";
import SkillJson from "../../../public/myskill.json";
import AnimatedDiv from "@/app/components/animated-div";

export default function HomePage() {
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

    },[]);
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
                        optimizing
                        database performance, and delivering innovative, scalable solutions that enhance operational
                        efficiency.</p>
                    <button className={"btn-primary"} onClick={handleScroll}>View More</button>
                </AnimatedDiv>
                <div className={"flex-1"}></div>
            </div>
        </div>
        <div className={"w-screen md:p-24 p-8 md:grid md:grid-cols-2 bg-white text-gray-800 gap-4"} ref={sectionContent}>
            <AnimatedDiv className={"mb-8"}>
                <h1 className={"section-title mb-8 text-secondary"}>About Me</h1>
                <p className={"text-xs md:text-lg"}>Detail-oriented and analytical Software Developer with extensive
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
            </AnimatedDiv>
            <AnimatedDiv className={"mb-8"}>
                <h1 className={"section-title mb-8 text-secondary"}>Work Experience</h1>
                <div>
                    {workExperience.map((workExperience,index) => (
                        <ExperienceBox
                            key={`workExperience_${index}`}
                            title={workExperience.title}
                            date={workExperience.date}
                            description={workExperience.description}
                            skills={workExperience.skills}
                            url={workExperience.url}/>))
                    }
                </div>
            </AnimatedDiv>
        </div>
    </>
}
