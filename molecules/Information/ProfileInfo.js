import React from "react";
import { IconButton, Avatar, Typography } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const ProfileInfo = ({ user, message, image }) => {
  return (
    <div>
      <IconButton style={{ position: "absolute", right: 10, padding: 5 }}>
        <Edit fontSize="small" />
      </IconButton>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Avatar style={{ width: 60, height: 60 }} src={image} />
      </div>
      <div style={{ textAlign: "center" }}>
        <Typography variant="button" component="div" style={{ margin: 5 }}>
          {user}
        </Typography>
        <Typography variant="caption" component="div" style={{ margin: 5 }}>
          {message}
        </Typography>
      </div>
    </div>
  );
};

export default ProfileInfo;
