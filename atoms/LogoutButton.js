import React, { memo } from "react";
import { IconButton } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

const LogoutButton = (props) => {
  return (
    <IconButton {...props}>
      <ExitToApp />
    </IconButton>
  );
};

export default memo(LogoutButton);
