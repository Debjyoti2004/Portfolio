import React from 'react'
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6'

const socials = [
    {
        icon: <FaLinkedin />,
        url: 'https://www.linkedin.com/in/debjyotishit/'
    },
    {
        icon: <FaGithub />,
        url: 'https://github.com/Debjyoti2004'
    },
    {
        icon: <FaXTwitter />,
        url: 'https://x.com/DebjyotiSh27921'
    }
]
const Socials = () => {
    return (
        <div className='flex items-center gap-5 '>
            {socials.map((social, index) => (
                <a
                    href={social.url}
                    key={index}
                    className='text-2xl text-white hover:text-accent hover:scale-125 transform transition-all duration-300'
                >
                    {social.icon}
                </a>
            ))}
        </div>
    )
}

export default Socials