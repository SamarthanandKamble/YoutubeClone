import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import SideBarIcons from "./SideBarIcons";
import VideoContainer from "./VideoContainer";
import usePopularVideos from "../Hooks/usePopularVideos";
const Body = () => {
  usePopularVideos();
  const menuToggler = useSelector((state) => state.menu?.isMenuOpen);

  return (
    <div className="bg-gray-950 h-screen text-white">
      <Navbar />
      <div className="flex">
        {menuToggler ? <SideBar /> : <SideBarIcons />}
        <VideoContainer />
      </div>
    </div>
  );
};

export default Body;
