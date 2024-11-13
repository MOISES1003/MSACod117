import styled from "styled-components";
import { ButtomCodComponent } from "./AllComponents/ButtomCodComponent";

export function CardComponents({ item, index }) {
  return (
    <ContentCard>
      <Photo src={item.image} alt={item.name} />
      <ButtomCodComponent id={index} nombre={item.name} />
    </ContentCard>
  );
}
const ContentCard = styled.div`
  position: relative;
  border-radius: 15px;
  max-width: 100%;
  overflow: hidden;
  padding: 5px;
  border: 1px solid transparent;
  margin-bottom: 0.5em;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  .btnLink {
    opacity: 0;
  }
  @media (max-width: 800px) {
    box-shadow: 0px 5px 10px #3c3c3c;
    .btnLink {
      opacity: 1;
    }
  }
  &:hover {
    border-color: #2a2a2a;
    .btnLink {
      transition: all 0s;
      opacity: 1;
    }
  }
`;
const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
