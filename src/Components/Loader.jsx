import React from "react";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.svg`
  width: 250px;
  height: 150px;
  position: relative;
  animation: ${rotation} 0.75s linear infinite;
  border-radius: 100em;
`;

const Path = styled.circle`
  stroke-dasharray: 100;
  stroke-dashoffset: 20;
  stroke-linecap: round;
`;

const Gradient = () => (
  <linearGradient id="gradient">
    <stop offset="0%" stopColor="#fe0000" stopOpacity="1" />
    <stop offset="100%" stopColor="#af3dff" stopOpacity="0" />
  </linearGradient>
);

export function Loader() {
  return (
    <LoaderContainer>
      <Spinner xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66">
        <defs>
          <Gradient />
        </defs>
        <Path
          cx="33"
          cy="33"
          r="20"
          stroke="url(#gradient)"
          strokeWidth="1"
          fill="transparent"
        />
      </Spinner>
    </LoaderContainer>
  );
}
