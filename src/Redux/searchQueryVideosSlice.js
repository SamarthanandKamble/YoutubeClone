import { createSlice } from "@reduxjs/toolkit";

const searchQueryVideosSlice = createSlice({
  name: "searchQueryVideos",
  initialState: {
    videos: null,
  },
  reducers: {
    addSearchQueryVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { addSearchQueryVideos } = searchQueryVideosSlice.actions;

export default searchQueryVideosSlice.reducer;
