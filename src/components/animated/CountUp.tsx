"use client";
import { useState, useEffect } from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function CountUpComponent({ end, duration = 2, delay = .5 }: { end: number, duration?: number, delay?: number }) {
    const [inViewRef, inView] = useInView({
        triggerOnce: true, // This ensures that the animation triggers only once when the element enters the viewport.
    });
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (inView) {
            const timeoutId = setTimeout(() => {
                setStartAnimation(true);
            }, delay * 1000);

            // Clear the timeout if the component unmounts before the delay is over.
            return () => clearTimeout(timeoutId);
        }
    }, [inView, delay]);

    return (
        <span ref={inViewRef}>
            {startAnimation  ? <CountUp end={end} duration={duration} /> : '..'}
        </span>
    )
}