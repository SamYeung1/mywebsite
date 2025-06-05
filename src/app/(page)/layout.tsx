"use client";
import '../globals.css'
import type {Metadata} from 'next'
import React, {useRef} from "react";
import Header from "@/app/components/layout/header";
import Nav from "@/app/components/nav";


export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    return (
        <div className={"bg-white"}>
            <Header showBanner={false}/>
            <div className={"pt-[calc(96px+16px)] p-4 md:px-20"}>
                {children}
            </div>
        </div>
    )
}
