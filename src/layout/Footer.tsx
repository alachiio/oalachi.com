import Link from "next/link";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";

export default function Footer() {
    return (
        <footer className='py-16 bg-slate-200 dark:bg-slate-950 relative z-0'>
            <div className='container lg:max-w-screen-xl lg:px-0 px-10 mx-auto'>
                <SectionTitle h3={<Link href={'/'} className='logo flex items-center gap-3'>
                    <Image
                        className="relative"
                        src="/logo.svg"
                        alt="Omar Alachi Logo"
                        width={50}
                        height={37}
                        priority
                    />
                    <h3 className={`font-semibold text-2xl text-primary`}>Omar <span className='text-orange-400'>Alachi</span></h3>
                </Link>} h1="Contact" beforeClassName='before:bg-slate-200 before:dark:bg-slate-950' />
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <div className='flex flex-col gap-6'>
                        <h3 className='flex items-center gap-3 text-slate-800 dark:text-white font-semibold text-lg'>
                            <span className='flex justify-center items-center w-8 h-8 rounded-full bg-primary'>
                                <i className='text-white fa-solid fa-map-pin'></i>
                            </span>
                            <strong>Address</strong>
                        </h3>
                        <p className='text-slate-800 dark:text-white leading-8'>
                            Istanbul/Turkey
                        </p>
                    </div>
                    <ul className='flex flex-col gap-6'>
                        <li className='flex items-center gap-3 text-slate-800 dark:text-white font-semibold'>
                            <span className='flex justify-center items-center w-8 h-8 rounded-full bg-primary'>
                                <i className='text-white fa-solid fa-envelope'></i>
                            </span>
                            <strong>Email : </strong>
                            <a href='mailto:omer.alachi@gmail.com' target='_blank' className='text-slate-500 dark:text-slate-300'>omer.alachi@gmail.com</a>
                        </li>
                        <li className='flex items-center gap-3 text-slate-800 dark:text-white font-semibold'>
                            <span className='flex justify-center items-center w-8 h-8 rounded-full bg-primary'>
                                <i className='text-white fa-solid fa-envelope'></i>
                            </span>
                            <strong>Linkedin : </strong>
                            <a href='https://linkedin.com/in/alachiio' target='_blank' className='text-slate-500 dark:text-slate-300'>@alachiio</a>
                        </li>
                    </ul>
                    <ContactForm />
                </div>
            </div>
        </footer>
    );
}