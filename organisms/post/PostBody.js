import React, { memo } from "react";
import Content from "./Content";

const PostBody = () => {
  return (
    <div>
      <Content />
      <Content />
      <Content />
    </div>
  );
};

export default memo(PostBody);
