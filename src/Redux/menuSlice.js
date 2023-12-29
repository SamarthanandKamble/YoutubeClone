import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    menuToggler: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { menuToggler } = menuSlice.actions;

export default menuSlice.reducer;
