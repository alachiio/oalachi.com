"use client";
import { fadeInLeft } from "@/utils/animations"
import { Variants, motion, useAnimation, useInView } from "framer-motion"
import React, { useEffect, useRef } from "react"


// Define a mapping of HTML tags to motion components
const tagMap: Record<string, React.ElementType> = {
    "h1": motion.h1,
    "h2": motion.h2,
    "h3": motion.h3,
    "h4": motion.h4,
    "h5": motion.h5,
    "h6": motion.h6,
    "div": motion.div,
    "aside": motion.aside,
    "p": motion.p
}

export default function InViewAnimated(
    { tag, className, transition, variants, children }: { tag?: any, className?: string, transition?: object, variants?: Variants, children?: React.ReactNode }
) {

    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    const Tag = tagMap[tag] || motion.div

    return (
        <Tag
            className={className}
            ref={ref}
            variants={variants || fadeInLeft}
            initial="hidden"
            animate={controls}
            transition={transition || { duration: .3, ease: "easeInOut" }}
        >
            {children}
        </Tag>
    )
}