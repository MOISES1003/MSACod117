import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import Button from "./Button";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";

export function ContentData() {
  const [selectOption, setSelectOption] = useState(0);
  const options = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: "PROYECTOS",
      url: "/proyectos",
    },
    {
      name: "EXPERIENCIA",
      url: "/experiencia",
    },
    {
      name: "COMPONENTES",
      url: "/componente",
    },
  ];
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

        <p className="carrera">Ingenierio de Software</p>
        <p className="descripcion">
          "Cada línea de código cuenta una historia: accesible, atractiva y
          lista para el usuario."
        </p>
      </Data>
      <Options>
        {options.map((item, index) => (
          <Item key={index} selectOption={selectOption === index}>
            <Link
              to={item.url}
              className="link"
              onClick={() => setSelectOption(index)}
            >
              <div />
              <h4>{item.name} </h4>
            </Link>
          </Item>
        ))}
      </Options>
      <Redes>
        <Button icon={<FaGithub />} url="https://github.com/MOISES1003" />
        <Button
          icon={<FaLinkedinIn />}
          url="https://www.linkedin.com/in/moises-saucedo-ambicho-813316174"
        />
        <Button icon={<SiGmail />} url="mailto:moiseswtf123@gmail.com" />
      </Redes>
    </Content>
  );
}
const Content = styled.section`
  position: relative;
  height: 100vh;
  width: 40vw;
  background-color: transparent;
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
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  @media (max-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
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
    width: ${(props) => (props.selectOption ? "70px" : "50px")};
    left: 50px;
    height: 1px;
    background-color: red;
    transition: all 0.5s ease;
    border: none;
    border-radius: 5px;
  }
  .link {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  @media (max-width: 800px) {
    div {
      display: none;
    }
    .link {
      background-color: ${(props) => (props.selectOption ? "#2a2a2a" : "transparent")};
      padding: 2px;
      border-radius: 5px;
    }
  }
  /* background-color: blue; */
`;
const Img = styled.img`
  width: 50px;
  position: absolute;
  left: 10px;
  top: 10px;
`;
const Redes = styled.div`
  /* position: absolute; */
  width: 50%;
  /* height: 50px; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  bottom: 50px;
  /* gap: 20px; */
  @media (max-width: 800px) {
    width: 100%;
  }
`;
