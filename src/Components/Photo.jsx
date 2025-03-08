import React from 'react';
import { motion } from 'framer-motion';

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <motion.div
        className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }}
      >
        <div className="absolute inset-0 rounded-full shadow-lg" 
             style={{ boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35), inset 0 0 40px rgba(0, 0, 0, 0.2)" }} />
        
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="w-full h-full">
            <img
              src="/pic2.png"
              alt="Profile"
              className="w-full h-full object-cover"
              style={{ 
                objectPosition: "center 28%", 
                transform: "scale(1.08)" 
              }}
              loading="eager"
            />
            
           
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-blue-400/10 mix-blend-overlay" />
          </div>
        </div>
        

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 1 }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
           
            <circle
              cx="250"
              cy="250"
              r="249"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
            />
            
            
            <motion.circle
              cx="250"
              cy="250"
              r="242"
              stroke="#4f46e5"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                transition: {
                  duration: 2,
                  ease: "easeOut"
                }
              }}
              fill="none"
            />
            
           
            <motion.circle
              cx="250"
              cy="250"
              r="235"
              stroke="#8b5cf6"
              strokeWidth="1.5"
              strokeDasharray="6,10"
              initial={{ rotate: 0 }}
              animate={{
                rotate: 360,
                transition: {
                  duration: 35,
                  ease: "linear",
                  repeat: Infinity
                }
              }}
              fill="none"
            />
            
           
            <motion.circle
              cx="250"
              cy="250"
              r="228"
              stroke="rgba(99, 102, 241, 0.25)"
              strokeWidth="6"
              initial={{ opacity: 0.25 }}
              animate={{
                opacity: [0.25, 0.45, 0.25],
                transition: {
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity
                }
              }}
              fill="none"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;