import { Link } from "react-router-dom";
import styled from "styled-components";

export function ButtomCodComponent({ id, nombre }) {
  return (
    <LinkRedirec className="btnLink"  to={`/codigo/${id}/${nombre}`}>
      <h5>Ver Código</h5>
    </LinkRedirec>
  );
}

const LinkRedirec = styled(Link)`
position: absolute;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 20px;
  background-color: #cecece;
  color: #282727;
  transition: all 0.3s ease;
  z-index:2;
  &::after {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px; 
    border: 2px dashed #b1b1b1;
    border-radius: 24px;
    z-index: -1; /* Poner detrás del botón */

  }
`;
