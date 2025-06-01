import LinkedinSvg from "@/app/components/svg/linkedin-svg";
import React from "react";
import {GithubMark} from "@/app/components/svg/github-mark";

export default function Footer() {
    return <div className={'w-full h-40 p-4 footer text-gray-800'}>
        <div className={'container flex flex-col md:flex-row justify-center items-center gap-2'}>
            <div className={'flex-auto'}>
                <div className={"flex justify-start gap-2"}>
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
            <div className={'flex-1'}></div>
            <div className={'flex-auto text-center md:text-right text-sm'}>Copyright © {new Date().getFullYear()} Sam
                Yeung. All
                Rights Reserved
            </div>
        </div>

    </div>
}
