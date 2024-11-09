import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../../features/home/store/homeSlice";
import projectsReducer from "../../features/projects/store/projectsSlice";
import experinesReducer from "../../features/experiens/store/experiensSlice";
export const store = configureStore({
  reducer: {
    home: homeReducer,
    projects: projectsReducer,
    experiens: experinesReducer
  },
});
