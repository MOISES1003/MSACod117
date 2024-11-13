import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import styled from "styled-components";
import { selectComponentByIndex } from "../features/components/hooks/selectComponentByIndex";
import { CardContentCod } from "../features/components/components/CardContentCod";

export function CodigoComponente() {
  const { id, nombre } = useParams();
  const { componentsByIndex } = selectComponentByIndex(id);
  return (
    <Page>
      <ContentTitle>
        <Link to="/componente" className="link">
          <FaArrowLeftLong />
        </Link>
        <h1>{componentsByIndex.name}</h1>
      </ContentTitle>
      <ContentComponent>{componentsByIndex.component}</ContentComponent>
      <ContentCode>
        {componentsByIndex.codes.map((item) => (
          <CardContentCod item={item} />
        ))}
      </ContentCode>
    </Page>
  );
}
const Page = styled.div`
  color: white;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 5px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const ContentTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  /* background-color: red; */
  .link {
    position: absolute;
    font-size: 30px;
    left: 50px;
  }
`;
const ContentComponent = styled.div`
  width: 90%;
  background-color: #212121;
  border-radius:10px;
  margin-bottom: 10px;
`;
const ContentCode = styled.div`
width: 100%;
display: flex;
/* align-items: center; */

justify-content: center;
flex-wrap: wrap;
gap: 10px;
`;
