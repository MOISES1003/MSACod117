import styled from "styled-components";
import { ComponentsGrid } from "../features/components/components/ComponentsGrid";
import { fetchComponents } from "../features/components/hooks/fecthComponents";

export function Componentes(){
    const {components} = fetchComponents ();
    return(
        <Page>
            <ComponentsGrid items={components}/>
        </Page>
    )
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
    overflow: hidden  ;
    width: 100%;
  }
`;