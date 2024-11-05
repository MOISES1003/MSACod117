import styled from "styled-components";

import Js from "../../../src/assets/languages/JsLogo.png";
import Csharp from "../../../src/assets/languages/CsharpLogo.png";
import PHP from "../../../src/assets/languages/php.png";
import COFFE from "../../../src/assets/languages/coffe.png";
import GlSL from "../../../src/assets/languages/Gl.png";
import Ts from "../../../src/assets/languages/TsLogo.png";
import Python from "../../../src/assets/languages/python.png";
import { FaStar } from "react-icons/fa";

export function CardsStarred({ item }) {
  const iconosLenguajes = {
    JavaScript: Js,
    "C#": Csharp,
    PHP: PHP,
    CoffeeScript: COFFE,
    GLSL: GlSL,
    TypeScript: Ts,
    Python: Python,
    // Añade más lenguajes y sus iconos según sea necesario
  };

  // Usar Object.keys para obtener un array de los nombres de los lenguajes
  const lenguajes = Object.keys(item.languages);

  return (
    <Card href={item.svn_url} target="_blank">
      <FaStar className="star" />

      <p className="title">{item.name}</p>

      <div className="data">
        <p className="name">{item.owner.login}</p>
        <Avatar>
          <img
            src={item.owner.avatar_url}
            alt={item.owner.login}
            className="avatar"
          />
        </Avatar>

        <Description>{item.description || "sin descripciones..."} </Description>
      </div>

      <ContentLenguajes>
        {lenguajes.map((lenguaje, index) => {
          const icono = iconosLenguajes[lenguaje];
          return (
            icono && (
              <Lenguaje key={index}>
                <Icono src={icono} alt={lenguaje} className="icono" />
                {/* Si necesitas un ícono adicional, puedes agregarlo aquí */}
                {/* <BsBoxArrowUpRight /> */}
              </Lenguaje>
            )
          );
        })}
      </ContentLenguajes>
    </Card>
  );
}

const Card = styled.a`
  position: relative;
  width: 100%;
  height: auto;
  background-color: transparent;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  border-top: 1px solid #4c4b4bba;
  background-color: #2e2e2ebb;

  @media (max-width: 800px) {
    /* flex-direction: column; */
  }
  .avatar {
    width: 100%;
    height: 100%;
  }
  .title {
    text-align: center;
    width: 90%;
    overflow: hidden;
    /* background-color: red; */
  }
  .data {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .name {
      position: absolute;
      font-size: 10px;
      left: 40px;
      top: -5px;
      /* top: 10px; */
    }
  }
  .star {
    position: absolute;
    top: 5px;
    right: 5px;
    color: yellow;
  }
`;

const ContentLenguajes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: end;
`;

const Lenguaje = styled.div`
  display: flex;
  align-items: center;
`;

const Icono = styled.img`
  /* width: 20px; // Ancho fijo */
  height: 30px; // Alto fijo
  object-fit: cover; // Mantiene la proporción y recorta si es necesario
`;
const Description = styled.p`
  /* background-color: red; */
`;
const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;
