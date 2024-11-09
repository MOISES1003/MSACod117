import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  abount: `Desarrollador Full Stack con casi 2
            años de experiencia en Rino Software y
            proyectos freelance, enfocado en
            soluciones empresariales integrales.
            Con conocimientos en JavaScript, React
            y Laravel, estoy abierto a nuevas
            oportunidades laborales para contribuir
            en el desarrollo de aplicaciones
            innovadoras y de alto impacto.`,

  skils: [],
  fullStak: {
    empresa: "RINO SOFTWARE",
    modalidad: "Remoto",
    cargo: "FULLSTACK",
    date: "Feb.2023 - Sep.2024",
    data: [
      {
        title: "IMPLENTACION DE PASARELLA DE PAGO (PLANTSANA)",
        funcion: "",
        estado: "",
        detalles: `
          • Encargado del diseño y desarrollo de aplicación de e-commerce
            personalizado, adaptadas a las necesidades de clientes del sector
            reatail
          • Implemente funcionalidades avanzadas como gestión de
            inventario, integración de pasarela de pago, optimización de la
            experiencia de usuario y funcionalidades de carro de compra.`,
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
        title: "SISTEMA DE VENTA PARA CEVICHERIA (MORDISCO)",
        funcion: "",
        estado: "",
        detalles: `
            • Desarrolle un sistema de venta adaptado específicamente para el
            sector de restaurantes, cumpliendo con los requisitos de gestión
            de pedidos, inventario, mozos, sistema de puntos para clientes,
            facturación y ventas en una plataforma centralizada.`,
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
        title: "ERP PARA VETERINARIA CON E-COMMERCE (PRACTIVET)",
        funcion: "PROJECT LEADER",
        estado: "",
        detalles: `
            • Lidere el desarrollo de un ERP completo para una clínica
            veterinaria. Diseñado para gestionar inventario, cistas,
            facturación y venta en una plataforma centralizada
            • Administre la base de datos con un enfoque en la seguridad y la
            eficiencia, logrando un sistema robusto que permite`,
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
    ],
  },
  freelance: {
    empresa: "MSACOD 117",
    modalidad: "Remoto",
    cargo: "FREELANCE",
    date: "Nov.2022 – Dic.2022",
    data: [
      {
        title: "ERP PARA CENTROS OFTALMOLOGICOS (OPTICORE)",
        estado: "",
        detalles: ``,
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
        title: "ERP PARA LABORATORIO CLINICO (B&C LAB)",
        estado: "",
        detalles: `
            • Desarrolle un ERP para laboratorio clínico, enfocado en la
            gestión integral de operaciones como seguimiento de pruebas,
            inventario de activos, generación de informes y facturación
            • Aplique buenas prácticas de diseño modular y optimización de
            procesos logrando un sistema que maneja eficientemente grandes
            volúmenes de datos.
            `,
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
