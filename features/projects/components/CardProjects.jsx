import styled from "styled-components";

export function CardProjects() {
  return <Card>CardProjects</Card>;
}
const Card = styled.div`
  clip-path: polygon(
    30px 0%,
    100% 0,
    100% calc(100% - 30px),
    calc(100% - 30px) 100%,
    0 100%,
    0% 30px
  );
  background-color: #25272C;
  height: 100px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 10px;
  width: 200px;
`;
