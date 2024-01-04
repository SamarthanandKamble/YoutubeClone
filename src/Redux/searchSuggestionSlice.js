import { createSlice } from "@reduxjs/toolkit";

export const SearchSuggestionsSlice = createSlice({
  name: "search",
  initialState: {
    searchSuggestionCache: {},
    searchSuggestionDiv: false,
    searchItems: "",
    searchQuery: "",
  },
  reducers: {
    addSearchSuggestion: (state, action) => {
      state.searchSuggestionCache = {
        ...state.searchSuggestionCache,
        ...action.payload,
      };
    },
    addSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    addSearchItems: (state, action) => {
      state.searchItems = action.payload;
    },
    closeSearchSuggestion: (state) => {
      state.searchSuggestionDiv = false;
    },
    openSearchSuggestion: (state) => {
      state.searchSuggestionDiv = true;
    },
  },
});

export const {
  addSearchSuggestion,
  closeSearchSuggestion,
  openSearchSuggestion,
  addSearchQuery,
  addSearchItems,
} = SearchSuggestionsSlice.actions;

export default SearchSuggestionsSlice.reducer;
