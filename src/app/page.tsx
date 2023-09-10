import HeaderCTA from '@/components/header/HeaderCTA';
import PolyShape from '@/components/header/PolyShape';
import PostSlider from '@/components/posts/PostSlider';
import SkillDisplay from '@/components/skills/Skills';
import { Archivo_Black } from 'next/font/google';
import SectionTitle from '../layout/SectionTitle';
import SocialMediaItem from '../layout/SocialMediaItem';
import PolyShape2 from '@/components/header/PolyShape2';
import InViewAnimated from '@/components/animated/InViewAnimated';
import Image from 'next/image';
import CountUpComponent from '@/components/animated/CountUp';
import Link from 'next/link';

const archivoBlack = Archivo_Black({ weight: "400", subsets: ['latin'] })

export default async function Home() {
  return (
    <>
      <section className='lg:h-screen relative lg:z-0 bg-slate-50 dark:bg-slate-800 overflow-y-hidden lg:p-0 p-10'>
        <div className='lg:fixed lg:top-20 lg:-mt-20 w-full h-full flex lg:flex-row flex-col-reverse lg:justify-center justify-end '>
          <div className='lg:flex-1'>
            <div className='flex flex-1 items-center h-full lg:justify-start justify-end lg:ps-32'>
              <HeaderCTA />
            </div>
          </div>
          <div className='lg:flex-1'>
            <div className='lg:mt-28'>
              <PolyShape />
              <div className='personal-photo w-1/2 mx-auto lg:hidden'>
                <Image src='/omar.jpg' className='rounded-full'
                  width={200}
                  height={200}
                  objectFit="cover"
                  alt='Omar Alachi'
                  objectPosition="center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-slate-200 dark:bg-slate-900 relative z-10'>
        <div className='container lg:max-w-screen-xl lg:px-0 px-10 mx-auto'>
          <SectionTitle h3={["Let's", <br key='br' />, "Know More"]} h1="About Me" />
          <div className='pt-8 flex lg:flex-row flex-col gap-8'>
            <div className={`flex-1 bg-primary rounded-2xl shadow relative before:content-[''] before:absolute before:-z-10 before:w-full before:h-full before:bg-slate-50 before:dark:bg-slate-800 before:-top-5 before:-left-5 before:rounded-2xl`}>
              <div className='lg:h-[450px] h-[350px] overflow-hidden px-8 pt-8'>
                <PolyShape2 />
              </div>
            </div>
            <div className='flex-1 rounded-2xl bg-slate-50 dark:bg-slate-800'>
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
                  <Link href="/about" className='text-gray-900 dark:text-white hover:text-secondary hover:dark:text-secondary capitalize'>
                    About Me <i className='fa-solid fa-arrow-right ms-1'></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className='shrink-0 rounded-2xl bg-slate-50 dark:bg-slate-800'>
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

      <section className='py-16 bg-slate-50 dark:bg-slate-700 relative z-0'>
        <div className='container lg:max-w-screen-xl lg:px-0 px-10 mx-auto'>
          <SectionTitle h3="My Resume" h1="Resume" beforeClassName='before:bg-slate-300 before:dark:bg-slate-900' h1ClassName='text-slate-300 dark:text-slate-900' />
          <div className='grid lg:grid-cols-3 gap-16'>
            <InViewAnimated tag="aside" transition={{ duration: .3, delay: .6, ease: "easeInOut" }} className='flex flex-col gap-6'>
              <h2 className='text-gray-900 dark:text-white text-4xl font-semibold'>My Objective</h2>
              <p className='text-slate-900 dark:text-slate-300'>
                Seeking a challenging software engineering role where I can leverage my extensive skillset in web development technologies, to design and develop cutting-edge web applications. With a strong educational background in Software Engineering and a deep understanding of computer networks, I am dedicated to delivering optimal performance and security in web applications. I am eager to collaborate within cross-functional teams to successfully achieve project objectives, all while maintaining a passion for continuous learning and skill enhancement in the dynamic field of software engineering.
              </p>
            </InViewAnimated>
            <InViewAnimated tag="aside" transition={{ duration: .3, delay: .9, ease: "easeInOut" }} className='flex flex-col gap-6'>
              <h2 className='text-gray-900 dark:text-white text-4xl font-semibold'>Personal Information</h2>
              <div className='flex flex-col gap-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-1 items-center gap-3'>
                    <span className='flex items-center justify-center w-7 h-7 bg-primary text-white text-xs rounded-full shadow'><i className='fa-solid fa-cake-candles'></i></span>
                    <strong className='text-gray-900 dark:text-white'>Age : </strong>
                  </div>
                  <h3 className='text-slate-900 dark:text-slate-300 flex-1'>29</h3>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-1 items-center gap-3'>
                    <span className='flex items-center justify-center w-7 h-7 bg-primary text-white text-xs rounded-full shadow'><i className='fa-solid fa-envelope'></i></span>
                    <strong className='text-gray-900 dark:text-white'>Email : </strong>
                  </div>
                  <h3 className='text-slate-900 dark:text-slate-300 flex-1'><a href="mailto:omer.alachi@gmail.com" target='_blank'>omer.alachi@gmail.com </a></h3>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-1 items-center gap-3'>
                    <span className='flex items-center justify-center w-7 h-7 bg-primary text-white text-xs rounded-full shadow'><i className='fa-solid fa-map-pin'></i></span>
                    <strong className='text-gray-900 dark:text-white'>Address : </strong>
                  </div>
                  <h3 className='text-slate-900 dark:text-slate-300 flex-1'> Istanbul, Turkey</h3>
                </div>
              </div>
            </InViewAnimated>
            <InViewAnimated tag="aside" transition={{ duration: .3, delay: 1.2, ease: "easeInOut" }} className='flex flex-col gap-6'>
              <h2 className='text-gray-900 dark:text-white text-4xl font-semibold'>Programming Skills</h2>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-gray-900 dark:text-white font-semibold'>HTML, CSS / SCSS & JS</h3>
                    <span className='text-slate-900 dark:text-slate-300'>90%</span>
                  </div>
                  <div className={`w-full bg-white rounded-full h-3 relative before:content-[''] before:absolute before:-left-[1px] before:top-0 before:w-[91%] before:h-3 before:bg-primary-focus before:rounded-full`}></div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-gray-900 dark:text-white font-semibold'>Laravel</h3>
                    <span className='text-slate-900 dark:text-slate-300'>90%</span>
                  </div>
                  <div className={`w-full bg-white rounded-full h-3 relative before:content-[''] before:absolute before:-left-[1px] before:top-0 before:w-[91%] before:h-3 before:bg-primary-focus  before:rounded-full`}></div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-gray-900 dark:text-white font-semibold'>Wordpress</h3>
                    <span className='text-slate-900 dark:text-slate-300'>80%</span>
                  </div>
                  <div className={`w-full bg-white rounded-full h-3 relative before:content-[''] before:absolute before:-left-[1px] before:top-0 before:w-[81%] before:h-3 before:bg-primary-focus  before:rounded-full`}></div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-gray-900 dark:text-white font-semibold'>Vue.js</h3>
                    <span className='text-slate-900 dark:text-slate-300'>85%</span>
                  </div>
                  <div className={`w-full bg-white rounded-full h-3 relative before:content-[''] before:absolute before:-left-[1px] before:top-0 before:w-[86%] before:h-3 before:bg-primary-focus  before:rounded-full`}></div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-gray-900 dark:text-white font-semibold'>React.js</h3>
                    <span className='text-slate-900 dark:text-slate-300'>75%</span>
                  </div>
                  <div className={`w-full bg-white rounded-full h-3 relative before:content-[''] before:absolute before:-left-[1px] before:top-0 before:w-[76%] before:h-3 before:bg-primary-focus  before:rounded-full`}></div>
                </div>
              </div>
            </InViewAnimated>
            <InViewAnimated tag="aside" transition={{ duration: .3, delay: .6, ease: "easeInOut" }} className='flex flex-col gap-6'>
              <h2 className='text-gray-900 dark:text-white text-4xl font-semibold'>Education</h2>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-3'>
                      <h3 className='text-gray-900 dark:text-white font-semibold capitalize'>B.Sc in Software Engineering</h3>
                      <span className='text-slate-700 dark:text-slate-300'>(Aug 2019 - Jun 2023)</span>
                    </div>
                    <h5 className='text-slate-600 dark:text-slate-400'>Üsküdar University - Istanbul, Turkey</h5>
                  </div>
                  <ul className='flex flex-col gap-3 list-disc text-slate-500 dark:text-slate-300 ms-6'>
                    <li>Agile Methodologies in Software Development</li>
                    <li>Software Project Management</li>
                    <li>Database Management Systems</li>
                    <li>OOP Programming Principles</li>
                    <li>Data Structures & Algorithms</li>
                    <li>Operating Systems & Computer Networks</li>
                  </ul>
                  {/* <a href="/OmarAlachiTranscript.pdf" target="_blank" className='bg-white text-slate-600 hover:bg-primary hover:text-white capitalize w-fit py-2 px-4 rounded-full shadow mt-3'><i className='fa-solid fa-file-lines me-1'></i> download transcript</a> */}
                </div>
              </div>
            </InViewAnimated>
            <InViewAnimated tag="aside" transition={{ duration: .3, delay: .9, ease: "easeInOut" }} className='flex flex-col gap-6'>
              <h2 className='text-gray-900 dark:text-white text-4xl font-semibold'>Work Experience</h2>
              <div className='flex flex-col gap-5'>
                {/* Start Work Experince */}
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-3'>
                      <h3 className='text-slate-800 dark:text-white font-semibold capitalize'>Full Stack Develoepr</h3>
                      <span className='text-slate-700 dark:text-slate-300'>(Mar 2020 - Present)</span>
                    </div>
                    <h5 className='text-slate-500 dark:text-slate-400'><i className='fa-solid fa-building'></i> Tawrid Export - <i className='fa-solid fa-map-pin'></i> Istanbul, Turkey</h5>
                  </div>
                  {/* <ul className='flex flex-col gap-3 list-disc text-slate-300 ms-6'>
                    <li>Creating products management page to bulk adding or updating several products group, categories and tags.</li>
                    <li>Developing a module for loading officer to manage products loading to containers and printing labels to stick them on products.</li>
                    <li>Adding E-invoice soap api integration to import, export and create e-invoices in the government system directly from the company portal.</li>
                  </ul> */}
                </div>
                {/* End Work Experience */}
                {/* Start Work Experince */}
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-3'>
                      <h3 className='text-slate-800 dark:text-white font-semibold capitalize'>Frontend Developer</h3>
                      <span className='text-slate-700 dark:text-slate-300'>(Oct 2019 - Mar 2020)</span>
                    </div>
                    <h5 className='text-slate-500 dark:text-slate-400'><i className='fa-solid fa-building'></i> imtilak Group - <i className='fa-solid fa-map-pin'></i> Istanbul, Turkey</h5>
                  </div>
                </div>
                {/* End Work Experience */}
                {/* Start Work Experince */}
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-3'>
                      <h3 className='text-slate-800 dark:text-white font-semibold capitalize'>Web Developer</h3>
                      <span className='text-slate-700 dark:text-slate-300'>(Mar 2018 - Aug 2018)</span>
                    </div>
                    <h5 className='text-slate-500 dark:text-slate-400'><i className='fa-solid fa-building'></i> Boraq Group - <i className='fa-solid fa-map-pin'></i> Istanbul, Turkey</h5>
                  </div>
                </div>
                {/* End Work Experience */}
                {/* Start Work Experince */}
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-3'>
                      <h3 className='text-slate-800 dark:text-white font-semibold capitalize'>Junior Web Developer</h3>
                      <span className='text-slate-700 dark:text-slate-300'>(Oct 2016 - Nov 2017)</span>
                    </div>
                    <h5 className='text-slate-500 dark:text-slate-400'><i className='fa-solid fa-building'></i> Tawrid Export - <i className='fa-solid fa-map-pin'></i> Istanbul, Turkey</h5>
                  </div>
                </div>
                {/* End Work Experience */}
              </div>
              <Link href="/experience" className='bg-slate-800 dark:bg-white text-slate-100 dark:text-slate-600 hover:bg-primary hover:text-white capitalize w-fit py-2 px-4 rounded-full shadow mt-1'><i className='fa-solid fa-arrow-right me-1'></i> view details</Link>
            </InViewAnimated>
            <InViewAnimated tag="aside" transition={{ duration: .3, delay: 1.2, ease: "easeInOut" }} className='flex flex-col gap-6'>
              <h2 className='text-gray-900 dark:text-white text-4xl font-semibold'>Languages</h2>
              <SkillDisplay data={[
                {
                  title: 'Arabic',
                  percent: '100'
                },
                {
                  title: 'English',
                  percent: '75'
                },
                {
                  title: 'Turkish',
                  percent: '80'
                }
              ]} className='grid grid-cols-3 gap-x-3 mb-3' />
            </InViewAnimated>
          </div>
        </div>
      </section>
      {/* <section className='py-16 bg-slate-100 dark:bg-slate-900 relative z-0'>
        <div className='container lg:max-w-screen-xl lg:px-0 px-10 mx-auto'>
          <SectionTitle h3="Latest Posts" h1="Blog" />
          <div className='flex flex-col'>
            <div className='w-full'>
              <PostSlider />
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}
