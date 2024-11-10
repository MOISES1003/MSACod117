import styled from "styled-components";
import { Abount } from "../features/experiens/components/Abount";
import { fetchExperiens } from "../features/experiens/hooks/fecthExperiens";
import Logo from "../assets/logo.png";
import { World } from "../features/experiens/components/World";
import { ItemExperiens } from "../features/experiens/components/ItemExperiens";
export function Experiencia() {
  const { abount, fullStak, freelance } = fetchExperiens();
  return (
    <Page>
      <ContentWorl>
    <World />    
      </ContentWorl>
      
      {/* <Abount abount={abount} /> */}
      <ContentItems>
        <ItemExperiens items={fullStak} />
      </ContentItems>
    </Page>
  );
}
const Page = styled.section`
  flex-grow: 0;
  position: relative;
  transition: all 0.3s ease;
  color: #f5f5f5;
  gap: 20px;
  width: 60%;
  overflow-x: hidden;
  overflow-y: auto;
  @media (max-width: 800px) {
    height: auto;
    width: 100%;
  }
  /* background-color: red; */
`;
const ContentItems = styled.div`
  width: 100%;

`;
const ContentWorl = styled.div`
width: 100%;
display:flex;
justify-content: center; 
align-items: center;
padding:5px;
`;