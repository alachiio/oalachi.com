import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
    return (
        <header className='w-full bg-slate-50 dark:bg-slate-800 flex items-center justify-between px-10 h-20 sticky top-0 z-50'>
            <Link href={'/'} className='logo flex lg:flex-1 items-center gap-3'>
                <Image
                    className="relative"
                    src="/logo.svg"
                    alt="Omar Alachi Logo"
                    width={50}
                    height={37}
                    priority
                />
                <h3 className={`font-semibold text-2xl text-primary`}>Omar <span className='text-orange-400'>Alachi</span></h3>
            </Link>
            <Nav />
            <div className="lg:flex-1 flex justify-end">
                <ThemeSwitcher />
            </div>
        </header>
    );
}