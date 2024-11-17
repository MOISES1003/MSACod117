import { createSlice } from "@reduxjs/toolkit";
import logoPng from "../../../assets/projects/Member.jpg"
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
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab voluptate harum enim praesentium reprehenderit quod quos incidunt eveniet fugit libero.",
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/MOISES1003/LoginProject",
          icon: <FaGithub/>
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
          icon: <IoLogoGameControllerA/>
        }
      ]
    },
    {
      name: "Curso c# FullStack",
      type: "c#",
      logo: "https://i.ibb.co/sKNccL0/c-sharp.png",
      color: "#6C287E",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,",
      // active: false,
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/MOISES1003/FullStackCurso",
          icon: <FaGithub/>
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
      ]
    },
    {
      name: "Curso de React",
      type: "react",
      logo: "https://i.ibb.co/VQg71J5/science.png",
      color: "#00D8FF",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab ",
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/MOISES1003/Curso_react",
          icon: <FaGithub/>
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
      ]
    },
    {
      name: "Practivet",
      type: "react",
      logo: "https://i.ibb.co/b6sVyC1/la-tienda-de-animales.png",
      color: "#00D8FF",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab ",
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/sistema-practivet-cliente-web",
          icon: <FaGithub/>
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
      ]
    },
    {
      name: "Practivet Api",
      type: "laravel",
      logo: "https://i.ibb.co/m0kY73V/api-Oractivet.png",
      color: "#ff2d1e",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab ",
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/sistema-practivet-cliente-api",
          icon: <FaGithub/>
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
      ]
    },
    {
      name: "e-comerce web ",
      type: "react",
      logo: "https://i.ibb.co/gRBF3Zh/tienda.png",
      color: "#00D8FF",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab ",
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/farmavet-e-commerce-web",
          icon: <FaGithub/>
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
      ]
    },
    {
      name: "e-comerce web api",
      type: "laravel",
      logo: "https://i.ibb.co/WvXP4Mb/api-Tienda.png",
      color: "#ff2d1e",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab ",
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/farmavet-e-commerce-web",
          icon: <FaGithub/>
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
      ]
    },
    {
      name: "Opticore",
      type: "react",
      logo: "https://i.ibb.co/gyrn8dC/gafas-de-prueba.png",
      color: "#00D8FF",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab ",
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/MOISES1003/rivera-project",
          icon: <FaGithub/>
        },
        {
          name: "Web",
          active: false,
          Url: "",
          icon: <FaGlobe/>
        },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ]
    },
    {
      name: "Opticore API",
      type: "laravel",
      logo: "https://i.ibb.co/gyrn8dC/gafas-de-prueba.png",
      color: "#ff2d1e",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab ",
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/MOISES1003/api-opticore",
          icon: <FaGithub/>
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
      ]
    },
    {
      name: "plantSana Dashboard",
      type: "react",
      logo: "https://i.ibb.co/q9ZcZ2p/planta.png",
      color: "#00D8FF",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab ",
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/planta-de-la-vida-dashboard-admin",
          icon: <FaGithub/>
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
      ]
    },
    {
      name: "plantSana API",
      type: "laravel",
      logo: "https://i.ibb.co/gdS2nNS/apiOjo.png",
      color: "#ff2d1e",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab ",
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/planta-de-la-vida-api",
          icon: <FaGithub/>
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
      ]
    },
    {
      name: "Plantsana Pasarela de pago(Culqi)",
      type: "react",
      logo: "https://i.ibb.co/Z2Z3j1x/pasarela-de-pago.png",
      color: "#00D8FF",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab ",
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
          icon: <FaGlobe/>
        },
        // {
        //   name: "Demo",
        //   active: false, // aqui si esta activado se mostrara la etiqueda de "new" si no, no se mostrara
        //   Url: "", // la url tiene que estar vacia para que no se muestre el icono
        //   icon: <IoLogoGameControllerA/>
        // }
      ]
    },
    {
      name: "Sistema de venta y factura",
      type: "react",
      logo: "https://i.ibb.co/KKBfFGY/punto-de-venta.png",
      color: "#00D8FF",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab ",
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/LucasRenatoMelgaRios/new-dashboard",
          icon: <FaGithub/>
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
      ]
    },
    {
      name: "Sistema de venta y factura - API",
      type: "laravel",
      logo: "https://i.ibb.co/ryZzKJt/dinero.png",
      color: "#ff2d1e",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab ",
      links: [
        {
          name: "Repositorio",
          active: true,
          Url: "https://github.com/PhantomDevPT/sistema-de-venta-api",
          icon: <FaGithub/>
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
      ]
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
