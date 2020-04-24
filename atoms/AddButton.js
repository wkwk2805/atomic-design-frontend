import React from "react";
import { IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const AddButton = (props) => {
  return (
    <IconButton {...props}>
      <Add style={{ fontSize: props.fontSize }} />
    </IconButton>
  );
};

export default AddButton;
