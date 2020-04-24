import React from "react";
import IconTextButton from "../molecules/IconTextButton";
import LikeButton from "../atoms/LikeButton";

const test = () => {
  return (
    <IconTextButton
      iconButton={<LikeButton style={{ margin: -10, padding: 10 }} />}
      number={3}
      numberStyle={{ fontSize: 12, marginLeft: 5 }}
    />
  );
};

export default test;
