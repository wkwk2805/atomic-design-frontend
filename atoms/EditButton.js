import React from "react";
import { IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const EditButton = (props) => {
  return (
    <IconButton {...props}>
      <Edit style={{ fontSize: props.fontSize }} />
    </IconButton>
  );
};

export default EditButton;
