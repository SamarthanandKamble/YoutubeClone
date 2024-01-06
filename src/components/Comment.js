import React from "react";

const Comment = ({ snippet }) => {
  return (
    <div className="border  ">
      <div className={`flex `}>
        <img
          alt="author-thumbnail"
          className="w-10 h-10 rounded-full"
          src={snippet?.authorProfileImageUrl}
        />
        <div className="flex flex-col ml-2 flex-wrap">
          <span>{snippet?.authorDisplayName}</span>
          <span className="">{snippet?.textDisplay || snippet?.textOriginal}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
