import React from "react";
import Section from "@/app/components/section";
import {ExperienceBox} from "@/app/components/experience-box";
import {Badge} from "@/app/components/badge";
import WorkExperienceJson from "@/json/work.json";
import SkillJson from "@/json/myskill.json";

export default function HomePage() {
    const workExperience:Experience[] = WorkExperienceJson.result;
    const skills:Skill[] = SkillJson.result;
    return (
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
            <Section title={'About'}>
                Experienced software developer with over 5 years of hands-on expertise in software development. Proficient in modern programming languages and frameworks, with a strong focus on Node.js, PHP, and TypeScript. Skilled in designing robust API structures, optimizing database performance, and delivering innovative, scalable solutions that enhance operational efficiency.
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
                                        <Badge key={`skill-item_${skill_item_index}`} title={title}/>))}
                                </div>
                            </div>
                        )
                    )}
                </Section>
            </div>
        </div>
    )
}
