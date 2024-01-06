import React, { useEffect, useState } from "react";
import { ThumbsUp, ThumbsDown, Send, Maximize } from "react-feather";
import { useSearchParams } from "react-router-dom";
import { WATCH_VIDEO_ID_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addWatchVideo } from "../Redux/watchVideoSlice";
import CommentThreads from "./CommentThreads";
const WatchVideo = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.watchVideo?.watchVideo);
  const [expanded, setExpanded] = useState(false);
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  useEffect(() => {
    if (!result) {
      getVideoById();
    }
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [videoId]);

  const getVideoById = async () => {
    try {
      const data = await fetch(
        `${WATCH_VIDEO_ID_URL}${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const { items } = await data.json();
      dispatch(addWatchVideo(items[0]));
    } catch (error) {
      console.warn(error.message);
    }
  };

  if (!result) {
    return;
  }

  const { snippet, statistics } = result;
  return (
    <div className="w-8/12 min-h-screen mt-16">
      <section className="flex flex-col w-3/4 mx-auto aspect-video">
        <iframe
          width="640"
          height="360"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          className="rounded-xl w-full text-center aspect-video"
          allowFullScreen
        />
        <span className="font-bold my-2">{snippet.title}</span>
        <div className="flex flex-row justify-between py-2 w-full">
          <div className="flex items-center">
            <img
              src={snippet.thumbnails.default.url}
              alt="logo"
              className=" rounded-full h-10 w-10 mr-1"
            />
            <span className="text-left text-sm">{snippet.channelTitle}</span>
            <button className="px-2 py-1 mx-1 border border-gray-850 rounded-lg">
              Join
            </button>
            <button className="px-2 py-1 rounded-lg bg-gray-800 mx-1">
              Subscribe
            </button>
          </div>
          <div className="flex items-center content-center">
            <div className="flex items-center content-center mx-2 px-2 py-1 rounded-lg bg-gray-800">
              <span className="mx-1 cursor-pointer">
                <ThumbsUp />
              </span>
              <span className="px-1">
                {statistics.likeCount > 1000
                  ? (statistics.likeCount / 1000).toFixed(1) + "k"
                  : statistics.likeCount}
              </span>
              <span className="mx-1 font-thin text-lg">|</span>
              <span className="mx-1 cursor-pointer">
                <ThumbsDown />
              </span>
            </div>
            <div className="flex mx-2 px-2 py-1 rounded-lg bg-gray-800 cursor-pointer">
              <span className="mx-2 ">
                <Send />
              </span>
              <span className="mr-2">Share</span>
            </div>
            <span>
              <Maximize />
            </span>
          </div>
        </div>
      </section>

      <section
        className={`w-3/4 mx-auto flex flex-wrap bg-gray-800 rounded-lg p-2 my-2 h-28 relative overflow-${
          expanded ? "visible h-auto w-3/4" : "hidden"
        }`}
      >
        <div>
          <span className="mr-2">
            {statistics.viewCount > 1000
              ? (statistics.viewCount / 1000).toFixed(1) + "k "
              : statistics.viewCount}
            views
          </span>
          <span className="mx-1">Premiered on</span>
          <span className="mx-1">
            {new Date(snippet.publishedAt).toLocaleString("en-US")}
          </span>
        </div>
        <span className="min-w-full">{snippet?.localized?.description}</span>
        <span
          className="text-blue-500 cursor-pointer absolute bottom-0 right-2  bg-gradient-to-r from-gray-800 p-1"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "...more"}
        </span>
      </section>

      <section className="w-10/12 mx-auto">
        <CommentThreads videoId={videoId} />
      </section>
    </div>
  );
};

export default WatchVideo;
