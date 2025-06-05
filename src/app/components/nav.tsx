"use client";
import React, {useState} from "react";
import Link from 'next/link'
export default function Nav({
                                children,
                                menuItems,
                                className
                            }: {
    children?: React.ReactNode,
    menuItems: NavItem[],
    className?: string

}) {
    const [open, setOpen] = useState<boolean>(false);
    const menuButtonClick = (v: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(!open);
    };
    return <nav className={`text-white uppercase w-full ${className}`}>
        <div className={'flex flex-wrap justify-between items-center xl:mx-96 py-4 p-2 '}>
            <div className={'flex items-center text-white p-4'}>
                <span
                    className={'self-center text-2xl font-semibold whitespace-nowrap'}>Sam Yeung</span>
            </div>
            <button onClick={menuButtonClick} type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-1 hover:brightness-200 transition ease-in-out duration-300"
                    aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className={`${open ? '' : 'hidden'} md:block w-full md:w-auto`}>
                <ul className={'flex font-medium flex-col md:flex-row text-gray-300'}>
                    {
                        menuItems.map((item: NavItem, index: number) => (<li key={index}><Link
                            className={'block p-2 transition duration-300 rounded hover:text-white'}
                            href={item.url}>{item.name}</Link></li>))
                    }
                </ul>
            </div>


        </div>

    </nav>
}
