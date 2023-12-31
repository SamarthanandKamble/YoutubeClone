import React, { useState } from "react";
import { Menu, Youtube, Search, Mic, Video, Bell, User } from "react-feather";
import { useDispatch } from "react-redux";
import { menuToggler } from "../Redux/menuSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <ul className="grid grid-cols-12 gap-1 bg-gray-950 text-white">
        <li
          className="p-1 border flex items-center justify-center cursor-pointer col-span-1"
          onClick={(e) => dispatch(menuToggler())}
        >
          <Menu color="gray" />
        </li>
        <li className="p-1 border col-span-2">
          <div className="flex items-center relative">
            <Youtube size={30} color="red" />
            <span className="font-bold mx-1">Premium</span>
            <span className="absolute text-xs top-0 left-24">IN</span>
          </div>
        </li>
        <li className="p-1 border col-span-6">
          <div className="flex w-full items-center ">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 w-full text-white border border-gray-700  rounded-l-full bg-gray-950 focus:outline-none "
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <span className="py-1 px-3 border border-gray-700 bg-gray-700 rounded-r-full focus:outline-none focus:ring-0">
              <Search />
            </span>
            <span className="mx-4 p-1 border w-30 bg-gray-700 rounded-full">
              <Mic size={20} />
            </span>
          </div>
        </li>

        <li className="p-1 flex items-center justify-end border w-25 col-span-1">
          <Video size={20} />
        </li>
        <li className="p-1 flex items-center justify-center border w-25 col-span-1">
          <Bell size={20} />
        </li>
        <li className="p-1 flex items-center border w-25 col-span-1">
          <User size={20} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
