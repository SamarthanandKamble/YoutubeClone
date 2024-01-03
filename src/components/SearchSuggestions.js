import React from "react";
import { Search } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import useSearchQueryVideos from "../Hooks/useSearchQueryVideos";
import { addSearchText } from "../Redux/searchSuggestionSlice";
const SearchSuggestions = () => {
  const dispatch = useDispatch();
  const searchSuggestionList = useSelector(
    (state) => state.search?.searchSuggestion
  );
  const searchSuggestionDiv = useSelector(
    (state) => state.search?.searchSuggestionDiv
  );
  const searchText = useSelector((state) => state.search?.searchText);
  useSearchQueryVideos(searchText);

  if (searchSuggestionList?.length <= 0 || searchSuggestionList === undefined) {
    return;
  }

  return (
    searchSuggestionDiv &&
    searchSuggestionList[searchText]?.length > 0 && (
      <div className="absolute border text-white mx-auto w-6/12 top-1 transform translate-x-1/2 translate-y-1/4 -mt-3 bg-gray-800 rounded-lg">
        <ul className="py-1">
          {searchSuggestionList[searchText].map((item) => (
            <li 
            key={item}
            className="cursor-pointer hover:bg-gray-700"
            onClick={(e)=>{console.log("value :",e.target.value)}} 
             >
              <div
                className="flex items-center"
              >
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
