import React, { useEffect, useState } from "react";
import { Menu, Search, Mic, Video, Bell, User } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { menuToggler } from "../Redux/menuSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_URL } from "../constants";
import {
  addSearchItems,
  addSearchQuery,
  addSearchSuggestion,
  closeSearchSuggestion,
  openSearchSuggestion,
} from "../Redux/searchSuggestionSlice";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [listening, setListening] = useState(false);
  const searchSuggestionList = useSelector(
    (state) => state.search?.searchSuggestionCache
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchSuggestionList[searchText]) {
        dispatch(addSearchItems(searchText));
      } else {
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
      dispatch(addSearchSuggestion({ [searchText]: result[1] }));
      dispatch(addSearchItems(searchText));
    } catch (error) {
      console.error(error?.message);
    }
  };
  const startListening = () => {
    if (!listening) {
      SpeechRecognition.startListening({ continuous: true });
      setListening(true);
    } else {
      SpeechRecognition.stopListening();
      setListening(false);
    }
  };

  return (
    <div className="fixed top-0 z-40 w-full">
      <ul className="grid grid-cols-12 gap-1 bg-gray-950 text-white w-full py-2">
        <li className="p-1 flex items-center justify-center -ml-6 cursor-pointer col-span-1">
          <Menu
            onClick={(e) => dispatch(menuToggler())}
            color="gray"
            size={28}
          />
        </li>
        <li className="p-1 col-span-2">
          <div className="flex items-center relative">
            <span>
              <FontAwesomeIcon icon={faYoutube} size="2xl" />
            </span>
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
              value={searchText || transcript}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onFocus={() => {
                dispatch(openSearchSuggestion());
              }}
            />

            <span className="py-1 px-3 border border-gray-700 bg-gray-700 rounded-r-full focus:outline-none focus:ring-0 cursor-pointer">
              <Search />
            </span>

            <span
              onClick={startListening}
              className="mx-4 p-1 border w-30 bg-gray-700 rounded-full cursor-pointer"
            >
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
    </div>
  );
};

export default Navbar;
