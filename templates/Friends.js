import React, { memo } from "react";
import FriendsHeader from "../organisms/friends/FriendsHeader";
import FriendsBody from "../organisms/friends/FriendsBody";

const Friends = () => {
  return (
    <>
      <FriendsHeader />
      <FriendsBody />
    </>
  );
};

export default memo(Friends);
