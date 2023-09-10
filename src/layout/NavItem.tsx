"use client";
import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    href: string,
    className?: string,
    children: any
}

const NavItem: React.FC<Props> = ({ href, className, children }) => {
    const pathName = usePathname();
    return (
        <li className={`text-slate-800 dark:text-white group ${(pathName === href) && 'active'}`}>
            <Link href={href} className={`font-semibold group-[.active]:border-b  group-[.active]:text-primary group-[.active]:border-b-primary group-[.active]:dark:text-secondary group-[.active]:dark:border-b-secondary hover:text-primary-focus ${className}`}>{children}</Link>
        </li>
    )
}

export default NavItem;

