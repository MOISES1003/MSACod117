import styled from "styled-components";
import { fetchProjects } from "../hooks/fetchProjects";
import { CardProjects } from "./CardProjects";

export function ContentLenguagesCards({ type }) {
  const { projects } = fetchProjects();
  // Filtra los proyectos según el tipo especificado
  const filteredProjects = projects.filter((project) => project.type === type);
  return (
    <Content>
      {filteredProjects.map((project) => (
        <CardProjects item={project} />
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
  gap: 10px;
  align-items: start;
  justify-content: center;
  /* align-items: center; */
`;
