import React, { useEffect, useState } from "react";
import { Search } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import {
  addSearchQuery,
  closeSearchSuggestion,
} from "../Redux/searchSuggestionSlice";
import { Link } from "react-router-dom";

const SearchSuggestions = () => {
  const dispatch = useDispatch();
  const searchSuggestionList = useSelector(
    (state) => state.search?.searchSuggestionCache
  );
  const searchItems = useSelector((state) => state.search?.searchItems);

  const searchSuggestionDiv = useSelector(
    (state) => state.search?.searchSuggestionDiv
  );

  if (searchSuggestionList?.length <= 0 || searchSuggestionList === undefined) {
    return;
  }
  return (
    searchSuggestionDiv &&
    searchSuggestionList[searchItems]?.length > 0 && (
      <div className="absolute border text-white mx-auto w-6/12 top-1 transform translate-x-1/2 translate-y-1/4 -mt-3 bg-gray-800 rounded-lg z-40">
        <ul className="py-1">
          {searchSuggestionList[searchItems].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:bg-gray-700"
              onClick={(e) => {
                dispatch(closeSearchSuggestion());
                dispatch(addSearchQuery(item));
              }}
            >
              <Link to={"/results?search_query="}>
                <div className="flex items-center">
                  <span className="mx-2">
                    <Search size={22} color="gray" />
                  </span>
                  <span>{item}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default SearchSuggestions;
