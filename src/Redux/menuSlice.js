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
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { menuToggler, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
