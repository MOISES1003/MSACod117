import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  abount: `Desarrollador Full Stack con casi 2 años de experiencia en Rino Software y proyectos freelance, enfocado en soluciones empresariales integrales. Con conocimientos en JavaScript, React y Laravel, abierto a nuevas oportunidades para contribuir en el desarrollo de aplicaciones innovadoras y de alto impacto.`,

  skils: [],
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
        tecnologis: ["Laravel", "React", "Culqi", "MySQL", "API REST", "Postman"],
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
