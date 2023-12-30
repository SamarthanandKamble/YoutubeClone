import React, { useEffect } from "react";
import WatchVideo from "./WatchVideo";
import SuggestionVideos from "./SuggestionVideos";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../Redux/sideBarIconSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);
  return (
    <div className="absolute px-2 w-full flex border">
      <WatchVideo />
      <SuggestionVideos />
    </div>
  );
};

export default WatchPage;
