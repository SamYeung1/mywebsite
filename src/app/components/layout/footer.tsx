import LinkedinSvg from "@/app/components/svg/linkedin-svg";
import React from "react";

export default function Footer(){
    return <div className={'w-full h-40 p-4 bg-footer'}>
        <div className={'container flex flex-col md:flex-row justify-center items-center text-secondary'}>
            <div className={'flex-auto'}><a
                className={'hover:opacity-100 opacity-70 transition duration-300 inline-block'}
                href={'https://www.linkedin.com/in/sam-yeung-0626531a0/'}><LinkedinSvg/></a></div>
            <div className={'flex-1'}></div>
            <div className={'flex-auto text-center md:text-right text-sm'}>Copyright © {new Date().getFullYear()} Sam Yeung. All
                Rights Reserved
            </div>
        </div>

    </div>
}
