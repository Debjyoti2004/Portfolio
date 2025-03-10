import React from 'react'
import { Button } from '@/Components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Typewriter from 'typewriter-effect'
import Socials from './Socials'
import Photo from './Photo'
import Stats from './Stats'
import Experience from './Experience.jsx'
import Tech from './Tech.jsx'
import Projects from './Projects.jsx'
const Homepage = () => {
    return (
        <section className='h-full'>
            <div className='container mx-auto text-white h-full'>
                <div className='flex flex-col xl:flex-row items-center justify-between 
             xl:pt-8 xl:pb-24'>
                    {/* Text */}
                    <div className="text-center xl:text-left max-w-[700px] order-2 xl:order-none ">
                        <h1 className='text-5xl lg:text-6xl font-bold mb-4 pt-12 '>
                            Hi, I am <br />
                            <span >Debjyoti Shit</span>
                        </h1>
                        <div className='flex items-center justify-center xl:justify-start text-3xl lg:text-4xl font-semibold mb-6'>
                            <span>I am a&nbsp;</span>
                            <span className='text-accent'>
                                <Typewriter
                                    options={{
                                        strings: [
                                            'DevOps Engineer',
                                            'Cloud Engineer',
                                            'Full Stack Developer',
                                            'Freelancer',
                                            'Blog Writer'
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                        delay: 70,
                                    }}
                                />
                            </span>
                        </div>
                        <p className='text-gray-400 text-lg mb-8 leading-relaxed'>
                            I'm a passionate DevOps, Cloud, and Full-Stack Developer, specializing in
                            building scalable, secure, and automated solutions.
                            I love optimizing workflows, deploying cloud-native apps,
                            and crafting seamless user experiences.
                        </p>
                        <div className='flex flex-col xl:flex-row items-center gap-8'>
                            <Button
                                variant='outline'
                                size='lg'
                                className='border-2 border-[#3b82f6] bg-transparent text-[#3b82f6] hover:bg-[#3b82f6]/10 hover:shadow-[0_0_15px_#3b82f6] transition-all duration-300 uppercase flex items-center gap-2 rounded-full px-8'
                            >
                                <span>Download CV</span>
                                <FiDownload className='text-xl' />
                            </Button>
                            <div className='mb-8 xl:mb-0'>
                                <Socials />
                            </div>
                        </div>
                    </div>
                    {/* Photo */}
                    <div className=' mt-10 order-1 xl:order-none mb-8 xl:mb-0'>
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
            <Tech />
            <Experience></Experience>
            <Projects></Projects>
            
        </section>
    )
}

export default Homepage