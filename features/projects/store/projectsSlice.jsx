import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      name: "api-rivera",
      repo_Url: "ruta",
      type: "react",
      logo: "logo",
    },
    {
      name: "api-rivera",
      repo_Url: "ruta",
      type: "laravel",
      logo: "logo",
    },
    {
      name: "api-rivera",
      repo_Url: "ruta",
      type: "c#",
      logo: "logo",
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
