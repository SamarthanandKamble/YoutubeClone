import React from "react";
import usePopularVideos from "../Hooks/usePopularVideos";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
const VideoContainer = () => {
  const popularVideos = useSelector((state) => state.popularVideos?.videos);

  return (
    <div className="flex flex-wrap bg-gray-950 absolute left-20 px-2">
      {popularVideos.map((videos) => (
        <div  key={videos.id}>
          <VideoCard videos={videos} />
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
