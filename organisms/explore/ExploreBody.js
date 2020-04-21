import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { GridListTileBar } from "@material-ui/core";
import { VideocamOutlined, CropOriginal } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ListView from "../../molecules/Information/ListView";

const tileData = [
  { type: "picture", img: "/images/sample2.jpg" },
  { type: "video", img: "/images/sample2.jpg" },
  { type: "picture", img: "/images/sample2.jpg" },
  { type: "picture", img: "/images/sample2.jpg" },
  { type: "video", img: "/images/sample2.jpg" },
];

const ExploreBody = (/* { tileData } */) => {
  //   const windowSize = useSelector((state) => state.size);
  const windowSize = { x: 320 };
  return <ListView tileData={tileData} windowSize={windowSize} />;
};

export default ExploreBody;
