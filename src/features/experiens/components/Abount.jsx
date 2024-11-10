import styled from "styled-components";

export function Abount({ abount }) {
  return (
    <Content>
      <p>{abount}</p>
    </Content>
  );
}
const Content = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center; align-items: center;
  flex-direction: column;
  /* text-align: center; */
  padding: 5px;
  p{
    width: 80%;
    text-align: center;
  }
`;
