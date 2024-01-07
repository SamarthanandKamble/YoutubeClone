import React from "react";

const Comment = ({ snippet }) => {
  return (
    <div className={`flex sm:w-full`}>
      <img
        alt="author-thumbnail"
        className="w-10 h-10 rounded-full"
        src={snippet?.authorProfileImageUrl}
      />
      <div className="flex flex-col ml-2 flex-wrap ">
        <span className="sm:w-full text-sm text-wrap">{snippet?.authorDisplayName}</span>
        <span className="text-xs">{snippet?.textOriginal}</span>
      </div>
    </div>
  );
};

export default Comment;
