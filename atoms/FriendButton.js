import React from "react";
import { IconButton } from "@material-ui/core";
import { Person } from "@material-ui/icons";

const FriendButton = (props) => {
  return (
    <IconButton {...props}>
      <Person />
    </IconButton>
  );
};

export default FriendButton;
