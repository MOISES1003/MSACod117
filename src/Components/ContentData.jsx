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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          totam error id! Voluptatibus, id ipsum possimus nisi nobis tempore
          harum consectetur mollitia eaque est architecto? Soluta eaque eveniet
          praesentium reiciendis.
        </p>
      </Data>
      {/* <Route path="/" element={<HomePage />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/componente" element={<Componentes />} /> */}
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
  /* background-color:Red; */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  /* background-color: red; */
  overflow: hidden;
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
  }
  .descripcion {
    max-width: 500px;
  }
  .name {
    /* max-width: 500px; */
    padding: 5px;
    font-size: 50px;
    cursor: pointer;
  }
`;
const Name = styled.div`
  /* background-color: red; */
`;
const Options = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* background-color: red; */
  align-items: start;
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
