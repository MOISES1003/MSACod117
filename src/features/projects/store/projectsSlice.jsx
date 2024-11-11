import { createSlice } from "@reduxjs/toolkit";
import logoPng from "../../../assets/projects/Member.jpg"
const initialState = {
  projects: [
    {
      name: "MSAcod117",
      repo_Url: "https://github.com/MOISES1003/MSACod117",
      web_Url: "ruta",
      demo_Url: "",
      type: "react",
      logo: logoPng,
      color: "#00D8FF",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab voluptate harum enim praesentium reprehenderit quod quos incidunt eveniet fugit libero.",
      active: true,
    },
    {
      name: "ApiOpticore",
      repo_Url: "ruta",
      type: "laravel",
      logo: logoPng,
      color: "#ff2d1e",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,",
      active: false,
    },
    {
      name: "api-rivera",
      repo_Url: "ruta",
      type: "c#",
      logo: logoPng,
      color: "#6C287E",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, expedita deserunt ad asperiores illo soluta aperiam, pariatur sequi ab ",
      active: false,
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
