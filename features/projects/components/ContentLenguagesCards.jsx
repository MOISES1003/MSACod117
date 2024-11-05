import styled from "styled-components";
import { fetchProjects } from "../hooks/fetchProjects";
import { CardProjects } from "./CardProjects";

export function ContentLenguagesCards() {
  const { projects } = fetchProjects();
  return (
    <Content>
      {projects.map((project) => (
        <CardProjects />
      ))}
    </Content>
  );
}
const Content = styled.div`
  /* background-color: red; */
  width: 90%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  gap: 10px;
`;
