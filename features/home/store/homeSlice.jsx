import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  starred: [],
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
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
  homeSlice.actions;
export default homeSlice.reducer;
