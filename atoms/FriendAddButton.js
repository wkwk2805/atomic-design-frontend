import React from "react";
import { IconButton } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";

const FriendAddButton = (props) => {
  return (
    <IconButton {...props}>
      <PersonAdd />
    </IconButton>
  );
};

export default FriendAddButton;
