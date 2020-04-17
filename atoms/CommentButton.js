import React from "react";
import { IconButton } from "@material-ui/core";
import { ChatBubbleOutline } from "@material-ui/icons";

const CommentButton = (props) => {
  return (
    <IconButton {...props}>
      <ChatBubbleOutline style={{ fontSize: props.fontSize }} />
    </IconButton>
  );
};

export default CommentButton;
