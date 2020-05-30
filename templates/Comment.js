import React, { memo } from "react";
import CommentHeader from "../organisms/comment/CommentHeader";
import CommentBody from "../organisms/comment/CommentBody";
import CommentFooter from "../organisms/comment/CommentFooter";

const Comment = () => {
  return (
    <>
      <CommentHeader />
      <CommentBody />
      <CommentFooter />
    </>
  );
};

export default memo(Comment);
