import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./menuSlice";
import PopularVideosReducer from "./popularVideosSlice";
import SideBarIconsReducer from "./sideBarIconSlice";
import WatchVideoReducer from "./watchVideoSlice";
import SearchSuggestionsReducer from "./searchSuggestionSlice";
import SearchQueryVideos from "./searchQueryVideosSlice";

export const store = configureStore({
  reducer: {
    menu: MenuReducer,
    popularVideos: PopularVideosReducer,
    sideBarIcon: SideBarIconsReducer,
    watchVideo: WatchVideoReducer,
    search: SearchSuggestionsReducer,
    searchQueryVideos: SearchQueryVideos,
  },
});
