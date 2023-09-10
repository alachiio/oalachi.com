import InViewAnimated from '@/components/animated/InViewAnimated';
import { fadeInUp } from '@/utils/animations';
import { Archivo_Black } from 'next/font/google';
import React from 'react';
const archivoBlack = Archivo_Black({ weight: "400", subsets: ['latin'] })

interface Props {
    beforeClassName?: string,
    h1ClassName?: string,
    h3ClassName?: string,
    h1: any,
    h3: any,
};

const SectionTitle: React.FC<Props> = ({ beforeClassName, h1ClassName, h3ClassName, h1, h3 }) => {
    return (
        <div className='flex lg:flex-row lg:gap-0 flex-col gap-3 items-center justify-between mb-10'>
            <InViewAnimated tag="h3" variants={fadeInUp} className={`relative text-4xl leading-tight  before:content-[''] before:absolute before:-top-2 before:-left-4 before:-z-10 before:w-14 before:h-14 before:rounded-full ${archivoBlack.className} ${h3ClassName ?? 'text-slate-900 dark:text-slate-300'} ${beforeClassName ?? 'before:bg-slate-50 before:dark:bg-slate-700'}`}>{h3}</InViewAnimated>
            <InViewAnimated tag="h1" transition={{ duration: .3, delay: .3, ease: "easeInOut" }} className={`lg:text-8xl text-5xl ${h1ClassName ?? 'text-slate-50 dark:text-slate-700'} uppercase ${archivoBlack.className}`}>{h1}</InViewAnimated>
        </div>
    );
}

export default SectionTitle;