import skill from "@/types/skill";

export default function SkillsButtons({className, skills, currentSkill, setCurrentSkill }: { className?:string, skills: Array<skill>, currentSkill: skill, setCurrentSkill: Function }) {
    return (
        <div className={className}>
            {skills.map(skill => (
                <button
                    key={skill.title}
                    className={`py-2 px-4 rounded-full ${currentSkill.title === skill.title ? 'bg-primary text-white' : 'text-primary bg-slate-300'
                        }`}
                    onClick={() => setCurrentSkill(skill)}
                >
                    {skill.title}
                </button>
            ))}
        </div>
    )
}