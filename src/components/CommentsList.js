import React from "react";
import Comment from "./Comment";

const CommentsList = ({ items }) => {
  if (items?.length <= 0) {
    return;
  }
  return (
    <div className="w-full p-2">
      {items &&
        items.map((item, index) => (
          <div key={index} className="m-2">
            <Comment
              snippet={item?.snippet?.topLevelComment?.snippet || item?.snippet}

            />
            <div className="ml-8 w-90 overflow-auto h-auto">
              <CommentsList
                items={item?.replies?.comments}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentsList;
