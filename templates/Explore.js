import React, { memo } from "react";
import ExploreBody from "../organisms/explore/ExploreBody";
import ExploreHeader from "../organisms/explore/ExploreHeader";

const Explore = () => {
  return (
    <>
      <ExploreHeader />
      <ExploreBody />
    </>
  );
};

export default memo(Explore);
