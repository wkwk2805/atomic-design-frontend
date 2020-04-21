import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import LikeButton from "../../atoms/LikeButton";

const CommentInfo = ({ user, comment, image }) => {
  return (
    <div style={{ marginTop: 5, marginBottom: 5 }}>
      <Avatar
        style={{
          backgroundColor: red[500],
          width: 20,
          height: 20,
          float: "left",
          marginTop: 3,
          marginRight: 5,
        }}
        src={image}
      />
      <div style={{ marginLeft: 30 }}>
        <Typography variant="caption" component="span">
          {user}
        </Typography>
        {`  `}
        <Typography variant="caption" component="span">
          {comment}
        </Typography>
        <LikeButton
          style={{ padding: 10, margin: -10, float: "right" }}
          fontSize={20}
        />
      </div>
    </div>
  );
};

export default CommentInfo;
