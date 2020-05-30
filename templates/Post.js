import React, { memo } from "react";
import PostHeader from "../organisms/post/PostHeader";
import PostBody from "../organisms/post/PostBody";

const Post = () => {
  return (
    <>
      <PostHeader />
      <PostBody />
    </>
  );
};

export default memo(Post);
