import React from "react";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const RemoveButton = (props) => {
  return (
    <IconButton {...props}>
      <Delete style={{ fontSize: props.fontSize }} />
    </IconButton>
  );
};

export default RemoveButton;
