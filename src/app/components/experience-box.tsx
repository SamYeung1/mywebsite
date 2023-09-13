import React from 'react';
import {LinkSvg} from "@/app/components/svg/link-svg";
import {Badge} from "@/app/components/badge";

export function ExperienceBox({
                                  title,
                                  period,
                                  description,
                                  skills
                              }: {
    title: string,
    period: string,
    description: string,
    skills: string[]
}) {
    return <div className={'flex justify-between'}>
        <span className={'mr-8 w-52 font-light'}>{period}</span>
        <div className={'flex flex-col text-left w-full'}>
            <a className={'font-bold'} href={'https://www.ey.com/'} target={'_blank'}>{title}<LinkSvg/></a>
            <span className={'font-light'}>
                                   {description}
                                </span>
            <div className={'py-4 flex flex-wrap gap-2'}>
                {skills.map((skill: string, index: number) => (
                    <Badge key={index} title={skill}/>))}
            </div>
        </div>
    </div>
}
