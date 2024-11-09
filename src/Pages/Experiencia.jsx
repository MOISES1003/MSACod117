import styled from "styled-components";
import { Abount } from "../features/experiens/components/Abount";
import { fetchExperiens } from "../features/experiens/hooks/fecthExperiens";
import Logo from "../assets/logo.png"
import { World } from "../features/experiens/components/World";
export function Experiencia() {
  const { abount, fullStak, freelance, fullStakData, freelanceData } =
    fetchExperiens();
  return (
    <Page>
      <World/>
      <Abount abount={abount} />
    </Page>
  );
}
const Page = styled.section`
  flex-grow: 0;
  position: relative;
  transition: all 0.3s ease;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 60%;
  @media (max-width: 800px) {
    height: auto;
    width: 100%;
  }
  /* background-color: red; */
`;
