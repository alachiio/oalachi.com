import React from "react";

import InViewAnimated from "@/components/animated/InViewAnimated";
import { fadeInUp } from "@/utils/animations";
import { Archivo_Black, Dancing_Script, Londrina_Shadow } from 'next/font/google';

const archivoBlack = Archivo_Black({ weight: "400", subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'] });

export default function PageTitle({ className, h5, h1, p, children }: { className?: string, h5: React.ReactNode, h1: React.ReactNode, p: React.ReactNode, children?: React.ReactNode }) {
    return (
        <div className="relative z-0 h-96">
            <div className={`${className || 'fixed w-full top-36'}`}>
                <div className='flex flex-col lg:items-start items-center gap-3 lg:pt-0 pt-5 lg:ps-32'>
                    <InViewAnimated tag="h5" className={`text-primary-focus font-semibold text-5xl capitalize ${dancingScript.className}`}
                        transition={{ duration: .3, ease: "easeInOut" }}>{h5}</InViewAnimated>
                    <div className='lg:text-7xl text-3xl flex flex-col gap-3'>
                        <InViewAnimated tag="h1" className={`font-extrabold text-slate-800 dark:text-slate-200 capitalize ${archivoBlack.className}`}
                            transition={{ duration: .3, delay: .3, ease: "easeInOut" }}>{h1}</InViewAnimated>
                    </div>
                    <InViewAnimated tag="p" variants={fadeInUp} className={`my-6 lg:text-xl text-lg lg:text-start text-center font-medium text-slate-800 dark:text-slate-200`}
                        transition={{ duration: .3, delay: .9, ease: "easeInOut" }}>
                        {p}
                    </InViewAnimated>
                </div>
            </div>
        </div>
    )
}