import React from 'react';
import {LinkSvg} from "@/app/components/svg/link-svg";
import {Badge} from "@/app/components/badge";

export function ExperienceBox({
                                  title,
                                  date,
                                  description,
                                  skills,
                                  url
                              }: Experience) {
    return <div className={'flex justify-between'}>
        <span className={'mr-8 w-52 font-light'}>{date}</span>
        <div className={'flex flex-col text-left w-full'}>
            <a className={'font-bold'} href={url} target={'_blank'}>{title}<LinkSvg/></a>
            <span className={'font-light'}>
                                   {description}
                                </span>
            <div className={'py-4 flex flex-wrap gap-2'}>
                {skills.map((skill: string, index: number) => (
                    <Badge key={`skill_${index}`} title={skill}/>))}
            </div>
        </div>
    </div>
}
