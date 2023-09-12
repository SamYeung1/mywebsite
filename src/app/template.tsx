"use client";
import React, {ReactNode, useEffect, useState} from "react";
import Nav from "@/app/components/Nav";
import LinkedinSVG from "@/app/components/svg/LinkedinSVG";

export default function MainTemplate({children}: { children: ReactNode }) {
    let bannerRef = React.createRef<HTMLElement>();
    let [isTop, setIsTop] = useState(true);
    let [showGradient, setShowGradient] = useState(false);
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
    });
    return <div>
        <header ref={bannerRef} className={'h-screen bg-banner bg-cover bg-center'}>
            <div
                className={`absolute bg-gradient-to-b to-primary opacity-${showGradient ? 100 : 0} from-80% from-transparent w-full h-full`}></div>
            <Nav className={`backdrop-blur-sm backdrop-brightness-50 fixed ${isTop ? '' : 'bg-primary'}`}
                 menuItems={[
                     {name: 'Home', url: '/'},
                     {name: 'My Project', url: '/my_project'}
                 ]}/>
        </header>
        <div className={'container my-4'}>
            <div className={'p-8 bg-white shadow-sm rounded-lg text-primary'}>{children}</div>
        </div>
        <div className={'w-full h-40 p-4 bg-footer'}>
            <div className={'container flex flex-col md:flex-row justify-center items-center text-secondary'}>
                <div className={'flex-auto'}><a
                    className={'hover:opacity-100 opacity-70 transition duration-300 inline-block'}
                    href={'https://www.linkedin.com/in/sam-yeung-0626531a0/'}><LinkedinSVG/></a></div>
                <div className={'flex-1'}></div>
                <div className={'flex-auto text-center md:text-right text-sm'}>Copyright © {new Date().getFullYear()} Sam Yeung. All
                    Rights Reserved
                </div>
            </div>

        </div>
    </div>
}
