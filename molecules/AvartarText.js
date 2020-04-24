import React from "react";
import { Avatar } from "@material-ui/core";

const AvartarText = ({
  size,
  name,
  image,
  content,
  nameStyle,
  contentStyle,
  iconButton,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyItems: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <div>
          <Avatar style={{ width: size, height: size }} src={image} />
        </div>
        <div style={nameStyle}>{name}</div>
        <div style={contentStyle}>{content}</div>
      </div>
      <div>{iconButton}</div>
    </div>
  );
};

export default AvartarText;
