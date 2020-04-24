import React from "react";
import { Avatar } from "@material-ui/core";

const AvartarTextVertical = ({
  containerStyle,
  name,
  content,
  nameStyle,
  contentStyle,
  size,
  avartarStyle,
  image,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...containerStyle,
      }}
    >
      <Avatar
        style={{ width: size, height: size, ...avartarStyle }}
        src={image}
      />
      <div style={nameStyle}>{name}</div>
      <div style={contentStyle}>{content}</div>
    </div>
  );
};

export default AvartarTextVertical;
