import '../globals.css'
import type {Metadata} from 'next'
import React from "react";
import Header from "@/app/components/layout/header";


export const metadata: Metadata = {
    title: 'Sam Yeung',
    description: 'Sam Yeung Personal Website',
    keywords: ['Sam Yeung', 'Software', 'Software Developer']
}

export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header showBanner={true}/>
            <div className={'container my-4'}>
                <div className={'p-8 bg-white shadow-sm rounded-lg text-primary'}>{children}</div>
            </div>
        </>
    )
}
