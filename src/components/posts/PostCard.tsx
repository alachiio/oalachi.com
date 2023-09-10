import post from "@/types/post";
import Image from "next/image";

export default function PostCard({ post }: { post: post }) {
    return (
        <div className="flex flex-col">
            <div className="relative z-20">
                <a href="#" className="block min-h-[200px]">
                    <Image src={post.download_url} alt={post.author} className="w-full rounded-xl shadow"
                        layout="fill" 
                        objectFit="cover"
                        objectPosition="center" placeholder="empty" />
                </a>
            </div>
            <div className="pt-8 pb-4 px-4 bg-slate-50 dark:bg-slate-700 rounded-b-xl shadow -mt-4 relative z-10">
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-50">Here is the title of post</h3>
                    <p className="text-slate-500 dark:text-slate-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex items-center">
                        <p className="grow text-slate-400"><i className="fa-solid fa-clock text-primary"></i> 1 day ago</p>
                        <a href="#" className="capitalize text-slate-900 dark:text-slate-50 hover:text-primary-focus">
                            <i className="fa-solid fa-arrow-right"></i> read more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}