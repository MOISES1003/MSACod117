import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
export function ContentData() {
  return (
    <Content>
      <Link to="/">
        <Img srcSet={Logo} />
      </Link>
      <Data>
        <Name>
          <p className="name">MOISES</p>
          <p className="name">SAUCEDO AMBICHO</p>
        </Name>

        <p className="carrera">Tecnico en Ingenieria de Software</p>
        <p className="descripcion">
          "Cada línea de código cuenta una historia: accesible, atractiva y
          lista para el usuario."
        </p>
      </Data>
      <Options>
        <Item>
          <Link to="/proyectos">
            <div />
            <h4>PROYECTOS</h4>
          </Link>
        </Item>
        <Item>
          <Link to="/curriculum">
            <div />
            <h4>CURRICULUM</h4>
          </Link>
        </Item>
        <Item>
          <Link to="/componente">
            <div />
            <h4>COMPONENTES</h4>{" "}
          </Link>
        </Item>
      </Options>
    </Content>
  );
}
const Content = styled.section`
  position: relative;
  height: 100vh;
  width: 40vw;
  background-color: transparent;
  /* background-color: Red; */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 100vw;
    height: 600px;
  }
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  p {
    cursor: pointer;
  }
  .carrera {
    font-weight: 800;
    font-size: 20px;
    @media (max-width: 800px) {
      font-size: 15px;
  }
  }
  .descripcion {
    max-width: 500px;
    /* width: 100%; */
    padding: 5px;
    text-align: center;
  }
  .name {
    /* max-width: 500px; */
    padding: 5px;
    font-size: 50px;
    cursor: pointer;
    @media (max-width: 800px) {
      font-size: 30px;
      text-align: center;
    }
  }
`;
const Name = styled.div`
/* background-color: red; */
/* display:flex; */
`;
const Options = styled.div`
  width:80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  @media (max-width: 800px) {
    flex-direction: row; 
    flex-wrap: wrap;
    justify-content:center;
    
    }
`;
const Item = styled.div`
  /* padding: 5px; */
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  /* background-color: blue; */
  &:hover {
    div {
      width: 80px;
    }
  }
  div {
    width: 50px;
    height: 1px;
    background-color: red;
    transition: all 0.5s ease;
    border: none;
    border-radius: 5px;
  }
  /* background-color: blue; */
`;
const Img = styled.img`
  width: 50px;
  position: absolute;
  left: 10px;
  top: 10px;
`;
