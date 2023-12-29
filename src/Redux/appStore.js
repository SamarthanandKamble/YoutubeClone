import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./menuSlice";
import PopularVideosReducer from "./popularVideosSlice";
export const store = configureStore({
  reducer: {
    menu: MenuReducer,
    popularVideos: PopularVideosReducer,
  },
});
