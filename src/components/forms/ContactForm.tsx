export default function ContactForm() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
                <input type="text" name="name" placeholder="Name" className="w-1/2 bg-transparent rounded-lg px-4 py-2 border border-slate-600 text-slate-300" />
                <input type="email" name="email" placeholder="Email" className="w-1/2 bg-transparent rounded-lg px-4 py-2 border border-slate-600 text-slate-300" />
            </div>
            <div className="flex gap-3">
                <textarea name="message" placeholder="Your Message" rows={3} className="resize-none bg-transparent rounded-lg px-4 py-2 border border-slate-600 text-slate-300 w-full"></textarea>
                <button type="submit" className='bg-primary text-slate-200 font-semibold hover:bg-opacity-70 capitalize w-fit py-1 px-6 rounded-lg shadow'><i className="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    );
}