import { TabView } from "../Components/TabView";
import { TbBrandCSharp } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import styled from "styled-components";


export function Proyectos(){
    const items = [
        { icon: FaReact, name: "React",color: "#0E82A7", component: <h1>react componente</h1> },
        { icon: FaLaravel, name: "Laravel",color: "#ff2d1e", component:<div style={{
            height: "100px",
            width: "100px",
            backgroundColor: "yellow"
        }}>laravel componente</div> },
        { icon: TbBrandCSharp, name: "C#", color: "#6C287E",component: <h1>c# componente</h1>},
        { icon: FaPhp, name: "PHP", color: "#0E82A7" ,component: <h1>c# componente</h1>},
        { icon: FaNodeJs, name: "NodeJs",color: "#84BF08", component: <h1>c# componente</h1>},
        { icon: RiFlutterFill, name: "Flutter",color: "#5FC9F8", component: <h1>c# componente</h1>},
        { icon: FaAngular, name: "Angular",color: "#DE221D", component: <h1>c# componente</h1>},
      ];
    return(
        <Page>
        <TabView items={items}/>
        </Page>
        
    )
}
const Page = styled.section`
  flex-grow: 0;
  position: relative;
  transition: all 0.3s ease;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  @media (max-width: 800px) {
    height: auto;
    width: 100%;
  }

  /* background-color: red; */
`;