import React from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';

const TechBall = ({ technology, index }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="w-26 h-26 flex flex-col items-center justify-center group"

    >
      <div className="relative w-full h-full transition-all duration-300 group-hover:scale-110">
        <BallCanvas icon={technology.icon} />
      </div>
      <p className="text-white text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  {technology.name}
</p>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div variants={textVariant()} className="w-full text-center mb-10">
        <p 
          className="text-[12px] sm:text-[14px] text-[#aaa6c3] uppercase tracking-[1.5px] font-medium"
          style={{ background: "none", padding: "0", marginBottom: "4px" }}
        >
          Skills I've acquired
        </p>
        <h2 className="text-[42px] sm:text-[32px] font-bold text-white bg-gradient-to-r from-white via-white to-[#915eff] bg-clip-text text-transparent">
          Technologies
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl text-center leading-[30px] mb-14"
      >
        These are the technologies I work with on a daily basis to build scalable, 
        efficient, and modern applications.
      </motion.p>

      <div className="flex flex-row flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {technologies.map((technology, index) => (
          <TechBall 
            key={technology.name} 
            technology={technology}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
