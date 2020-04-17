import React from "react";
import { IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const AddButton = (props) => {
  return (
    <IconButton {...props}>
      <Add />
    </IconButton>
  );
};

export default AddButton;
