import React from "react";

const VideoCard = ({ videos }) => {
  const { snippet, statistics } = videos;
  const { thumbnails } = snippet;
  // console.log("videos", videos);
  return (
    <div className="flex flex-wrap justify-evenly flex-col w-96 border ">
      <img
        src={thumbnails?.maxres?.url || thumbnails?.standard?.url}
        alt="snippet.thumbnails.maxres"
        className="h-52 w-96 p-2 rounded-lg"
      />
      <div className="flex w-96">
        <img alt="" className="h-9 w-20 rounded-full" />
        <div className="flex flex-col border ">
          <span>{snippet.title}</span>
          <span>{snippet.channelTitle}</span>
          <span>{statistics.viewCount}</span>
          <span>{videos.time}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
