import { createSlice } from "@reduxjs/toolkit";

export const SearchSuggestionsSlice = createSlice({
  name: "searchSuggestion",
  initialState: {
    searchSuggestion: null,
    searchSuggestionDiv: false,
  },
  reducers: {
    addSearchSuggestion: (state, action) => {
      state.searchSuggestion = action.payload;
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
} = SearchSuggestionsSlice.actions;

export default SearchSuggestionsSlice.reducer;
