"use client";
import React from "react";
import InViewAnimated from "../animated/InViewAnimated";
import { fadeInUp } from "@/utils/animations";

export default function WorkExperience({ children }: { children?: React.ReactNode[] }) {
    return (
        <ol className="relative border-l border-gray-500 dark:border-gray-200">
            {children && children.map((item, index) => (
                <InViewAnimated key={`experience-${index}`}
                    variants={fadeInUp}
                    transition={{ duration: .3, ease: "easeInOut" }}>
                    {item}
                </InViewAnimated>
            ))}
        </ol>
    )
}