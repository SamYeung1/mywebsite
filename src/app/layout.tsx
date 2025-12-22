import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import Footer from "@/app/components/layout/footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Sam Yeung',
    description: 'Sam Yeung Personal Website',
    keywords: ['Sam Yeung', 'Software', 'Software Developer', 'Software Engineer', 'FullStack Developer', 'Developer'],
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        <Footer/>
        </body>
        </html>
    )
}