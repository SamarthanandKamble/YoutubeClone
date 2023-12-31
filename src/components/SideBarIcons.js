import React from "react";
import { useSelector } from "react-redux";
import { Home, Film, Users, PlayCircle, Download, Save } from "react-feather";
import { Link } from "react-router-dom";
const SideBarIcons = () => {
  const shouldOpenSideBarIcons = useSelector(
    (state) => state.sideBarIcon?.isSideBarIconOpen
  );
  return (
    shouldOpenSideBarIcons && (
      <div className="w-24 bg-gray-950 text-white mt-2 min-h-full fixed left-0 top-12 md:w-16 sm:block hidden">
        <ul className="p-1 items-center content-center">
          <Link to={"/"}>
            <li>
              <div className="flex flex-col flex-wrap items-center mb-6">
                <span className="">
                  <Home color="gray" size={24} />
                </span>
                <span className="text-xs">Home</span>
              </div>
            </li>
          </Link>
          <li>
            <div className="flex flex-col flex-wrap items-center mb-6">
              <span className="">
                <Film color="gray" size={24} />
              </span>
              <span className="text-xs">Shorts</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col flex-wrap items-center mb-6">
              <span className="items-center">
                <Users color="gray" size={24} />
              </span>
              <span className="text-xs text-center">Sub scriptions</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col flex-wrap items-center mb-6 w-full">
              <span>
                <PlayCircle color="gray" size={24} />
              </span>
              <span className="text-xs text-center">Youtube Music</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col flex-wrap items-center mb-6">
              <span>
                <Save color="gray" size={24} />
              </span>
              <span className="text-xs">You</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col flex-wrap items-center mb-6">
              <span>
                <Download color="gray" size={24} />
              </span>
              <span className="text-xs">Download</span>
            </div>
          </li>
        </ul>
      </div>
    )
  );
};

export default SideBarIcons;
