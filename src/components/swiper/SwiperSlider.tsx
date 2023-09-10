"use client";
import React from "react";

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/styles/swiper.css'
import { SwiperOptions } from "swiper/types";

interface Props {
    spaceBetween?: number,
    slidesPerView?: number,
    paginationClickable?: boolean,
    scrollbarDraggable?: boolean,
    breakpoints?: {
        [width: number]: SwiperOptions;
        [ratio: string]: SwiperOptions;
    },
    children: React.ReactNode[]
}

const SwiperSlider: React.FC<Props> = ({ spaceBetween = 30, slidesPerView = 1, paginationClickable = true, breakpoints, children }) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: paginationClickable }}
            breakpoints={breakpoints}
        >

            {children.map((slide, index) => (
                <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperSlider;