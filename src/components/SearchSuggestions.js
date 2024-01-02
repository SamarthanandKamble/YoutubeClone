import React from "react";
import { Search } from "react-feather";
import { useSelector } from "react-redux";
const SearchSuggestions = () => {
  const searchSuggestion = useSelector(
    (state) => state.searchSuggestion?.searchSuggestion
  );
  const searchSuggestionDiv = useSelector(
    (state) => state.searchSuggestion?.searchSuggestionDiv
  );

  if (searchSuggestion?.length <= 0) {
    return;
  }
  console.log("loaded");

  return (
    searchSuggestionDiv && (
      <div className="absolute border text-white mx-auto w-6/12 top-1 transform translate-x-1/2 translate-y-1/4 -mt-3 bg-gray-800">
        <ul className="py-1 ">
          {searchSuggestion.map((item) => (
            <li key={item} className="cursor-pointer hover:bg-gray-700">
              <div className="flex items-center">
                <span className="mx-2">
                  <Search size={22} color="gray" />
                </span>
                <span>{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default SearchSuggestions;
