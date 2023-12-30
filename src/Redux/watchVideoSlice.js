import { createSlice } from "@reduxjs/toolkit";

export const watchVideoSlice = createSlice({
  name: "watchVideo",
  initialState: {
    watchVideo: null,
  },
  reducers: {
    addWatchVideo: (state, payload) => {
      state.watchVideo = payload.id;
    },
  },
});

export const { addWatchVideo } = watchVideoSlice.actions;

export default watchVideoSlice.reducer;
