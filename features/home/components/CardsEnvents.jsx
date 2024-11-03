import styled from "styled-components";
import { BsBoxArrowUpRight } from "react-icons/bs";

export function CardsEnvents({ item }) {
  const url = item.repo.url;

  // Suponiendo que item.repo.url contiene algo como '/repos/MOISES1003/MSACod117'
  let cleanedUrl = url.replace(/\/?(api.|repos)\b/gi, "");

  // Asegúrate de que cleanedUrl sea una URL absoluta
  if (!cleanedUrl.startsWith("http")) {
    cleanedUrl = `https://github.com${cleanedUrl}`; // Agrega la base URL de GitHub
  }

  // Quitar el dominio de la URL si existe
  cleanedUrl = cleanedUrl.replace(/msa-cod117\.vercel\.app/g, "");

  return (
    <Card>
      <Type>
        <p>{item.type}</p>
      </Type>
      <Info>
        <div className="contenInfo">
          {/* <a href={cleanedUrl} target="_blank" rel="noopener noreferrer" className="url">
            {item.repo.name} <BsBoxArrowUpRight className="icon" />
          </a> */}
          <button onClick={() => window.open(cleanedUrl, "_blank")}>
            {item.repo.name} <BsBoxArrowUpRight className="icon" />
          </button>
        </div>
        <p>
          Fecha:
          {new Date(item.created_at).toLocaleString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour12: true,
          })}
        </p>
        <p>Actor: {item.actor.display_login}</p>

        {item.payload.commits ? (
          <p>mensaje: {item.payload.commits[0].message} </p>
        ) : null}
      </Info>
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background-color: transparent;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 10px;
  display: flex; /* Cambié fleX por flex */
  gap: 10px;
  cursor: pointer;
  border-top: 1px solid transparent; /* Borde invisible por defecto */

  &:hover {
    background-color: #2e2e2ebb;
    border-top-color: #4c4b4bba;
  }
  @media (max-width: 800px) {
    background-color: #2e2e2ebb;
    flex-direction: column;
  }
`;

const Type = styled.div`
  min-width: 100px;
  max-width: 100px;
  color: rgb(230, 231, 231);
  @media (max-width: 800px) {
    position: absolute;
    top: -15px;
  }
`;

const Info = styled.div`
  width: 100%;
  .contenInfo {
    font-size: 13px;
    text-align: end;
    .url {
      position: relative;
      .icon {
        transition: all 0.3s ease;
      }
      &::before {
        position: absolute;
        bottom: 0;
        content: "";
        width: 0%;
        height: 2px;
        background-color: rgba(244, 244, 244, 0.625);
        transition: all 0.5s ease;
        right: 0;
      }
      &:hover::before {
        left: 0;
        width: 100%;
      }
      &:hover {
        .icon {
          transform: scale(1.2) translateX(3px) translateY(-3px);
        }
      }
    }
  }
`;
