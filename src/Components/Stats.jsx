import React from 'react'
import CountUP from 'react-countup'

const stats = [
    {
        num: 1,
        text: 'Years of Experience'
    },
    {
        num: 4,
        text: 'Technologies Mastered'
    },
    {
        num: 17,
        text: 'Projects Completed'
    },

    {
        num: 170,
        text: 'Code Commits'
    },

]
// pt-4 pb-12 xl:pt-0 xl:pb-0

const Stats = () => {
    return (
        <section className='py-12 xl:py-16'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap justify-center xl:justify-start gap-x-8 gap-y-6 px-4 xl:px-0'>
                    {stats.map((stat, index) => {
                        return (
                            <div
                                key={index}
                                className='w-[140px] md:w-[160px] xl:w-auto xl:flex-1 flex items-center gap-x-2'
                            >
                                <CountUP
                                    end={stat.num}
                                    duration={5}
                                    delay={1}
                                    className='text-3xl md:text-4xl xl:text-6xl font-extrabold text-white'
                                />
                                <p className={`${stat.text.length < 20 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80 text-sm md:text-base font-light`}>
                                    {stat.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats