import React from "react";
import { IconButton } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const DownButton = (props) => {
  return (
    <IconButton {...props}>
      <ArrowDropDown />
    </IconButton>
  );
};

export default DownButton;
