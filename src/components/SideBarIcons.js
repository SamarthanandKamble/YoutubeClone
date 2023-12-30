import React from "react";
import { useDispatch, useSelector } from "react-redux";
const SideBarIcons = () => {
  const shouldOpenSideBarIcons = useSelector(
    (state) => state.sideBarIcon?.isSideBarIconOpen
  );
  return (
    shouldOpenSideBarIcons && (
      <div className="w-20 bg-gray-950 text-white">
        <ul>
          <li>
            <div className="flex flex-col border items-center mb-1">
              <span>icon</span>
              <span className="text-xs">Text</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col border items-center mb-1">
              <span>icon</span>
              <span className="text-xs">Text</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col border items-center mb-1">
              <span>icon</span>
              <span className="text-xs">Text</span>
            </div>
          </li>
        </ul>
      </div>
    )
  );
};

export default SideBarIcons;
