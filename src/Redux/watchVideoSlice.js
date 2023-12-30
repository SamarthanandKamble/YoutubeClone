import { createSlice } from "@reduxjs/toolkit";

export const watchVideoSlice = createSlice({
  name: "watchVideo",
  initialState: {
    watchVideo: null,
  },
  reducers: {
    addWatchVideo: (state, action) => {
      state.watchVideo = action.payload;
    },
  },
});

export const { addWatchVideo } = watchVideoSlice.actions;

export default watchVideoSlice.reducer;
