import React, { useEffect } from "react";
import { ThumbsUp, ThumbsDown, Send, Maximize } from "react-feather";
import { useSearchParams } from "react-router-dom";
import { WATCH_VIDEO_ID_URL } from "../constants";
import { useDispatch } from "react-redux";
import { addWatchVideo } from "../Redux/watchVideoSlice";
const WatchVideo = () => {
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    getVideoById();
  }, []);

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

  return (
    <div className="w-8/12 border">
      <div className="flex flex-col items-center w-3/4 justify-between mx-auto">
        <iframe
          width="640"
          height="360"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-lg text-center"
        />
        <span>snippet.title</span>
        <div className="flex flex-row justify-between border py-2 w-full">
          <div className="flex items-center p-1 border">
            <img alt="logo" className=" rounded-full" />
            <span>snippet.channelTitle</span>
            <button className="px-2 py-1 border rounded-lg">Join</button>
            <button className="px-2 py-1 border rounded-lg">Subscribe</button>
          </div>
          <div className="flex items-center content-center">
            <div className="flex items-center content-center">
              <span>
                <ThumbsUp />
              </span>
              <span>statistics.likeCount</span>
              <span>
                <ThumbsDown />
              </span>
            </div>
            <div className="flex">
              <span>
                <Send />
              </span>
              <span>
                <Maximize />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
