"use client"
import React, {useEffect, useState} from "react";
import Section from "@/app/components/section";
import {ExperienceBox} from "@/app/components/experience-box";
import {Badge} from "@/app/components/badge";

export default function HomePage() {
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
    return (
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
                                    {skill.skills.map((title: string, skill_item_index: number) => (
                                        <Badge key={`skill_item_${skill_item_index}`} title={title}/>))}
                                </div>
                            </div>
                        )
                    )}
                </Section>
            </div>
        </div>
    )
}
