import '../globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Sam Yeung',
    description: 'Sam Yeung Personal Website',
    keywords: ['Sam Yeung', 'Software', 'Software Developer']
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header showBanner={true}/>
        <div className={'container my-4'}>
            <div className={'p-8 bg-white shadow-sm rounded-lg text-primary'}>{children}</div>
        </div>
        <Footer/>
        </body>
        </html>
    )
}
