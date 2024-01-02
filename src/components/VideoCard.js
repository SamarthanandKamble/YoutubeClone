import React from "react";
import { Link } from "react-router-dom";
const VideoCard = ({ videos }) => {
  const { snippet, statistics } = videos;
  const { thumbnails } = snippet;
  // console.log("videos", videos);
  const truncateString = (str) => {
    let words = str.split(" ");
    if (words.length < 10) {
      return words.slice(0, words.length - 1).join(" ");
    } else {
      return words.slice(0, words.length / 4).join(" ") + " ...";
    }
  };

  const calculatePublishTime = (dateStr) => {
    let currentDate = new Date();
    let pastDate = new Date(dateStr);
    let timeDifference = currentDate - pastDate;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return seconds + " seconds ago";
    } else if (minutes < 60) {
      return minutes + " minutes ago";
    } else if (hours < 24) {
      return hours + " hours ago";
    } else if (days < 7) {
      return days + " days ago";
    } else {
      const weeks = Math.floor(days / 7);
      return weeks + " weeks ago";
    }
  };

  return (
    <div className="flex flex-wrap flex-col m-1 w-80 h-80 .custom-scrollbar">
      <Link to={"/watch?v=" + videos.id}>
        <div className="h-48 w-80 aspect-video">
          <img
            src={thumbnails?.maxres?.url || thumbnails?.high?.url}
            alt="snippet.thumbnails.maxres"
            className="h-full w-full p-2 rounded-lg "
          />
        </div>
        <div className="flex w-full ">
          <img alt="" className="h-9 w-20 rounded-full" />
          <div className="flex flex-col w-full h-28 p-1">
            <span className="text-md font-bold">
              {truncateString(snippet.title)}
            </span>
            <span className="text-sm text-gray-300">
              {snippet.channelTitle}
            </span>
            <span className="text-sm text-gray-300">
              {statistics?.viewCount > 1000
                ? (statistics?.viewCount / 1000).toFixed(1) + "k views"
                : statistics?.viewCount + " views"}
            </span>
            <span className="text-sm text-gray-300">
              {calculatePublishTime(snippet.publishedAt)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
