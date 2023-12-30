import { createSlice } from "@reduxjs/toolkit";

export const sideBarIconSlice = createSlice({
  name: "sideBarIcon",
  initialState: {
    isSideBarIconOpen: true,
  },
  reducers: {
    closeSidebar: (state) => {
      state.isSideBarIconOpen = false;
    },
    openSidebar: (state) => {
      state.isSideBarIconOpen = true;
    },
  },
});

export const { closeSidebar, openSidebar } = sideBarIconSlice.actions;

export default sideBarIconSlice.reducer;
