import '../globals.css'
import type {Metadata} from 'next'
import React from "react";
import Header from "@/app/components/layout/header";


export const metadata: Metadata = {
    title: 'Sam Yeung',
    description: 'Sam Yeung Personal Website',
    keywords: ['Sam Yeung', 'Software', 'Software Developer','Software Engineer','Development','Software Development'],
}

export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
