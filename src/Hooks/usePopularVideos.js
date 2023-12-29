import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { POPULAR_VIDEOS_URL } from "../constants";
import { addPopularVideos } from "../Redux/popularVideosSlice";
const usePopularVideos = () => {
  const popularVideos = useSelector((state) => state.popularVideos?.videos);
  const dispatch = useDispatch();
  useEffect(() => {
    if (popularVideos.length <= 0) {
      getThePopularVideos();
    }
  }, []);
  const getThePopularVideos = async () => {
    const data = await fetch(POPULAR_VIDEOS_URL);
    const { items } = await data.json();
    dispatch(addPopularVideos(items));
  };
};

export default usePopularVideos;
