import styled from "styled-components";

export function CardsEnvents({ item }) {
  return (
    <Card>
      <div>
        <h1>{item.type}</h1>
      </div>
      <div>
        <p>Fecha: {new Date(item.created_at).toLocaleString()}</p>
        <p>Actor: {item.actor.display_login}</p>
        <p>Repo: {item.repo.name}</p>
        {item.payload.commits ? <p>mensaje: {item.payload.commits[0].message} </p> : null}
      </div>
    </Card>
  );
}
const Card = styled.div`
  width: 400px;
  height: auto;
  background-color: transparent;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 10px;
  display: fleX;
  gap: 10px;
  cursor: pointer;
  &:hover {
    background-color: #0076fd14;
  }
`;
