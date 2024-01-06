import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import {} from "react-redux";
import { openSidebar } from "../Redux/sideBarIconSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const popularVideos = useSelector((state) => state.popularVideos?.videos);

  useEffect(() => {
    dispatch(openSidebar());
  }, []);

  return (
    <div className="flex flex-wrap justify-between content-center items-center bg-gray-950 absolute top-11 px-2 md:left-16 md:mt-16 lg:mt-14 left-0 mt-16 w-auto">
      {popularVideos.map((videos) => (
          <VideoCard videos={videos} key={videos.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
