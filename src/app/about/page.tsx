import CountUpComponent from "@/components/animated/CountUp";
import PolyShape2 from "@/components/header/PolyShape2";
import PageTitle from "@/layout/PageTitle";
import SectionTitle from "@/layout/SectionTitle";
import SocialMediaItem from "@/layout/SocialMediaItem";
import { Archivo_Black } from "next/font/google";
import Link from "next/link";
const archivoBlack = Archivo_Black({ weight: "400", subsets: ['latin'] })

export default function About() {
    return (
        <>
            <PageTitle h5="Learn" h1="About Me" p="Here is a brief to know more about my skills" />
            <section className="bg-white dark:bg-slate-900 py-16 relative z-10 min-h-screen">
                <div className='container lg:max-w-screen-xl lg:px-0 px-10 mx-auto'>
                    <div className='pt-8 flex lg:flex-row flex-col gap-8'>
                        <div className={`flex-1 bg-primary rounded-2xl shadow relative before:content-[''] before:absolute before:-z-10 before:w-full before:h-full before:bg-slate-200 before:dark:bg-slate-800 before:-top-5 before:-left-5 before:rounded-2xl`}>
                            <div className='lg:h-[450px] h-[350px] overflow-hidden px-8 pt-8'>
                                <PolyShape2 />
                            </div>
                        </div>
                        <div className='flex-1 rounded-2xl bg-slate-200 dark:bg-slate-800'>
                            <div className='p-8 flex flex-col lg:h-full lg:justify-between lg:gap-0 gap-6'>
                                <h3 className={`text-gray-900 dark:text-white capitalize lg:text-3xl text-xl ${archivoBlack.className}`}>Here&apos;s a summary</h3>
                                <p className='text-gray-900 dark:text-white lg:text-md text-sm'>
                                    I am skilled in are HTML, CSS, Sass, JavaScript, jQuery, Ajax, WordPress, Laravel, Vue.js, React.js and Azure DevOps. <br /> <br /> I also have a B.Sc in Software Engineering from Üsküdar University, I possess a deep understanding of computer networks , ensuring optimal performance and security in web applications. I am adept at collaborating within cross-functional teams to achieve project goals and meet client requirements effectively. I am passionate about learning new technologies and enhancing my skills as a software engineer.
                                </p>
                                <ul className='flex items-center gap-3'>
                                    <SocialMediaItem href='https://facebook.com/alachiio' color='bg-blue-700' icon='fa-brands fa-facebook-f' />
                                    <SocialMediaItem href='https://youtube.com/@alachiio' color='bg-red-700' icon='fa-brands fa-youtube' />
                                    <SocialMediaItem href='https://linkedin.com/in/alachiio' color='bg-sky-700' icon='fa-brands fa-linkedin-in' />
                                    <SocialMediaItem href='https://instagram.com/alachiio' color='bg-pink-700' icon='fa-brands fa-instagram' />
                                </ul>
                                <div className='flex items-center gap-6'>
                                    <a href="/OmarAlachiResume.pdf" target="_blank" className='bg-slate-800 dark:bg-white text-slate-100 dark:text-slate-600 hover:bg-secondary hover:dark:bg-primary hover:text-white capitalize w-fit py-2 px-4 rounded-full shadow'>download CV</a>
                                </div>
                            </div>
                        </div>
                        <div className='shrink-0 rounded-2xl bg-slate-200 dark:bg-slate-800'>
                            <div className='p-6 h-full'>
                                <ul className='flex flex-col justify-between lg:gap-0 gap-6 h-full'>
                                    <li className='flex flex-col gap-2 lg:me-16 lg:text-start text-center'>
                                        <h4 className='font-bold text-gray-900 dark:text-white text-3xl'><CountUpComponent end={7} />+</h4>
                                        <p className='text-slate-700 dark:text-slate-200 capitalize text-sm'>Years in Laravel</p>
                                    </li>
                                    <li className='flex flex-col gap-2 lg:me-16 lg:text-start text-center'>
                                        <h4 className='font-bold text-gray-900 dark:text-white text-3xl'><CountUpComponent end={5} />+</h4>
                                        <p className='text-slate-700 dark:text-slate-200 capitalize text-sm'>Years in Vue.js</p>
                                    </li>
                                    <li className='flex flex-col gap-2 lg:me-16 lg:text-start text-center'>
                                        <h4 className='font-bold text-gray-900 dark:text-white text-3xl'><CountUpComponent end={3} />+</h4>
                                        <p className='text-slate-700 dark:text-slate-200 capitalize text-sm'>Years in React.js</p>
                                    </li>
                                    <li className='flex flex-col gap-2 lg:me-16 lg:text-start text-center'>
                                        <h4 className='font-bold text-gray-900 dark:text-white text-3xl'><CountUpComponent end={2} />M+</h4>
                                        <p className='text-slate-700 dark:text-slate-200 capitalize text-sm'>Lines of code</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}