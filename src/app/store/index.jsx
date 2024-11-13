import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../../features/home/store/homeSlice";
import projectsReducer from "../../features/projects/store/projectsSlice";
import experinesReducer from "../../features/experiens/store/experiensSlice";
import componentsReducer from "../../features/components/store/componentesSlice";
export const store = configureStore({
  reducer: {
    home: homeReducer,
    projects: projectsReducer,  
    experiens: experinesReducer,
    components: componentsReducer,
  },
});
