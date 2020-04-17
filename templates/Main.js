import React, { useState } from "react";
import Nav from "../organisms/Nav";
import ExploreHeader from "../organisms/explore/ExploreHeader";
import ExploreBody from "../organisms/explore/ExploreBody";
import Post from "./Post";

const Main = () => {
  const [view, setView] = useState(<Post />);

  return (
    <div>
      {view}
      <Nav setView={setView} />
    </div>
  );
};

export default Main;
