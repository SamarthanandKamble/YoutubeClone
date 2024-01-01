import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Home, Film, Users, PlayCircle, Download, Save } from "react-feather";
const SideBarIcons = () => {
  const shouldOpenSideBarIcons = useSelector(
    (state) => state.sideBarIcon?.isSideBarIconOpen
  );
  return (
    shouldOpenSideBarIcons && (
      <div className="w-24 bg-gray-950 text-white mt-2 min-h-full fixed left-0">
        <ul className="p-1 items-center content-center">
          <li>
            <div className="flex flex-col flex-wrap items-center mb-6">
              <span className="">
                <Home color="gray" />
              </span>
              <span className="text-xs">Home</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col flex-wrap items-center mb-6">
              <span className="">
                <Film color="gray" />
              </span>
              <span className="text-xs">Shorts</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col flex-wrap items-center mb-6">
              <span className="items-center">
                <Users color="gray" />
              </span>
              <span className="text-xs text-center">Subscriptions</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col flex-wrap items-center mb-6 w-full">
              <span>
                <PlayCircle color="gray" />
              </span>
              <span className="text-xs text-center">Youtube Music</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col flex-wrap items-center mb-6">
              <span>
                <Save color="gray" />
              </span>
              <span className="text-xs">You</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col flex-wrap items-center mb-6">
              <span>
                <Download color="gray" />
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
