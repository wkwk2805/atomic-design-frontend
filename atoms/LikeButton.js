import React from "react";
import { IconButton } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

const LikeButton = (props) => {
  return (
    <IconButton {...props}>
      {props.isLike ? (
        <Favorite style={{ fontSize: props.fontSize }} />
      ) : (
        <FavoriteBorder style={{ fontSize: props.fontSize }} />
      )}
    </IconButton>
  );
};

export default LikeButton;
