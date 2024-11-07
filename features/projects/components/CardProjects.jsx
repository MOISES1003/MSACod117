import styled from "styled-components";
import { LinkButton } from "./LinkButton";
import { FaGithub } from "react-icons/fa6";
export function CardProjects({ item }) {
  return (
    <Card color={item.color}>
      <ContentImg color={item.color}>
        <img src={item.logo} alt="" />
        <p>{item.name}</p>
      </ContentImg>
      <ContentInfo>
        <p>{item.description}</p>
      </ContentInfo>
      <ContentButtons>
        {/* repo_Url: "ruta",
      web_Url: "ruta",
      demo_Url: "", */}

        {item.repo_Url && (
          <LinkButton texto="Repositorio" icono={<FaGithub />} />
        )}
        {item.web_Url && (
          <LinkButton texto="Web" icono={<FaGithub />} active={item.active} />
        )}
        {item.demo_Url && <LinkButton texto="Demo" icono={<FaGithub />} />}
      </ContentButtons>
    </Card>
  );
}
const Card = styled.div`
  clip-path: polygon(
    30px 0%,
    100% 0,
    100% calc(100% - 30px),
    calc(100% - 30px) 100%,
    0 100%,
    0% 30px
  );
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #2e2e2ebb;
  height: auto;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 10px;
  max-width: 500px;
  min-width: 250px;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    img {
      transition: all 0.3s ease;
      border: 1px solid transparent;
      filter: drop-shadow(
        0px 0px 15px
          ${(props) => (props.color ? props.color : "rgba(255, 215, 0, 0.8)")}
      );
    }
  }
`;
const ContentImg = styled.div`
  /* background-color: red; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  img {
    border: 1px solid ${(props) => (props.color ? props.color : "red")};
    padding: 4px;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    transition: all 0.5s ease;
    @media (max-width: 800px) {
      filter: drop-shadow(
        0px 0px 15px
          ${(props) => (props.color ? props.color : "rgba(255, 215, 0, 0.8)")}
      );
      border: none;
      padding: 0;
    }
  }
  p {
    font-weight: 700;
  }
`;
const ContentInfo = styled.div``;
const ContentButtons = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  /* flex-direction: column; */
  padding: 5px;
  gap: 5px;
  button {
    /* width: 50%; */
  }
`;
