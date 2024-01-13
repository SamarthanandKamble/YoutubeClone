import React, { lazy, useEffect, Suspense } from "react";
import WatchVideo from "./WatchVideo";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../Redux/sideBarIconSlice";
const SuggestionVideos = lazy(() => import("./SuggestionVideos"));

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
    // window.scrollTo({
    //   behavior: "smooth",
    //   top: 0,
    // });
  }, []);
  return (
    <div className="bg-gray-950 absolute px-2 w-full flex flex-col sm:flex-row flex-wrap">
      <WatchVideo />
      <Suspense fallback={<h1 className="text-lg text-black">Loading...</h1>}>
        <SuggestionVideos />
      </Suspense>
    </div>
  );
};

export default WatchPage;
