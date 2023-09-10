"use client";
import React from "react";
import { Archivo_Black, Dancing_Script, Londrina_Shadow } from 'next/font/google';
import { motion } from 'framer-motion';
import InViewAnimated from "../animated/InViewAnimated";
import { fadeInUp, scale } from "@/utils/animations";

const archivoBlack = Archivo_Black({ weight: "400", subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'] });
const londrinaShadow = Londrina_Shadow({ weight: "400", subsets: ['latin'] });

export default function HeaderCTA() {
    return (
        <div className='flex flex-col lg:items-start items-center gap-3 lg:pt-0 pt-5'>
            <InViewAnimated tag="h5" className={`text-primary-focus font-semibold text-5xl ${dancingScript.className}`}
                transition={{ duration: .3, ease: "easeInOut" }}>Hello... </InViewAnimated>
            <div className='lg:text-7xl text-3xl flex flex-col gap-3'>
                <InViewAnimated tag="h1" className={`font-extrabold text-slate-800 dark:text-slate-200 ${archivoBlack.className}`}
                    transition={{ duration: .3, delay: .3, ease: "easeInOut" }}>I&apos;m Omar Alachi</InViewAnimated>
                <InViewAnimated tag="h1" className={`font-extrabold`}
                    transition={{ duration: .3, delay: .6, ease: "easeInOut" }}>
                    <span className={`text-slate-800 dark:text-slate-200 ${archivoBlack.className}`}>A</span> <span className={`text-primary ${londrinaShadow.className}`}>Full Stack Developer</span>
                </InViewAnimated>
            </div>
            <InViewAnimated tag="p" variants={fadeInUp} className={`my-6 lg:text-xl text-md lg:text-start text-center font-medium text-slate-800 dark:text-slate-200`}
                transition={{ duration: .3, delay: .9, ease: "easeInOut" }}>
                Senior Full Stack Developer with 6+ years of experience <br /> Obsessed with Laravel, Node, React and Vue
            </InViewAnimated>
        </div>
    )
}