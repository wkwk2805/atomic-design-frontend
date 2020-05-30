import React, { memo } from "react";
import { IconButton } from "@material-ui/core";
import { Group } from "@material-ui/icons";

const GroupButton = (props) => {
  return (
    <IconButton {...props}>
      <Group />
    </IconButton>
  );
};

export default memo(GroupButton);
