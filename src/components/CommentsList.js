import React from "react";
import Comment from "./Comment";

const CommentsList = ({ items }) => {
  if (items?.length <= 0) {
    return;
  }
  return (
    <div className="sm:w-full border p-2">
      {items &&
        items.map((item, index) => (
          <div key={index} className="mt-2">
            <Comment
              snippet={item?.snippet?.topLevelComment?.snippet || item?.snippet}
            />
            {item?.snippet?.totalReplyCount > 0 && (
              <div className="ml-8 overflow-auto h-auto">
                <CommentsList items={item?.replies?.comments} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default CommentsList;
