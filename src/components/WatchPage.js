import React, { useEffect } from "react";
import WatchVideo from "./WatchVideo";
import SuggestionVideos from "./SuggestionVideos";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../Redux/sideBarIconSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
    // window.scrollTo({
    //   behavior: "smooth",
    //   top: 0,
    // });
  }, []);
  return (
    <div className="bg-gray-950 absolute px-2 w-full flex flex-col sm:flex-row flex-wrap">
      <WatchVideo />
      <SuggestionVideos />
    </div>
  );
};

export default WatchPage;
