import React from "react";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const CancelButton = (props) => {
  return (
    <IconButton {...props}>
      <Close style={{ fontSize: props.fontSize }} />
    </IconButton>
  );
};

export default CancelButton;
