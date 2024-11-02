import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFetchGit } from "../../features/home/hooks/useFetchGit";
export function HomePage() {
  const {events, starred, error,loadEvents, loadStarred} = useFetchGit();

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
    </Page>
  );
}

const Page = styled.section`
  transition: all 0.3s ease;
  color: white;
`;
