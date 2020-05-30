import React, { memo } from "react";
import { IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const SearchButton = (props) => {
  return (
    <IconButton {...props}>
      <Search style={{ fontSize: props.fontSize }} />
    </IconButton>
  );
};

export default memo(SearchButton);
