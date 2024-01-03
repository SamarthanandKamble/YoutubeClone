import React, { useEffect, useState } from "react";
import { Menu, Youtube, Search, Mic, Video, Bell, User } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { menuToggler } from "../Redux/menuSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_URL } from "../constants";
import SearchSuggestions from "./SearchSuggestions";
import {
  addSearchSuggestion,
  addSearchText,
  closeSearchSuggestion,
  openSearchSuggestion,
} from "../Redux/searchSuggestionSlice";
import useSearchQueryVideos from "../Hooks/useSearchQueryVideos";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchSuggestionList = useSelector(
    (state) => state.search?.searchSuggestion
  );
  const searchSuggestionDiv = useSelector(
    (state) => state.search?.searchSuggestionDiv
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchSuggestionList[searchText]) {
        console.log("present in cache :", searchSuggestionList[searchText]);
      } else {
        console.log("Need to fetch");
        getTheSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getTheSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_URL + searchText);
      const result = await data.json();
      dispatch(
        addSearchSuggestion({
          [searchText]: result[1],
        })
      );
    } catch (error) {
      console.warn(error?.message);
    } 
  };

  return (
    <div className="fixed top-0 z-40 w-full">
      <ul className="grid grid-cols-12 gap-1 bg-gray-950 text-white w-full py-2">
        <li
          className="p-1 flex items-center justify-center cursor-pointer col-span-1"
          onClick={(e) => dispatch(menuToggler())}
        >
          <Menu color="gray" />
        </li>
        <li className="p-1 col-span-2">
          <div className="flex items-center relative">
            <Youtube size={30} color="red" />
            <span className="font-bold mx-1">Premium</span>
            <span className="absolute text-xs top-0 left-24 text-gray-400">
              IN
            </span>
          </div>
        </li>
        <li className="p-1 col-span-6">
          <div className="flex w-full items-center ">
            <input
              type="text"
              placeholder="Search"
              className="px-5 py-1 w-full text-white border border-gray-700  rounded-l-full bg-gray-950 focus:outline-none "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                dispatch(addSearchText(e.target.value));
              }}
              onFocus={() => {
                dispatch(openSearchSuggestion());
              }}
              onBlur={() => {
                dispatch(closeSearchSuggestion());
              }}
            />
            <span className="py-1 px-3 border border-gray-700 bg-gray-700 rounded-r-full focus:outline-none focus:ring-0">
              <Search />
            </span>
            <span className="mx-4 p-1 border w-30 bg-gray-700 rounded-full">
              <Mic size={20} />
            </span>
          </div>
        </li>

        <li className="p-1 flex items-center justify-end w-25 col-span-1">
          <Video size={20} />
        </li>
        <li className="p-1 flex items-center justify-center w-25 col-span-1">
          <Bell size={20} />
        </li>
        <li className="p-1 flex items-center w-25 col-span-1">
          <User size={20} />
        </li>
      </ul>
      <div>{searchSuggestionDiv && <SearchSuggestions />}</div>
    </div>
  );
};

export default Navbar;
