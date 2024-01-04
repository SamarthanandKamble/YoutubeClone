import React, { useEffect } from "react";
import { SEARCH_QUERY_VIDEO_URL } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { addSearchQueryVideos } from "../Redux/searchQueryVideosSlice";
import { Link } from "react-router-dom";
const SearchQueryPage = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search?.searchQuery);
  const searchSuggestionList = useSelector(
    (state) => state.search?.searchSuggestionCache
  );
  const searchQueryVideos = useSelector(
    (state) => state.searchQueryVideos?.videos
  );

  const getTheSearchQueryVideo = async () => {
    try {
      const result = await fetch(
        `${SEARCH_QUERY_VIDEO_URL}${searchQuery}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const { items } = await result.json();
      dispatch(addSearchQueryVideos(items));
    } catch (error) {
      console.warn(error?.message);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      getTheSearchQueryVideo();
    }
  }, [searchQuery]);

  if (!searchQueryVideos) {
    return;
  }

  const truncateString = (str) => {
    let words = str.split(" ");
    if (words.length <= 10) {
      return str;
    } else {
      return words.slice(0, words.length).join(" ") + " ...";
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
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4);
    const years = Math.floor(months / 12);

    if (seconds < 60) {
      return seconds + " seconds ago";
    } else if (minutes < 60) {
      return minutes + " minutes ago";
    } else if (hours < 24) {
      return hours + " hours ago";
    } else if (days < 7) {
      return days + " days ago";
    } else if (weeks < 4) {
      return weeks + " weeks ago";
    } else if (months < 12) {
      return months + " months ago";
    } else {
      return years + " years ago";
    }
  };

  return (
    <div className="bg-gray-950 w-10/12 border text-white z-10 absolute transform translate-x-52 translate-y-16 ">
      {searchQueryVideos &&
        searchQueryVideos.map((video, index) => (
          <Link to={"/watch?v=" + video.id.videoId} key={index}>
            <div className="flex text-white border">
              <div className="w-96 h-52 aspect-video">
                <img
                  src={video.snippet?.thumbnails?.high?.url}
                  alt="video-thumbnail"
                  className="rounded-xl w-full h-full "
                />
              </div>
              <div className="flex w-full items-start content-evenly border ml-">
                <div className="flex flex-col w-full h-28 p-1">
                  <span className="text-md font-bold mt-4">
                    {truncateString(video.snippet.title)}
                  </span>
                  <span className="text-sm text-gray-300 my-2">
                    {video.snippet.channelTitle}
                  </span>
                  <span className="text-sm text-gray-300 my-2">
                    {calculatePublishTime(video.snippet.publishedAt)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SearchQueryPage;
