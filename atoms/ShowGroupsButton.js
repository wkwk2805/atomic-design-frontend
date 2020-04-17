import React from "react";
import { IconButton } from "@material-ui/core";
import { Fullscreen } from "@material-ui/icons";

const ShowGroupsButton = (props) => {
  return (
    <IconButton {...props}>
      <Fullscreen />
    </IconButton>
  );
};

export default ShowGroupsButton;
