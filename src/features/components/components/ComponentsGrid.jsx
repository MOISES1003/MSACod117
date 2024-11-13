import styled from "styled-components";
import { CardComponents } from "./CardComponents";

export function ComponentsGrid({ items }) {
  return (
    <GridContainer>
      {items.map((item, index) => (
        <CardComponents key={index} item={item} index={index}/>
      ))}
    </GridContainer>
  );
}

const GridContainer = styled.div`
 columns: 5 320px;
column-gap: 0.5em;
padding:5px;
`;
