import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { experiences } from "../constants";
import ExperienceCard from "../Cards/ExperienceCard";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 10px;
  margin-top: 2px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 8px;
`;

const TimelineWrapper = styled.div`
  width: 100%;

  /* Hide only the top part of the vertical timeline line */
  .vertical-timeline::before {
    background-color: white !important;
    height: calc(100% - 30px) !important; 
    top: 30px !important;
  }
`;

const fadeInWithDelay = {
  hidden: {
    y: -10,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeOut"
    }
  }
};

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInWithDelay}
          className="w-full flex flex-col items-center justify-center text-center mb-5" /* Reduced mb-10 to mb-5 */
        >
          <p 
            className="text-[12px] sm:text-[14px] text-[#aaa6c3] uppercase tracking-[1.5px] font-medium"
            style={{ 
              background: "none", 
              padding: "0", 
              marginBottom: "4px" 
            }}
          >
            What I have done so far
          </p>
          <h2 className="text-[42px] sm:text-[32px] font-bold text-white bg-gradient-to-r from-white via-white to-[#915eff] bg-clip-text text-transparent">
            Work Experience
          </h2>
        </motion.div>

        <TimelineWrapper>
          <VerticalTimeline animate={true}>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </TimelineWrapper>
      </Wrapper>
    </Container>
  );
};

export default SectionWrapper(Experience, "experience");
