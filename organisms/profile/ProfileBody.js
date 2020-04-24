import React from "react";
import ListView from "../../molecules/ListView";
import AvartarTextVertical from "../../molecules/AvartarTextVertical";

const tileData = [
  { type: "picture", img: "/images/sample2.jpg" },
  { type: "video", img: "/images/sample2.jpg" },
  { type: "picture", img: "/images/sample2.jpg" },
  { type: "picture", img: "/images/sample2.jpg" },
  { type: "video", img: "/images/sample2.jpg" },
];

const ProfileBody = () => {
  return (
    <div>
      <AvartarTextVertical
        name="Test1"
        content="오호라 나는 곤고한 자로다"
        size={60}
        nameStyle={{ marginTop: 5 }}
        contentStyle={{ marginTop: 5, fontSize: 12 }}
      />
      <div style={{ fontSize: 14, margin: 5 }}>게시물 15</div>
      <ListView tileData={tileData} windowSize={{ x: 380 }} />
    </div>
  );
};

export default ProfileBody;
