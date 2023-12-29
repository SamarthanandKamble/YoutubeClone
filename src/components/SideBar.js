import React from "react";
import { Home } from "react-feather";
const SideBar = () => {
  return (
    <div className="w-52 border border-gray-950 p-1 h-screen">
      <ul>
        <li>
          <div className="flex justify-between">
            <span className="px-2 py-1 border">
              <Home />
            </span>
            <span className="p-1 mx-1 border w-full">Home</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <span className="px-2 py-1 border">
              <Home />
            </span>
            <span className="p-1 mx-1 border w-full">Home</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <span className="px-2 py-1 border">
              <Home />
            </span>
            <span className="p-1 mx-1 border w-full">Shorts</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <span className="px-2 py-1 border">
              <Home />
            </span>
            <span className="p-1 mx-1 border w-full">Subscription</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <span className="px-2 py-1 border">
              <Home />
            </span>
            <span className="p-1 mx-1 border w-full">Youtube Music</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
