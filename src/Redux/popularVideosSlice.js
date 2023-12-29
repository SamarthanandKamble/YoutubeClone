import { createSlice } from "@reduxjs/toolkit";

export const popularVideosSlice = createSlice({
  name: "popularVideos",
  initialState: {
    videos: [],
  },
  reducers: {
    addPopularVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { addPopularVideos } = popularVideosSlice.actions;

export default popularVideosSlice.reducer;
