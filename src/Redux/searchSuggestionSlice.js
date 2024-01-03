import { createSlice } from "@reduxjs/toolkit";

export const SearchSuggestionsSlice = createSlice({
  name: "search",
  initialState: {
    searchSuggestion: {},
    searchSuggestionDiv: false,
    searchText: "",
  },
  reducers: {
    addSearchSuggestion: (state, action) => {
      state.searchSuggestion = { ...state.searchSuggestion, ...action.payload };
    },
    addSearchText: (state, action) => {
      state.searchText = action.payload;
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
  addSearchText,
} = SearchSuggestionsSlice.actions;

export default SearchSuggestionsSlice.reducer;
