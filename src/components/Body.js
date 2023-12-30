import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import SideBarIcons from "./SideBarIcons";
import usePopularVideos from "../Hooks/usePopularVideos";
import { Outlet } from "react-router-dom";
const Body = () => {
  usePopularVideos();
  const menuToggler = useSelector((state) => state.menu?.isMenuOpen);

  return (
    <div className="bg-gray-950 h-screen text-white relative">
      <div className="flex">
        {menuToggler ? <SideBar /> : <SideBarIcons />}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
