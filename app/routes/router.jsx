import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../src/Pages/HomePage";
import { ContentData } from "../../src/Components/ContentData";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IntroScreen } from "../../src/Components/IntroScreen";
import { Error404Page } from "../../src/Pages/ERROR/Error404Page";
import { Proyectos } from "../../src/Pages/Proyectos";
import { Curriculum } from "../../src/Pages/Curriculum";
import { Componentes } from "../../src/Pages/Componentes";

export function MyRouters() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [active, setActive] = useState(true);
  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(!active); // Cambia a blanco después de 2 segundos
    }, 5000);

    return () => clearTimeout(timer);
  },[]);
  return (
    <BrowserRouter>
      {active ? (
        <IntroScreen />
      ) : (
        <Main onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <Light
            style={{
              left: position.x,
              top: position.y,
              opacity: isHovered ? 1 : 0, // Cambiar opacidad basado en isHovered
            }}
          />
          <ContentData />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/componente" element={<Componentes />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </Main>
      )}
    </BrowserRouter>
  );
}
const Main = styled.main`
  display: flex;
  position: relative;
  /* justify-content: center;
  align-items: center; */
  height: 100vh;
  width: 100vw;
  background-color: #0d0d0d;
  overflow: hidden;
`;

const Light = styled.div`
  position: absolute;
  width: 80vw; /* 50% del ancho de la ventana */
  height: 80vw; /* Mantenemos un círculo al usar el mismo valor */
  /* max-width: 100vh;
  max-height: 100vh;  */
  background: radial-gradient(circle, rgba(10, 69, 231, 0.1), transparent 70%);
  border-radius: 50%; /* Mantenerlo como un círculo */
  pointer-events: none;
  transform: translate(-50%, -50%); /* Centrar el círculo en el cursor */
  transition: opacity 0.5s ease; /* Añadir la transición de opacidad */
`;
