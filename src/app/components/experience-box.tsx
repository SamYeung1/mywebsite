import React from 'react';
import LinkSvg from "@/app/components/svg/link-svg";
import {Badge} from "@/app/components/badge";

export function ExperienceBox({
                                  title,
                                  date,
                                  description,
                                  skills,
                                  url
                              }: Experience) {
    return <div className={'flex justify-between md:flex-row flex-col'}>
        <span className={'mr-8 w-52 font-light md:my-0 my-1'}>{date}</span>
        <div className={'flex flex-col w-full'}>
            <a className={'font-bold text-left md:my-0 my-1'} href={url} target={'_blank'}>{title}<LinkSvg/></a>
            <span className={'font-light text-justify'}>
                                   {description}
                                </span>
            <div className={'py-4 flex flex-wrap gap-2'}>
                {skills.map((skill: string, index: number) => (
                    <Badge key={`skill_${index}`} title={skill}/>))}
            </div>
        </div>
    </div>
}
