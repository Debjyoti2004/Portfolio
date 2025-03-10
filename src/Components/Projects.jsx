import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import ProjectCard from "../Cards/ProjectCard";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 16px;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  gap: 12px;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;


const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 24px;
  color: #ffffff; /* White text for better visibility */
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const FilterTabs = styled.div`
  display: flex;
  border-radius: 12px;
  background-color: #1a1a2e; /* Darker background for the tabs container */
  padding: 6px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  background-color: #1a1a2e; /* this is for the filter container */
`;

const FilterTab = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ active }) => (active ? "#854CE6" : "transparent")}; /* Purple accent color when active */
  color: ${({ active }) => (active ? "white" : "rgba(255, 255, 255, 0.85)")}; /* White text */
  
  &:hover {
    background: ${({ active }) => active ? "#854CE6" : "#232336"};
  }
  
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
  width: 100%;
`;

const EmptyMessage = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  text-align: center;
  margin: 40px 0;
  font-style: italic;
  grid-column: 1 / -1;
`;

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filterCategories = ["all", "devops", "cloud computing", "web development"];
  
  const filteredProjects = projects.filter((project) =>
    activeTab === "all" || project.category.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <Container id="projects">
        <motion.div variants={textVariant()} className="w-full text-center mb-10">
      <Wrapper>
        <TopSection>
          <p className="text-[12px] sm:text-[14px] text-[#aaa6c3] uppercase tracking-[1.5px] font-medium"
            style={{ 
              background: "none", 
              padding: "0", 
              marginBottom: "4px" 
            }}>MY WORK</p>
          <Title>Projects</Title>

          <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-1 text-white text-[17px] max-w-3xl text-center leading-[30px] mb-3"
      >
        Here are some of my projects that showcase my skills and experience.
      </motion.p>
          
        </TopSection>

        <FilterContainer>
          <FilterTabs>
            {filterCategories.map((category) => (
              <FilterTab 
                key={category}
                active={activeTab === category}
                onClick={() => setActiveTab(category)}
              >
                {category === "all" ? "ALL" : category.toUpperCase()}
              </FilterTab>
            ))}
          </FilterTabs>
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))
          ) : (
            <EmptyMessage>No projects found in this category.</EmptyMessage>
          )}
        </ProjectsGrid>
      </Wrapper>
      </motion.div>
    </Container>
  );
};

export default SectionWrapper(Projects, "projects");