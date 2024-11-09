import styled from "styled-components";

export function Abount({ abount }) {
  return (
    <Content>
      <h3>ABOUNT</h3>
      <p>{abount}</p>
    </Content>
  );
}
const Content = styled.div`
  width: 80%;
  /* text-align: center; */
  padding: 5px;
  p{
    text-align: center;
  }
`;
