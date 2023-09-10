"use client";
import { motion } from "framer-motion";

export default function UnderConstructionNotification() {
    return (
        <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{
            duration: .5, ease: "easeInOut"
        }} className='w-full flex justify-center items-center h-10 bg-secondary text-gray-700'>
            <p className='font-semibold lg:text-xl text-xs text-center'>The website is still under construction and it contains some dummy content for testing purposes, some features may not work as well</p>
        </motion.div>
    );
}