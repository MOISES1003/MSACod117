import { createSlice } from "@reduxjs/toolkit";
import logoPng from "../../../assets/projects/Member.jpg";
import { FaGithub } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { IoLogoGameControllerA } from "react-icons/io";

const initialState = {
  projects: [
    {
      name: "Login PowerBi",
      type: "c#",
      logo: "https://i.ibb.co/4SZDWmc/login.png",
      color: "#6C287E",
      description:
        "Sistema de inicio de sesión diseñado para lanzar el ejecutable de PowerBI de manera segura y confidencial. Este proyecto garantiza un acceso controlado y optimiza la privacidad en la gestión de reportes y datos analíticos.",
        estado : false,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/MOISES1003/LoginProject",
          icon: <FaGithub />,
        },
        // {
        //   name: "Web",
        //   active: true,
        //   Url: "",
        //   icon: <FaGlobe/>
        // },
        {
          name: "Demo",
          active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
          Url: "", // la url tiene que estar vacia para que no se muestre el icono
          icon: <IoLogoGameControllerA />,
        },
      ],
    },
    {
      name: "Curso c# FullStack",
      type: "c#",
      logo: "https://i.ibb.co/sKNccL0/c-sharp.png",
      color: "#6C287E",
      description:
        "Programa de aprendizaje integral que abarca el desarrollo de aplicaciones completas con C#. Incluye conceptos básicos, diseño de interfaces, lógica backend y manejo de bases de datos, preparando a los estudiantes para construir soluciones reales en el mundo laboral.",
        estado : false,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/MOISES1003/FullStackCurso",
          icon: <FaGithub />,
        },
        // {
        //   name: "Web",
        //   active: false,
        //   Url: "",
        //   icon: <FaGlobe/>
        // },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ],
    },
    {
      name: "Curso de React",
      type: "react",
      logo: "https://i.ibb.co/VQg71J5/science.png",
      color: "#00D8FF",
      description:
        "Capacitación intensiva que abarca desde los fundamentos hasta técnicas avanzadas en React, permitiendo a los desarrolladores crear interfaces modernas, dinámicas y optimizadas para el ecosistema web actual.",
        estado : false,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/MOISES1003/Curso_react",
          icon: <FaGithub />,
        },
        // {
        //   name: "Web",
        //   active: false,
        //   Url: "",
        //   icon: <FaGlobe/>
        // },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ],
    },
    {
      name: "Practivet",
      type: "react",
      logo: "https://i.ibb.co/b6sVyC1/la-tienda-de-animales.png",
      color: "#00D8FF",
      description:
        "Software ERP diseñado específicamente para veterinarias, permitiendo gestionar eficientemente citas, expedientes de pacientes, inventarios y finanzas. Una solución integral para optimizar la operatividad de clínicas veterinarias.",
        estado : false,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/sistema-practivet-cliente-web",
          icon: <FaGithub />,
        },
        // {
        //   name: "Web",
        //   active: false,
        //   Url: "",
        //   icon: <FaGlobe/>
        // },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ],
    },
    {
      name: "Practivet Api",
      type: "laravel",
      logo: "https://i.ibb.co/m0kY73V/api-Oractivet.png",
      color: "#ff2d1e",
      description:
        "Backend que soporta el ERP PractiVet, ofreciendo servicios clave como gestión de datos, autenticación y procesamiento de información. Diseñado para garantizar un rendimiento óptimo y escalabilidad en la integración con aplicaciones frontend.",
        estado : false,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/sistema-practivet-cliente-api",
          icon: <FaGithub />,
        },
        // {
        //   name: "Web",
        //   active: false,
        //   Url: "",
        //   icon: <FaGlobe/>
        // },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ],
    },
    {
      name: "e-comerce web ",
      type: "react",
      logo: "https://i.ibb.co/gRBF3Zh/tienda.png",
      color: "#00D8FF",
      description:
        "Plataforma web profesional para ventas en línea que combina una experiencia de usuario intuitiva con herramientas para administrar productos, pedidos y clientes, ayudando a las empresas a crecer en el entorno digital.",
        estado : false,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/farmavet-e-commerce-web",
          icon: <FaGithub />,
        },
        // {
        //   name: "Web",
        //   active: false,
        //   Url: "",
        //   icon: <FaGlobe/>
        // },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ],
    },
    {
      name: "e-comerce web api",
      type: "laravel",
      logo: "https://i.ibb.co/WvXP4Mb/api-Tienda.png",
      color: "#ff2d1e",
      description:
        "Servicio backend que potencia el funcionamiento del e-commerce, proporcionando funcionalidades como gestión de productos, control de inventarios y procesamiento de pagos, con un enfoque en la eficiencia y seguridad.",
        estado : false,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/farmavet-e-commerce-web",
          icon: <FaGithub />,
        },
        // {
        //   name: "Web",
        //   active: false,
        //   Url: "",
        //   icon: <FaGlobe/>
        // },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ],
    },
    {
      name: "Opticore",
      type: "react",
      logo: "https://i.ibb.co/gyrn8dC/gafas-de-prueba.png",
      color: "#00D8FF",
      description:
        "ERP especializado para clínicas oftalmológicas, diseñado para facilitar la gestión de pacientes, programación de citas, inventarios y aspectos administrativos, mejorando la eficiencia operativa y la experiencia del paciente.",
        estado : true,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/MOISES1003/rivera-project",
          icon: <FaGithub />,
        },
        {
          name: "Web",
          active: false,
          Url: "",
          icon: <FaGlobe />,
        },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ],
    },
    {
      name: "Opticore API",
      type: "laravel",
      logo: "https://i.ibb.co/gyrn8dC/gafas-de-prueba.png",
      color: "#ff2d1e",
      description:
        "Sistema backend que respalda al ERP OptiCore, proporcionando servicios robustos para gestionar datos médicos, usuarios y operaciones administrativas, asegurando una integración fluida y segura.",
        estado : true,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/MOISES1003/api-opticore",
          icon: <FaGithub />,
        },
        // {
        //   name: "Web",
        //   active: false,
        //   Url: "",
        //   icon: <FaGlobe/>
        // },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ],
    },
    {
      name: "plantSana Dashboard",
      type: "react",
      logo: "https://i.ibb.co/q9ZcZ2p/planta.png",
      color: "#00D8FF",
      description:
        "Sistema empresarial diseñado para gestionar los procesos de industrialización, procesamiento y comercialización de productos medicinales. Ofrece módulos de seguimiento de producción, ventas e inventarios, adaptados a las necesidades del negocio.",
        estado : false,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/planta-de-la-vida-dashboard-admin",
          icon: <FaGithub />,
        },
        // {
        //   name: "Web",
        //   active: false,
        //   Url: "",
        //   icon: <FaGlobe/>
        // },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ],
    },
    {
      name: "plantSana API",
      type: "laravel",
      logo: "https://i.ibb.co/gdS2nNS/apiOjo.png",
      color: "#ff2d1e",
      description:
        "Backend que soporta todas las funcionalidades del PlantSana Dashboard, asegurando una comunicación eficiente entre módulos, escalabilidad y seguridad en la gestión de datos empresariales.",
        estado : false,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/planta-de-la-vida-api",
          icon: <FaGithub />,
        },
        // {
        //   name: "Web",
        //   active: false,
        //   Url: "",
        //   icon: <FaGlobe/>
        // },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ],
    },
    {
      name: "Plantsana Pasarela de pago(Culqi)",
      type: "react",
      logo: "https://i.ibb.co/Z2Z3j1x/pasarela-de-pago.png",
      color: "#00D8FF",
      description:
        "Implementación de una solución de pagos en línea utilizando Culqi, diseñada para ofrecer una experiencia de compra segura, rápida y confiable dentro de la página web de PlantSana. Ideal para empresas que buscan modernizar sus métodos de pago.",
        estado : false,
      links: [
        // {
        //   name: "Repositorio",
        //   active: false,
        //   Url: "https://github.com/MOISES1003/api-opticore",
        //   icon: <FaGithub/>
        // },
        {
          name: "Web",
          active: true,
          Url: "https://plantsana.com/#/catalogo",
          icon: <FaGlobe />,
        },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ],
    },
    {
      name: "Sistema de venta y factura",
      type: "react",
      logo: "https://i.ibb.co/KKBfFGY/punto-de-venta.png",
      color: "#00D8FF",
      description:
        "Proyecto de punto de venta que integra facturación electrónica aprobada por SUNAT. Diseñado para optimizar la gestión de ventas, control de inventarios y cumplimiento tributario en negocios de diversos tamaños.",
        estado : false,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/LucasRenatoMelgaRios/new-dashboard",
          icon: <FaGithub />,
        },
        // {
        //   name: "Web",
        //   active: false,
        //   Url: "",
        //   icon: <FaGlobe/>
        // },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ],
    },
    {
      name: "Sistema de venta y factura - API",
      type: "laravel",
      logo: "https://i.ibb.co/ryZzKJt/dinero.png",
      color: "#ff2d1e",
      description:
        "Servicio backend que opera el sistema de venta, permitiendo una integración ágil con plataformas de frontend y garantizando el manejo seguro y eficiente de operaciones comerciales.",
        estado : false,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/sistema-de-venta-api",
          icon: <FaGithub />,
        },
        // {
        //   name: "Web",
        //   active: false,
        //   Url: "",
        //   icon: <FaGlobe/>
        // },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ],
    },
  ],
  loading: false,
  error: null,
};

const projectsSlice = createSlice({
  name: "projects",
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
    Failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { Start, fetchEventsSuccess, Failure } = projectsSlice.actions;
export default projectsSlice.reducer;
