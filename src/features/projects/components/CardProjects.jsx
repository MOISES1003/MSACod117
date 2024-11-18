import styled from "styled-components";
import { LinkButton } from "./LinkButton";
import { FaGithub } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";

export function CardProjects({ item }) {
  return (
    <Card color={item.color}>
       {item.estado && <span>proceso</span> }       
      <ContentImg color={item.color}>
        <img src={item.logo} alt="" />
        <p>{item.name}</p>
      </ContentImg>
      <ContentInfo>
        <p>{item.description}</p>
      </ContentInfo>
      <ContentButtons>
        {
          item.links.map((link)=>(      <LinkButton texto={link.name} ruta={link.Url} icono={link.icon} active={link.active}/>)
      
          )
        }
         {/* <LinkButton texto="aea" ruta="*" icono={<h1>h</h1>} active={true}/> */}
      </ContentButtons>
    </Card>
  );
}
const Card = styled.div`
position: relative;
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
  height: auto;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  color: white;
  transition: all 0.5s ease;
  &:hover {
    background-color: #2e2e2ebb;
    img {
      transition: all 0.3s ease;
      border: 2px solid transparent;
      filter: drop-shadow(
        0px 0px 15px
          ${(props) => (props.color ? props.color : "rgba(255, 215, 0, 0.8)")}
      );
    }
  }
  span{
    position:absolute;
    right: 5px;
    top: 5px;
    color: #fed370;
    font-size: 12px;  
  }
  @media (max-width: 800px) {
    background-color: #2e2e2ebb;
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
    border: 2px solid ${(props) => (props.color ? props.color : "red")};
    padding: 5px;
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
    text-align: center;
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
