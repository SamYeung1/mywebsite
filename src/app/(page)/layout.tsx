import '../globals.css'
import {Inter} from 'next/font/google'
import React from "react";
import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import {AnimatePresence} from "framer-motion";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (

        <html lang="en">
        <body className={inter.className}>
        <AnimatePresence mode={'wait'}>
            <Header showBanner={false}/>
            <div className={'container my-4 mt-24'}>
                <div className={'p-8 bg-white shadow-sm rounded-lg text-primary'}>{children}</div>
            </div>

            <Footer/>
        </AnimatePresence>
        </body>
        </html>

    )
}
