import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1e1e30; /* background for the card */
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  background-color: #2d2d42; /* Background for the image container */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const Tag = styled.span`
  background: rgba(133, 76, 230, 0.15); /* Subtle background */
  color: #BFA3FF; /* Soft purple text */
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 4px;
  display: inline-block;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(133, 76, 230, 0.3); /* Slightly darker on hover */
    color: #ffffff;
  }
`;




const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #ffffff; /* White text for better visibility */
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7); /* Slightly transparent white for secondary text */
  margin-bottom: 24px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonContainer = styled.div`
  margin-top: auto;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  color: #854CE6; /* Purple accent color for the button */
  border: 1.5px solid #854CE6;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    background-color: #854CE6;
    color: white;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <ImageContainer>
        {project.image ? (
          <Image src={project.image} alt={project.name} />
        ) : (
          <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>No Image</span>
        )}
      </ImageContainer>
      
      <CardContent>
        <TagsContainer>
          {project.tags && project.tags.map((tag, index) => (
            <Tag key={index} color={tag.color}>
              {tag.name}
            </Tag>
          ))}
        </TagsContainer>
        
        <Title>{project.name}</Title>
        <Description>{project.description}</Description>
        
        <ButtonContainer>
          <Button href={project.source_code_link} target="_blank">
            View Code
          </Button>
        </ButtonContainer>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;