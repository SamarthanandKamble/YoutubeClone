import React, { useState } from "react";
import { Menu, Youtube, Search, Mic, Video, Bell, User } from "react-feather";
const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <ul className="flex flex-wrap justify-between p-2 items-center bg-gray-950 text-white">
        <li className="p-1 border w-25 cursor-pointer">
          <Menu />
        </li>
        <li className="p-1 border w-40">
          <div className="flex items-center relative">
            <Youtube size={30} color="red" />
            <span className="font-bold mx-1">Premium</span>
            <span className="absolute text-xs top-0 left-24">IN</span>
          </div>
        </li>
        <li className="p-1 border w-96">
          <div className="flex items-center ">
            <input
              type="text"
              placeholder="Search"
              className="p-1 w-full text-black border-gray-500 rounded-l-full"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <span className="py-1 px-3 border border-gray-700 bg-gray-700 rounded-r-full">
              <Search />
            </span>
            <span className="mx-4 p-1 border w-30 bg-gray-700 rounded-full">
              <Mic size={20} />
            </span>
          </div>
        </li>

        <li className="p-1 border w-25">
          <Video size={20} />
        </li>
        <li className="p-1 border w-25">
          <Bell size={20} />
        </li>
        <li className="p-1 border w-25">
          <User size={20} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
