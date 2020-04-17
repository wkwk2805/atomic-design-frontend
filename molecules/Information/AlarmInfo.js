import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const AlarmInfo = ({ user, comment, image }) => {
  return (
    <div style={{ marginTop: 8 }}>
      <Avatar
        style={{
          backgroundColor: red[500],
          width: 20,
          height: 20,
          float: "left",
          marginRight: 5,
        }}
        src={image}
      />
      <Typography
        variant="caption"
        color="textSecondary"
        component="span"
        style={{ verticalAlign: "middle" }}
      >
        {user}
      </Typography>
      {`  `}
      <Typography
        variant="caption"
        color="textSecondary"
        component="span"
        style={{ verticalAlign: "middle" }}
      >
        {comment}
      </Typography>
    </div>
  );
};

export default AlarmInfo;
