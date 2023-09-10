import React from 'react';
interface Props {
    color: string,
    icon: string,
    href: string,
}

const SocialMediaItem : React.FC<Props> = ({color, icon, href}) => {
    return (
        <li className={`text-white text-lg  flex justify-center items-center w-8 h-8 rounded-full shadow ${color}`}>
            <a href={href} target='_blank'><i className={icon}></i></a>
        </li>
    );
}

export default SocialMediaItem;