import styled from "styled-components";
import { useState } from "react";

export function TabViewComponent({ items }) {
  const data = [
    {
      icon: <p>icon</p>,
      name: "name",
      color: "#00D8FF",
      component: <h1>component 1</h1>,
    },
    {
      icon: <p>icon</p>,
      name: "name",
      color: "#ff2d1e",
      component: <h1>component 2</h1>,
    },
    {
      icon: <p>icon</p>,
      name: "name",
      color: "#6C287E",
      component:<h1>component 3</h1>,
    },
    {
      icon: <p>icon</p>,
      name: "name",
      color: "#E8D44D",
      component: <h1>component 4</h1>,
    },
    {
      icon: <p>icon</p> ,
      name: "name",
      color: "#0E82A7",
      component: <h1>component 5</h1> ,
    },
  ];
  const [selectedIcon, setSelectedIcon] = useState(0);
  const [prevIcon, setPrevIcon] = useState(0);

  const handleIconClick = (index) => {
    setPrevIcon(selectedIcon);
    setSelectedIcon(index);
  };

  return (
    <Content>
      <ContenIcon>
        {data.map((item, index) => (
          <IconItem
            key={index}
            onClick={() => handleIconClick(index)}
            isSelected={selectedIcon === index}
          >
            <IconContainer
              isSelected={selectedIcon === index}
              color={item.color}
            >
              <div>{item.icon}</div>
            </IconContainer>
            <span>{item.name}</span>
          </IconItem>
        ))}
      </ContenIcon>

      {/* Renderiza el componente seleccionado con animación */}
      <ComponentContainer>
        {data.map((item, index) => (
          <AnimatedComponent
            key={index}
            isSelected={selectedIcon === index}
            isPrevSelected={prevIcon === index}
          >
            {item.component}
          </AnimatedComponent>
        ))}
      </ComponentContainer>
    </Content>
  );
}

// Estilos
const Content = styled.div`
  height: 100%;
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 5px;
`;

const ContenIcon = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  gap: 20px;
  width: auto;
  overflow: hidden;
  background-color: #2e2e2ebb;
  flex-wrap: wrap;
  border-radius: 15px;
`;
const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  span {
    margin-top: 5px;
    color: ${(props) => (props.isSelected ? "white" : "black")};
  }
`;

const IconContainer = styled.div`
  height: 30px;
  width: 30px;
  /* background-color: ${(props) =>
    props.isSelected ? "red" : "lightgray"}; */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  color: ${(props) => (props.color ? props.color : "black")};

  ${(props) =>
    props.isSelected &&
    `
    transform: scale(1.2);
 filter: 
          drop-shadow(0 0 10px ${
            props.color ? props.color : "rgba(255, 215, 0, 0.8)"
          })
          drop-shadow(0 0 20px ${
            props.color ? props.color : "rgba(255, 215, 0, 0.5)"
          })
          drop-shadow(0 0 30px ${
            props.color ? props.color : "rgba(255, 215, 0, 0.3)"
          });
  `}
`;

const ComponentContainer = styled.div`
  width: 90%;
  height: 200px;
  position: relative; /* Necesario para las animaciones absolutas */
  overflow-y: auto;
  overflow-x: hidden;
  background-color: transparent;
  color:white;
    border-radius: 10px;

`;

// Componente animado
const AnimatedComponent = styled.div`
  position: absolute;
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  background-color: #2a2a2a;
  opacity: ${(props) => (props.isSelected ? 1 : 0)};
  transform: ${(props) =>
    props.isSelected
      ? "translateX(0)" // El componente seleccionado se centra
      : props.isPrevSelected
      ? "translateX(100%)" // El componente anterior sale hacia la derecha
      : "translateX(-100%)"}; // Los otros componentes entran desde la izquierda
`;