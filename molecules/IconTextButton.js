import React, { memo } from "react";

const IconTextButton = ({ iconButton, number, numberStyle }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div>{iconButton}</div>
      <div style={numberStyle}>{number || 0}</div>
    </div>
  );
};

export default memo(IconTextButton);
