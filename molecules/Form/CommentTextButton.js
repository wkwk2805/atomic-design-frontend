import React from "react";
import CommentButton from "../../atoms/CommentButton";

const CommentTextButton = (props) => {
  return (
    <span style={{ marginRight: 10 }}>
      <CommentButton style={{ padding: 10, margin: -10 }} fontSize={20} />
      <span style={{ marginLeft: 5 }}>{props.number || 0}</span>
    </span>
  );
};

export default CommentTextButton;
