"use client";
import React, { useState } from 'react';
import SkillsButtons from './SkillsButtons';
import skill from '@/types/skill';
import SkillCircle from './SkillCircle';

interface Props {
    data: Array<skill>,
    className?: string
}

const SkillDisplay: React.FC<Props> = ({ data, className }) => {
    const [skills] = useState(data);
    const [currentSkill, setCurrentSkill] = useState(data[0]);
    return (
        <>
            <SkillsButtons className={className} skills={skills} currentSkill={currentSkill} setCurrentSkill={setCurrentSkill} />
            <SkillCircle skill={currentSkill} />
        </>
    );
};

export default SkillDisplay;