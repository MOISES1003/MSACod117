import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoMdGlasses } from "react-icons/io";
import { FaGlasses } from "react-icons/fa";
import { GiMedicinePills } from "react-icons/gi";
import { GiSellCard } from "react-icons/gi";

export function SideBarComponent() {
  const [active, setActive] = useState(false);
  const DataItems = [
    {
      name: "Balance",
      // icon: <FaChartLine />,
      path: "/balance",
      subItems: [
        { name: "Listado de Productos", path: "/", icon: IoMdGlasses },
        { name: "Venta de Lentes", path: "/", icon: GiSellCard },
        { name: "Categorias", path: "/", icon: IoMdGlasses },
      ],
    },
    {
      name: "Insumos",
      // icon: <FaBoxOpen />,
      subItems: [
        { name: "Monturas", path: "/", icon: FaGlasses },
        { name: "Lunas", path: "/", icon: IoMdGlasses },
        { name: "Medicamentos", path: "/", icon: GiMedicinePills },
      ],
    },
  ];
  return (
    <ContentAll>


    <ContenSidebar active={active}>
      <ActiveBall active={active} event={() => setActive(!active)} />
      <Content active={active}>
        <span className="decorate" active={active} />
        <ContenItems>
          {DataItems.map((item, index) => (
            <Item
              key={index}
              item={item}
              subItem={item.subItems}
              active={active}
            />
          ))}
        </ContenItems>
      </Content>
    </ContenSidebar>
    </ContentAll>
  );
}
const ContentAll = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 90%;
    margin-top: 10px;
    width: 100%;
`
const ContenSidebar = styled.div`
  width: ${(props) => (props.active ? "300px" : "80px")};
  display: flex;
  transition: all 0.5s ease;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  /* z-index: 10; */
  background-color: #575757;
  margin: 20px 0px;
  border-radius: 5px;
  @media (max-width: 800px) {
    width: ${(props) => (props.active ? "90%" : "80px")};
  }
`;

const Content = styled.div`
  width: ${(props) => (props.active ? "95%" : "50px")};
  height: 95%;
  border-radius: 20px;
  background-color: ${(props) => props.theme.sideColor};
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  margin-left: 10px;
  /* gap: 10px; */
  overflow-x: none;
  /* @media (max-width: 800px) {
    margin-left: 0px;
    width: ${(props) => (props.active ? "95%" : "0px")};
  } */
  .decorate {
    height: 3px;
    width: ${(props) => (props.active ? "60%" : "50%")};
    background-color: #c5c5c5;
    border-radius: 50px;
    transition: all 0.5s ease;
  }
`;

const ContenItems = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 20px;
  padding: 5px 0px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(193, 193, 200);
    border-radius: 15px;
  }
`;

function Item({ item, subItem, active }) {
  const [activeText, setActiveText] = useState(false);

  useEffect(() => {
    const checkActive = () => {
      setActiveText(true);
      //   console.log("prueba tiempo");
    };
    if (active) {
      // Establecer el intervalo para verificar el token cada segundo
      const intervalId = setInterval(checkActive, 300);
      // Limpiar el intervalo cuando el componente se desmonte
      return () => clearInterval(intervalId);
    } else {
      setActiveText(false);
    }
  }, [active]);
  return (
    <ItemContent active={active}>
      <Title active={active}>
        <h3> {activeText ? item.name : item.name.charAt(0).toUpperCase()}</h3>
      </Title>
      <ContenSubItens>
        {subItem.map((sub) => (
          <NavLink
            to={sub.path}
            onClick={(event) => {
              event.preventDefault(); // Evita la navegación
            }}
          >
            <SubItem active={active}>
              <Label>
                <Icon as={sub.icon} active={active} />
                {activeText ? sub.name : sub.name.charAt(-1).toUpperCase()}
              </Label>
            </SubItem>
          </NavLink>
        ))}
      </ContenSubItens>
    </ItemContent>
  );
}

const ItemContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease; /* Suave transición para todos los cambios */
`;

const Title = styled.h4`
  transform: ${(props) =>
    props.active ? "translate(0, 0)" : "translate(20%, 0)"};
  transition: all 0.2s ease;
  text-transform: capitalize;
  font-weight: 900;
  display: flex;
  border-radius: 50%;
  h3 {
    transition: ${(props) => (props.active ? "none" : "all 0.5s ease")};
    text-align: center;
    background-color: ${(props) => (props.active ? "transparent" : "red")};
    width: ${(props) => (props.active ? "auto" : "30px")};
    border-radius: ${(props) => (props.active ? "none" : "50%")};
    /* padding: 5px; */
    user-select: none;
  }
`;
const ContenSubItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const SubItem = styled.div`
  /* background-color: red; */
  width: 220px;
  padding: 5px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  transform: ${(props) =>
    props.active ? "translate(15%, 0)" : "translate(0, 0)"};
  cursor: pointer;
  border-radius: 15px;
  &:hover {
    background-color: rgb(185, 185, 185);
    border-radius: 10px;
  }
`;
const Label = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
// const Icon = styled(FaTachometerAlt)`
//   position: relative;
//   transition: ${(props) => (props.active ? "all 0s ease" : "all 0.5s ease")};
//   left: ${(props) => (props.active ? "0" : "40%")};
//   font-size: 20px;
// `;
const Icon = styled.div`
  position: relative;
  transition: ${(props) => (props.active ? "all 0s ease" : "all 0.5s ease")};
  left: ${(props) => (props.active ? "0" : "40%")};
  font-size: 20px;
`;
function ActiveBall({ event, active }) {
  return (
    <BallDiv onClick={event} active={active}>
      {active ? <div>♦</div> :<div>♣</div>}
    </BallDiv>
  );
}
const BallDiv = styled.button`
  width: 25px;
  height: 25px;
  position: absolute;
  right: ${(props) => (props.active ? "10px" : "-5px")};
  top: 0px;
  right: -10px;
  background-color: red;
  border: none;
  border-radius: 100%;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
