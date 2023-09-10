import React from "react";

export default function WorkExperienceItem({ className, date, title, company, children }: { className?: string, date: string, title: string, company: string, children?: React.ReactNode }) {
    return (
        <li className={className || `mb-10 ms-4`}>
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 dark:border-white bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-slate-500 dark:text-slate-300">
                <i className="fa-solid fa-calendar-days me-1"></i> {date}
            </time>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h2>
            <h5 className="mb-3 text-sm font-normal leading-none text-slate-500 dark:text-slate-300">
                <i className="fa-solid fa-building me-1"></i> {company}
            </h5>
            <div className="mb-4 text-base font-normal text-slate-500 dark:text-slate-300">
                {children}
            </div>
        </li>
    )
}