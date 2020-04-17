import React from "react";
import { IconButton } from "@material-ui/core";
import { Share } from "@material-ui/icons";

const ShareButton = (props) => {
  return (
    <IconButton {...props}>
      <Share style={{ fontSize: props.fontSize }} />
    </IconButton>
  );
};

export default ShareButton;
