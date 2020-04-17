import React from "react";
import ShareButton from "../../atoms/ShareButton";

const LikeTextButton = ({ number }) => {
  return (
    <span style={{ marginRight: 10 }}>
      <ShareButton style={{ padding: 10, margin: -10 }} fontSize={18} />
      <span style={{ marginLeft: 5 }}>{number || 0}</span>
    </span>
  );
};

export default LikeTextButton;
