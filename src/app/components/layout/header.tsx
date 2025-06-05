"use client"
import Nav from "@/app/components/nav";
import React from "react";
import {useScroll} from "@/app/lib/use-scroll";

export default function Header({showBanner}: { showBanner: boolean }) {
    const scrolled = useScroll(200);
    return <header className={`${showBanner ? 'bg-banner bg-cover bg-center relative' : 'absolute top-0'} z-50`} style={{height:(showBanner ? '80vh' : 'auto')}}>
        {showBanner ? <div
            className={`absolute bg-gradient-to-b to-primary from-transparent w-full h-32 bottom-0`}></div> : null}
        <Nav
            className={`backdrop-blur-sm backdrop-brightness-50 fixed ${showBanner ? (scrolled ? 'bg-primary' : '') : 'bg-primary'}`}
            menuItems={[
                {name: 'Home', url: '/'},
                {name: 'My Project', url: '/projects'}
            ]}/>
    </header>
}
