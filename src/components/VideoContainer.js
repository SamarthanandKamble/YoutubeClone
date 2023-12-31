import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import {} from "react-redux";
import { openSidebar } from "../Redux/sideBarIconSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const popularVideos = useSelector((state) => state.popularVideos?.videos);

  useEffect(() => {
    dispatch(openSidebar());
  }, []);

  return (
    <div className="flex flex-wrap bg-gray-950 absolute left-24 top-11 px-2 mt-2 border">
      {popularVideos.map((videos) => (
        <Link to={"/watch?v=" + videos.id} key={videos.id}>
          <VideoCard videos={videos} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
