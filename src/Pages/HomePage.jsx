import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useFetchGit } from "../../features/home/hooks/useFetchGit";
import { CardsEnvents } from "../../features/home/components/CardsEnvents";
import { CardsStarred } from "../../features/home/components/CardsStarred";
export function HomePage() {
  const { events, starred, error, loadEvents, loadStarred } = useFetchGit();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndexStarred, setHoveredIndexStarred] = useState(null);
  useEffect(() => {
    loadEvents();
    loadStarred();
  }, []);

  return (
    <Page>
      <h1>{error}</h1>
      <Content>
        <ContenValues>
          <h2> Actividades de GitHub</h2>
          {events.map((item, index) => (
            <StyledCard
              key={item.id}
              onMouseEnter={() => setHoveredIndexStarred(index)}
              onMouseLeave={() => setHoveredIndexStarred(null)}
              isDimmed={
                hoveredIndexStarred !== null && hoveredIndexStarred !== index
              }
            >
              <CardsEnvents item={item} />
            </StyledCard>
          ))}
        </ContenValues>
        <ContentStarred>
          <h2>Stars</h2>
          {starred.map((item, index) => (
            <StyledCardStarred
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              isDimmed={hoveredIndex !== null && hoveredIndex !== index}
            >
              <CardsStarred item={item} />
            </StyledCardStarred>
          ))}
        </ContentStarred>
      </Content>
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
  width: 60%;
  @media (max-width: 800px) {
    height: auto;
    width: 100%;
  }
  
  /* background-color: red; */
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;
const ContenValues = styled.div`
  h2 {
    position: sticky;
    top: 0;
    left: 0;
    background-color: transparent;
    width: 100%;
    padding: 5px;
  }
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 5px;
  /* background-color: red; */
  @media (max-width: 800px) {
    overflow-x: hidden;
    justify-content: center;
  }
`;
const ContentStarred = styled.div`
  h2 {
    position: sticky;
    top: 0;
    left: 0;
    background-color: transparent;
    width: 100%;
    padding: 5px;
  }
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 5px;
  @media (max-width: 800px) {
    overflow-x: hidden;
    justify-content: center;
  }
`;
const StyledCard = styled.div`
  margin-left: 50px;
  display: flex;
  width: 500px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.isDimmed ? 0.5 : 1)};
  /* background-color: red; */
  @media (max-width: 800px) {
    width: 90%;
    margin-left: 0px;
  }
`;
const StyledCardStarred = styled.div`
  margin-left: 50px;
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.isDimmed ? 0.5 : 1)};
  img {
    filter: ${(props) => (props.isDimmed ? "grayscale(100%)" : "none")};
  }
  @media (max-width: 800px) {
    width: 90%;
    margin-left: 0px;
  }
`;
