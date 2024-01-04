import React from "react";
import { useSelector } from "react-redux";
import ButtonContainer from "./ButtonContainer";
import { Circle } from "react-feather";
import { Link } from "react-router-dom";
const SuggestionVideos = () => {
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

  const videos = useSelector((state) => state.popularVideos?.videos);
  return (
    <div className="w-4/12 ">
      <div>
        <ButtonContainer length={5} />
      </div>

      <div className="mt-10">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex flex-wrap content-around items-center m-1"
          >
            <div className="w-44 h-24 my-2 mx-1">
              <Link to={"/watch?v=" + video.id}>
                <img
                  alt="video-thumbnail"
                  src={
                    video?.snippet?.thumbnails?.maxres?.url ||
                    video?.snippet?.thumbnails?.high?.url
                  }
                  className="aspect-video rounded-xl w-full h-full"
                />
              </Link>
            </div>
            <div className=" w-52 h-24 ml-1 flex flex-col">
              <Link to={"/watch?v=" + video.id}>
                <section className="text-sm font-semibold">
                  {truncateString(video?.snippet?.title)}
                </section>
                <section className="text-xs text-gray-200 mt-1 mb-1 font-semibold">
                  {video.snippet.channelTitle}
                </section>
                <section className="text-xs  flex flex-wrap items-center  content-center mt-1">
                  <span className="mr-2">
                    {video?.statistics?.viewCount > 1000
                      ? (video?.statistics?.viewCount / 1000).toFixed(1) +
                        "k views"
                      : video?.statistics?.viewCount + " views"}
                  </span>
                  <span className="bg-gray-300  border-gray-800 rounded-full mr-2">
                    <Circle size={6} color="" />
                  </span>
                  <span className="text-xs">
                    {calculatePublishTime(video?.snippet?.publishedAt)}
                  </span>
                </section>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionVideos;
