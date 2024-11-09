import React from "react";
import styled from "styled-components";

export function LinkButton({ ruta, icono, texto, active }) {

  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <Button onClick={()=>handleClick(ruta)} active={active} disabled={active}>
      <Sign>{icono}</Sign>
      <Text>{texto}</Text>
      {active && <span>Nex</span>}
    </Button>
  );
}

// Estilos
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 30%;
  cursor: pointer;
  position: relative;
  transition-duration: 0.5s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  background-color: #2e2e2ebb;
  color: white;
  opacity: ${(props) => (props.active ? 0.5 : 1)};
  &:hover {
    width: 140px;
    border-radius: 40px;
    transition-duration: 0.5s;
    border-radius: 15px;
    gap: 5px;
  }
  span {
    position: absolute;
    top: -4px;
    width: 30px;
    font-size: 10px;
    background-color: #ff00009f;
    /* padding: 2px; */
    border-radius: 5px;
    right: -15px;
    transform: rotate(50deg);
    pointer-events: none;
    text-align: center;
  }


`;

const Sign = styled.div`
  width: 100%;
  transition-duration: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  ${Button}:hover & {
    width: 30%;
    transition-duration: 0.5s;
  }
`;

const Text = styled.div`
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 15px;
  font-weight: 600;
  transition-duration: 0.5s;
  text-align: start;
  overflow: hidden;

  ${Button}:hover & {
    opacity: 1;
    width: 70%;
    transition-duration: 0.5s;
    padding-right: 10px;
  }
`;
