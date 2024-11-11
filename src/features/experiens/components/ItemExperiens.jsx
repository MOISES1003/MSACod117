import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

export function ItemExperiens({ items }) {
  const [selec, setSelect] = useState(null);
  const title = items.empresa + " (" + items.cargo + ") ";
  return (
    <ContentItems>
      <ContentTitle>
        <Title>{title}</Title>
        <Date> {items.date}</Date>
      </ContentTitle>
      {items.data.map((item, index) => (
        <Item
          key={index}
          selec={selec !== null && selec !== index}
          onMouseEnter={() => setSelect(index)}
          onMouseLeave={() => setSelect(null)}
        >
          <Function>
            <p className="funtion"> {item.funcion}</p>
            <div className="decorate"> </div>
            <span className="ball" />
          </Function>
          <div className="contentData">
            <ContentDetails>
              <p
                dangerouslySetInnerHTML={{ __html: item.detalles }}
                style={{
                  whiteSpace: "pre-wrap", // preserva espacios y saltos de línea
                }}
              >
              </p>
            </ContentDetails>
            <ContenTecnologies>
              {item.tecnologis.map((tecnologis) => (
                <p className="tecnologi">{tecnologis}</p>
              ))}
            </ContenTecnologies>
          </div>
        </Item>
      ))}
    </ContentItems>
  );
}
const ContentItems = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 40px;
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
  }
`;
const ContentTitle = styled.div`
  width: 90%;
  display: flex;
  margin-top: 60px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Title = styled.p``;
const Date = styled.p``;
const Item = styled.div`
  width: 90%;
  display: flex;
  gap: 20px;
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
  transition: all 0.5s ease;
  opacity: ${(props) => (props.selec ? 0.5 : 1)};
  &:hover {
    background-color: #615e5e93;
    .decorate {
      height: 100%;
    }
  }
  .contentData {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-right: 5px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    background-color: transparent;
    pointer-events: none; /* Desactiva los efectos de hover en pantallas pequeñas */
  }
`;
const pulse = keyframes`
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
`;
const Function = styled.div`
  position: relative;
  width: 150px;
  flex-shrink: 0;
  display: flex;
  height: auto; /* Ajusta a la altura del contenido */
  .decorate {
    position: absolute;
    right: 0;
    height: 0%;
    width: 2px;
    background-color: #4f4f4f;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 5px black;
    border-radius:5px;
  }
  .ball {
    position: absolute;
    right: -7px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #4f4f4f;
    box-shadow: 0px 0px 5px black;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      position: absolute;
      content: "";
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #4f4f4f;
      animation: ${pulse} 1s linear infinite;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    gap: 10px;
    .ball {
      position: relative;
      right: auto;
      &::after{
         animation: ${pulse} 1s linear infinite;
      }
     
    }
    .decorate {
      width: 100%;
      height: 2px;
      max-height: 2px;
      bottom: -5px;
      box-shadow: 0px 0px 5px #6d6d6d;
    }
  }
`;

const ContentDetails = styled.div`
  flex-grow: 1;
  position: relative;
  width: 100%;
  @media (max-width: 800px) {
    p{
      font-size: 12px;
    }
  }
`;
const ContenTecnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
  .tecnologi {
    padding: 4px;
    font-size: 12px;
    background-color: #1616167f;
    border-radius: 10px;
    @media (max-width: 800px) {
    background-color: #6d6d6d63;
    pointer-events: none; /* Desactiva los efectos de hover en pantallas pequeñas */
    font-size: 8px;
  }
}
  /* background-color: red; */
`;
