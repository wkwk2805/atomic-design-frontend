import React from "react";
import { Avatar, Typography } from "@material-ui/core";

const PersonInfo = ({ name, message, image }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 17,
      }}
    >
      <Avatar
        src={image}
        style={{ width: 30, height: 30, alignSelf: "center" }}
      />
      <div style={{ marginLeft: 10 }}>
        <Typography variant="body2" component="span">
          {name}
        </Typography>
        <br />
        <Typography variant="caption" component="span">
          {message}
        </Typography>
      </div>
    </div>
  );
};

export default PersonInfo;
