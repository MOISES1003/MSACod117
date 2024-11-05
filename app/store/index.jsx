import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../../features/home/store/homeSlice";
import projectsReducer from "../../features/projects/store/projectsSlice";
export const store = configureStore({
  reducer: {
    home: homeReducer,
    projects: projectsReducer
  },
});
