import React, { useState } from "react";
import Nav from "../organisms/Nav";
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
