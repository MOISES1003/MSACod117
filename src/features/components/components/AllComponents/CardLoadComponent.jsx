import styled, { keyframes } from "styled-components";

// Componente React
export function CardLoadComponent() {
  return (
    <ContenCard>
      <Card>
        <CardLoad />
        <CardLoadExtremeTitle />
        <CardLoadExtremeDescription />
      </Card>
    </ContenCard>
  );
}
const ContenCard = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// Definir animación
const loadAnimation = keyframes`
  100% {
    background-position: -100% 0;
  }
`;

// Styled Components
const Card = styled.div`
  width: 200px;
  height: 100px;
  background: #ffff;
  box-shadow: 0 1px 25px rgba(0, 0, 0, 0.2);

  padding: 12px 10px;
  border-radius: 5px;
`;

const CardLoad = styled.div`
  width: 70px;
  height: 70px;
  /* position: relative; */
  float: left;
  background: linear-gradient(
    120deg,
    #e5e5e5 30%,
    #f0f0f0 38%,
    #f0f0f0 40%,
    #e5e5e5 48%
  );
  border-radius: 50%;
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: ${loadAnimation} 2s infinite;
`;

const CardLoadExtremeTitle = styled.div`
  width: 90px;
  height: 10px;
  /* position: relative; */
  float: right;
  border-radius: 5px;
  background: linear-gradient(
    120deg,
    #e5e5e5 30%,
    #f0f0f0 38%,
    #f0f0f0 40%,
    #e5e5e5 48%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: ${loadAnimation} 2s infinite;
`;

const CardLoadExtremeDescription = styled.div`
  width: 90px;
  height: 47px;
  /* position: relative; */
  float: right;
  border-radius: 5px;
  background: linear-gradient(
    120deg,
    #e5e5e5 30%,
    #f0f0f0 38%,
    #f0f0f0 40%,
    #e5e5e5 48%
  );
  margin-top: 10px;
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: ${loadAnimation} 2s infinite;
`;
