"use client";

import { useEffect, useState } from 'react';
import NavItem from "./NavItem";
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('is-nav-open', !isOpen);
    }

    useEffect(() => {
        if (isOpen)
            toggle()
    }, [pathName]);

    return (
        <nav className={`navigation flex grow justify-end lg:justify-center items-center relative z-50`}>
            <ul className={`flex md:items-center md:flex-row md:!bg-inherit bg-slate-200 dark:bg-slate-700  md:!p-0 px-5 pt-5 flex-col gap-6 md:static fixed right-0 top-20 md:mt-0 bottom-0 md:w-fit w-48 transition-all duration-300 transform md:translate-x-0 ${!isOpen && 'translate-x-48'}`}>
                <NavItem href='/'>
                    Home
                </NavItem>
                <NavItem href='/about'>
                    About
                </NavItem>
                <NavItem href='/experience'>
                    Work Experience
                </NavItem>
                {/* <NavItem href='/blog'>
                    Blog
                </NavItem> */}
                {/* <NavItem href='/contact'>
                    Contact
                </NavItem> */}
            </ul>
            <button className='text-black dark:text-white hover:text-primary text-xl md:hidden' onClick={toggle}>
                <i className='fa-solid fa-bars'></i>
            </button>
        </nav>
    )
}