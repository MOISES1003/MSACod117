import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../../features/home/store/homeSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
