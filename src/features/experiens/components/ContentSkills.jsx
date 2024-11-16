import styled from "styled-components";
import { CardSkill } from "./CardSkill";
import { LazyLoad } from "../../../Components/LazyLoad";

export function ContentSkills({ skills }) {
  return (
    <Content>
      <ContentCards>
        {skills.map((skill) => (
          <LazyLoad
            children={<CardSkill skill={skill} />}
            width="auto" 
          />
        ))}
      </ContentCards>
    </Content>
  );
}
const Content = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentCards = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
