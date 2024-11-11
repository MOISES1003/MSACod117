import styled from "styled-components";
import { fetchProjects } from "../hooks/fetchProjects";
import { CardProjects } from "./CardProjects";
import { useState } from "react";
import { LazyLoad } from "../../../Components/LazyLoad";

export function ContentLenguagesCards({ type }) {
  const { projects } = fetchProjects();
  const [hovered, setHovered] = useState(null);
  // Filtra los proyectos según el tipo especificado
  const filteredProjects = projects.filter((project) => project.type === type);
  return (
    <Content>
      {filteredProjects.map((project, index) => (
        <LazyLoad
          children={
            <StyledCards
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              isDimmed={hovered !== null && hovered !== index}
            >
              <CardProjects item={project} />
            </StyledCards>
          }
        />
      ))}
    </Content>
  );
}
const Content = styled.div`
  /* background-color:  red; */
  width: 90%;
  height: 100%;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  /* grid-auto-rows: auto; */
  border-radius: 10px;
  gap: 20px;
  align-items: start;
  justify-content: center;
  /* align-items: center; */
`;

const StyledCards = styled.div`
  margin-left: 50px;
  display: flex;
  max-width: 500px;
  min-width: 250px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.isDimmed ? 0.5 : 1)};
  img {
    filter: ${(props) => (props.isDimmed ? "grayscale(100%)" : "none")};
  }
  @media (max-width: 800px) {
    width: 90%;
    margin-left: 0px;
  }
`;
