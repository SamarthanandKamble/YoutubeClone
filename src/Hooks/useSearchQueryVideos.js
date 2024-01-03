import React, { useEffect } from "react";
import { SEARCH_QUERY_VIDEO_URL } from "../constants";

const useSearchQueryVideos = (searchText) => {
  useEffect(() => {
    getTheVideos();
  }, []);

  const getTheVideos = async () => {
    try {
      // const result = await fetch(
      //   `${SEARCH_QUERY_VIDEO_URL}${"hello"}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      // );
      // const data = await result.json();
    } catch (error) {
      console.warn(error?.message);
    }
  };
};

export default useSearchQueryVideos;
