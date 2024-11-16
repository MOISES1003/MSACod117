import styled from "styled-components";

export function CardSkill({ skill }) {
  return (
    <Card color={skill.color}>
      {skill.icon}
      <p>{skill.name}</p>
    </Card>
  );
}
const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50px;
  height: 50px;
  background-color: #2e2e2ebb;
  font-size: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  color: ${(props) => props.color};
  p {
    transform: translateY(-35px);
    position: absolute;
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    opacity: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    transition:all 0.3s ease;
  }
  &:hover{
    p{
        transform: translateY(-30px);
        opacity: 1;
    }
  }
`;
