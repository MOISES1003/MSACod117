import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFetchGit } from "../../features/home/hooks/useFetchGit";
import { CardsEnvents } from "../../features/home/components/CardsEnvents";
export function HomePage() {
  const { events, starred, error, loadEvents, loadStarred } = useFetchGit();

  useEffect(() => {
    loadEvents();
    loadStarred();
  }, []);

  return (
    <Page>
      <button
        onClick={() => {
          console.log(events);
          console.log(starred);
        }}
      >
        ver resultados
      </button>
      <h1>{error}</h1>
      <ContenEvents>
        {events.map((item) => (
          <CardsEnvents key={item.id} item={item} />
        ))}
      </ContenEvents>
    </Page>
  );
}

const Page = styled.section`
  flex-grow: 1;

  transition: all 0.3s ease;
  color: white;
  /* display: flex; */
  /* flex-direction: column;
  align-items: center; */
  /* background-color: red; */
`;
const ContenEvents = styled.div`
overflow-y: auto;
overflow-x: hidden;
height: 100%;
width: 100%;
display : flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding: 20px;
@media  (max-width:800px) {
  height: 500px;;
  }

`;
