import React, { useEffect } from "react";
import { SEARCH_QUERY_VIDEO_URL } from "../constants";
import { useSelector } from "react-redux";
const useSearchQueryVideos = () => {
  const searchText = useSelector((state) => state.search?.searchText);
  useEffect(() => {
    getTheVideos()
  }, []);

  console.log("search text is :", searchText)

  const getTheVideos = async () => {
    try {
      // const result = await fetch(
      //   `${SEARCH_QUERY_VIDEO_URL}${searchText}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      // );
      // const data = await result.json();
      // console.log("search query data :", data);
    } catch (error) {
      console.warn(error?.message);
    }
  };
};

export default useSearchQueryVideos;
