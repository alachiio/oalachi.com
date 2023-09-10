import skill from "@/types/skill";

export default function SkillCircle({skill}: {skill: skill}) {
    const circumference = 2 * (22 / 7) * 90;
    return (
        <div className="flex items-center justify-center">
            <svg className="transform -rotate-90 w-52 h-52">
                <circle cx="105" cy="105" r="90" stroke="currentColor" strokeWidth="20" fill="transparent" className="text-slate-300" />
                <circle
                    cx="105"
                    cy="105"
                    r="90"
                    stroke="currentColor"
                    strokeWidth="20"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - (parseFloat(skill.percent) / 100) * circumference}
                    className="text-primary transition-all duration-300"
                />
            </svg>
            <span className="absolute text-3xl text-slate-800 dark:text-white">{`${skill.percent}%`}</span>
        </div>
    )
}