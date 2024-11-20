import React from "react";
import styled, { keyframes } from "styled-components";
import FireLogo from "../assets/fireLogo.png"

export function FirebaseLogoWithFire  ({reactVisible})  {
  return (
    <Container reactVisible={reactVisible}>
      {/* Logo de Firebase */}
      <Logo src={FireLogo} alt="Firebase Logo" />

      {/* Partículas */}
      <ParticlesContainer>
        {Array.from({ length: 10 }).map((_, i) => (
          <Particle key={i} />
        ))}
      </ParticlesContainer>
    </Container>
  );
};
// Animación de las partículas (suben y desaparecen)
const fireAnimation = keyframes`
  0% {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px) scale(0.5);
    opacity: 0;
  }
`;

// Contenedor principal
const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  opacity: ${(props)=>props.reactVisible ? "1": "0"};
  /* background:red; */
`;

// Estilo para el logo de Firebase
const Logo = styled.img`
width:100%;
  position: relative;
  z-index: 1;
`;

// Partícula de fuego
const Particle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: orange;
  border-radius: 50%;
  animation: ${fireAnimation} 2s linear infinite;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;

  // Posición y retraso aleatorios para cada partícula
  &:nth-child(1) {
    animation-delay: 0s;
    top: 20%;
    left: 20%;
  }
  &:nth-child(2) {
    animation-delay: 0.5s;
    top: 25%;
    left: 60%;
  }
  &:nth-child(3) {
    animation-delay: 1s;
    top: 70%;
    left: 30%;
  }
  &:nth-child(4) {
    animation-delay: 1.5s;
    top: 60%;
    left: 70%;
  }
`;

// Contenedor de las partículas
const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;
