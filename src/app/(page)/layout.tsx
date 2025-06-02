import '../globals.css'
import type {Metadata} from 'next'
import React from "react";
import Header from "@/app/components/layout/header";


export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div className={"bg-white p-8"}>
            {children}
        </div>
    )
}
