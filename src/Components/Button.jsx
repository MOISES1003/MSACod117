import React from "react";
import styled from "styled-components";

const Button = ({ icon, url }) => {
  return (
    <StyledButton href={url} target="_blank">
      <StyledSpan />
      <StyledSpan />
      <StyledSpan>{icon}</StyledSpan>
    </StyledButton>
  );
};

export default Button;

// Estilos
const StyledButton = styled.a`
  transform: rotate(-30deg) skew(30deg);
  transform-style: preserve-3d;
  position: relative;
  width: 40px;
  height: 40px;
  background: transparent;
  font-family: inherit;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: -2.5px;
    width: 100%;
    height: 5px;
    background: #2a2a2a;
    transform: skewX(-41deg);
  }

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: -5px;
    width: 5px;
    height: 100%;
    background: #2a2a2a;
    transform: skewY(-49deg);
  }

  &:hover span {
    z-index: 1000;
    transition: 0.3s;
    color: white;
  }

  &:hover span:nth-child(3) {
    transform: translate(10px, -10px);
    /* opacity: 0.6; */
    background-color: #2a2a2a;
  }

  &:hover span:nth-child(2) {
    transform: translate(5px, -5px);
    opacity: 0.6;
    background-color: #615e5e;
  }

  &:hover span:nth-child(1) {
    transform: translate(0px, 0px);
    opacity: 0.8;
    background-color: #615e5e;
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2a2a2a;
  color: #fff;
  font-size: 20px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none; /* Evitar que el hover accidental active los estilos */
`;
