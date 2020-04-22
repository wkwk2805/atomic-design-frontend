import React from "react";
import { Avatar } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const GroupInfo = ({ name, image, active }) => {
  return (
    <span
      style={{
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        alt="Group1"
        src={`/images/${image}`}
        style={{
          border: `1.8px solid ${active ? red[300] : "grey"}`,
          width: 60,
          height: 60,
        }}
      />
      <div style={{ fontSize: 10 }}>{name}</div>
    </span>
  );
};

export default GroupInfo;
