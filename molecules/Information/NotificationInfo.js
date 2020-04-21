import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const NotificationInfo = ({ message, image }) => {
  return (
    <div style={{ marginTop: 8 }}>
      <Avatar
        style={{
          backgroundColor: red[500],
          width: 20,
          height: 20,
          float: "left",
          marginRight: 5,
          marginTop: 3,
        }}
        src={image}
      />
      <Typography variant="caption" component="span" style={{ marginLeft: 5 }}>
        {message}
      </Typography>
    </div>
  );
};

export default NotificationInfo;
