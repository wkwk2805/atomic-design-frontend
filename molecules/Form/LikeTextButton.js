import React from "react";
import LikeButton from "../../atoms/LikeButton";

const LikeTextButton = (props) => {
  return (
    <span style={{ marginRight: 10 }}>
      <LikeButton style={{ padding: 10, margin: -10 }} fontSize={20} />
      <span style={{ marginLeft: 5 }}>{props.number || 0}</span>
    </span>
  );
};

export default LikeTextButton;
