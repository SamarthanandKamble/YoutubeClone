import React, { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import { YOUTUBE_VIDEO_COMMENTS_THREAD_URL } from "../constants";

const CommentThreads = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getTheComments();
  }, [videoId]);

  const getTheComments = async () => {
    try {
      const data = await fetch(
        YOUTUBE_VIDEO_COMMENTS_THREAD_URL +
          videoId +
          "&key=" +
          process.env.REACT_APP_YOUTUBE_API_KEY
      );
      const { items } = await data.json();
      setComments(items);
    } catch (error) {
      console.warn(error?.message);
    }
  };

  return (
    <div className="">
      {comments.length > 0 ? (
        <div className="mx-auto">
          <h1 className="font-semibold mt-6 text-xl">{comments.length} Comments</h1>
          <CommentsList items={comments}  />
        </div>
      ) : (
        "Loading Comments"
      )}
    </div>
  );
};

export default CommentThreads;
