import { TabView } from "../Components/TabView";
import { TbBrandCSharp } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";

import styled from "styled-components";
import { ContentLenguagesCards } from "../../features/projects/components/ContentLenguagesCards";


export function Proyectos(){
    const items = [
        { icon: FaReact, name: "React",color: "#0E82A7", component: <ContentLenguagesCards/> },
        { icon: FaLaravel, name: "Laravel",color: "#ff2d1e", component:<ContentLenguagesCards/> },
        { icon: TbBrandCSharp, name: "C#", color: "#6C287E",component: <ContentLenguagesCards/>},
        { icon: FaJsSquare, name: "Js", color: "#E8D44D",component: <ContentLenguagesCards/>},
        { icon: FaPhp, name: "PHP", color: "#0E82A7" ,component: <ContentLenguagesCards/>},
        // { icon: FaNodeJs, name: "NodeJs",color: "#84BF08", component: <ContentLenguagesCards/>},
        // { icon: RiFlutterFill, name: "Flutter",color: "#5FC9F8", component: <<ContentLenguagesCards/>},
        // { icon: FaAngular, name: "Angular",color: "#DE221D", component: <ContentLenguagesCards/>},
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