import { createSlice } from "@reduxjs/toolkit";
import { TbBrandCSharp } from "react-icons/tb";
import { DiPhp } from "react-icons/di";
import { FaJsSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaLaravel } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { FaYarn } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";

const initialState = {
  abount: `Desarrollador Full Stack con casi 2 años de experiencia en Rino Software y proyectos freelance, enfocado en soluciones empresariales integrales. Con conocimientos en JavaScript, React y Laravel, abierto a nuevas oportunidades para contribuir en el desarrollo de aplicaciones innovadoras y de alto impacto.`,

  skills: [
    {
      name: "C#",
      icon: <TbBrandCSharp style={{ width: "25px", height: "25px" }} />,
      color: "#953CAD",
    },
    {
      name: "PHP",
      icon: <DiPhp style={{ width: "25px", height: "25px" }} />,
      color: "#FFFFFF",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare style={{ width: "25px", height: "25px" }} />,
      color: "#F0DB4F",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript style={{ width: "20px", height: "24px" }} />,
      color: "#007ACC",
    },
    {
      name: "Html",
      icon: <FaHtml5 style={{ width: "25px", height: "25px" }} />,
      color: "#E14E1D",
    },
    {
      name: "Css",
      icon: <FaCss3Alt style={{ width: "25px", height: "25px" }} />,
      color: "#0277BD",
    },
    {
      name: "Sass",
      icon: <FaSass style={{ width: "25px", height: "25px" }} />,
      color: "#CD6799",
    },
    {
      name: "Styled Component",
      icon: <SiStyledcomponents style={{ width: "25px", height: "25px" }} />,
      color: "#EA9C73",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap style={{ width: "25px", height: "25px" }} />,
      color: "#8912FC",
    },
    {
      name: "MySql",
      icon: <GrMysql style={{ width: "25px", height: "25px" }} />,
      color: "#FFFFFF",
    },
    {
      name: "FireBase",
      icon: <IoLogoFirebase style={{ width: "25px", height: "25px" }} />,
      color: "#EFA231",
    },
    {
      name: ".Net",
      icon: <AiOutlineDotNet style={{ width: "25px", height: "25px" }} />,
      color: "#512BD3",
    },
    {
      name: "Laravel",
      icon: <FaLaravel style={{ width: "25px", height: "25px" }} />,
      color: "#F42B1F",
    },
    {
      name: "Node Js",
      icon: <FaNodeJs style={{ width: "25px", height: "25px" }} />,
      color: "#7EC838",
    },
    {
      name: "React",
      icon: <FaReact style={{ width: "25px", height: "25px" }} />,
      color: "#00D1F7",
    },
    {
      name: "Angular",
      icon: <FaAngular style={{ width: "25px", height: "25px" }} />,
      color: "#E23237",
    },
    {
      name: "Vite",
      icon: <TbBrandVite style={{ width: "25px", height: "25px" }} />,
      color: "#7590FF",
    },
    {
      name: "Yarn",
      icon: <FaYarn style={{ width: "25px", height: "25px" }} />,
      color: "#3398C2",
    },
    {
      name: "Postman",
      icon: <SiPostman style={{ width: "25px", height: "25px" }} />,
      color: "#FF6C37",
    },
    {
      name: "Visual code",
      icon: <SiVisualstudio style={{ width: "25px", height: "25px" }} />,
      color: "#9F75D7",
    },
    {
      name: "Visual 2022",
      icon: <SiVisualstudiocode style={{ width: "25px", height: "25px" }} />,
      color: "#3C99D4",
    },
    {
      name: "Git",
      icon: <FaGitAlt style={{ width: "25px", height: "25px" }} />,
      color: "#F03C2E",
    },
    {
      name: "Sql Server",
      icon: <DiMsqlServer style={{ width: "25px", height: "25px" }} />,
      color: "#a8a8a8",
    },
  ],
  fullStak: {
    empresa: "RINO SOFTWARE",
    cargo: "FULLSTACK",
    date: "Feb.2023 - Sep.2024",

    data: [
      {
        title: "IMPLENTACION DE PASARELLA DE PAGO (PLANTSANA)",
        funcion: "FRONT AND BACK",
        estado: "",
        detalles: `Diseño y desarrollo de aplicación de e-commerce personalizada para retail, implementando gestión de inventario, integración de pagos y optimización UX para carro de compras.`,
        tecnologis: [
          "Laravel",
          "React",
          "Culqi",
          "MySQL",
          "API REST",
          "Postman",
        ],
      },
      {
        title: "ERP PARA VETERINARIA CON E-COMMERCE (PRACTIVET)",
        funcion: "PROJECT LEADER",
        estado: "",
        detalles: `Lideré el desarrollo de un ERP veterinario para gestión de inventario, citas y facturación, enfocado en seguridad y eficiencia, logrando un sistema robusto para la clínica.`,
        tecnologis: [
          "MySQL",
          "React",
          "Yarn",
          "API REST",
          "Laravel",
          "Flutter",
          "Postman",
          "Ng React",
          "SUNAT",
          "Culqi",
        ],
      },
      {
        title: "SISTEMA DE VENTA PARA CEVICHERIA (MORDISCO)",
        funcion: "FRONT AND BACK",
        estado: "",
        detalles: `Desarrollo de sistema de venta adaptado para restaurantes, cubriendo pedidos, inventario, facturación y puntos de cliente, optimizando el flujo de ventas.`,
        tecnologis: [
          "MySQL",
          ".Net Framework",
          "C#",
          "Arq. 3 capas",
          "Advanced Installer",
          "API REST",
          "Laravel",
          "Flutter",
          "Firebase",
          "Postman",
        ],
      },
      {
        title: "BACKEND PARA MOTORES DE BUSQUEDA(CODEPER Y CENAPRO)",
        funcion: "BACK",
        estado: "",
        detalles: `Desarrollo backend para implementaciones de motores de busqueda de clientes como certivifacos deaprendizaje para las empresas codeper y cenapro`,
        tecnologis: [
       ".net core",
       "Laravel",
       "Node"
        ],
      },
      {
        title: "ANALISIS , CREACION Y DESPLIGUE DE BD",
        funcion: "DATA ANALYST",
        estado: "",
        detalles: `Encargo en el analisis de los datos , la estructuracion de las bases de datos en los proyectos particiapados`,
        tecnologis: [
        "MYSQL",
        "SqlServer",
        "Firebase",
        "PoweBi",
        "Cubos Olap",
        "UML"
        ],
      },
      {
        title: "STATIC PAGE AND MAIN PAGE",
        funcion: "FRONT",
        estado: "",
        detalles: `Realizacion de paginas estaticas o de una sola pagina, para diferentes empresas de forma promocional o informacional`,
        tecnologis: [
        "React",
        "Angular",
        "Js",
        "Html","css","sass"
        ],
      },
    ],
  },
  freelance: {
    empresa: "MSACOD 117",
    cargo: "FREELANCE",
    date: "Nov.2022 – Dic.2022",
    data: [
      {
        title: "ERP PARA CENTROS OFTALMOLOGICOS (OPTICORE)",
        estado: "",
        detalles: `Desarrollo de ERP para gestión integral en centros oftalmológicos, incluyendo inventario y administración de pacientes en un sistema modular y eficiente.`,
        tecnologis: [
          "MySQL",
          "Redux",
          "Vertical Slice",
          "Arc, CLEAN",
          "LARAVEL",
          "styled Component",
          "Cookies"
        ],
      },
      {
        title: "ERP PARA LABORATORIO CLINICO (B&C LAB)",
        estado: "",
        detalles: `ERP clínico para seguimiento de pruebas, inventario y facturación, con diseño modular que optimiza el manejo de grandes volúmenes de datos en un sistema seguro.`,
        tecnologis: [
          "SQL Server",
          ".Net Framework",
          "Arq. 3 capas",
          "AES",
          "C#",
          "Transacts-SQL",
          "Advanced Installer",
          "ADO.NET",
        ],
      },
    ],
  },

  loading: false,
  error: null,
};

const experiensSlice = createSlice({
  name: "experiens",
  initialState,
  reducers: {
    Start: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchEventsSuccess: (state, action) => {
      state.loading = false;
      state.events = action.payload;
    },
    // Acción para cargar solo los lentes en stock
    fetchStarredSuccess: (state, action) => {
      state.loading = false;
      state.starred = action.payload;
    },
    Failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { Start, fetchEventsSuccess, fetchStarredSuccess, Failure } =
  experiensSlice.actions;
export default experiensSlice.reducer;
