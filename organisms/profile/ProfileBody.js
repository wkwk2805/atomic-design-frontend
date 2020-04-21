import React from "react";
import ProfileInfo from "../../molecules/Information/ProfileInfo";
import ListView from "../../molecules/Information/ListView";

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
      <ProfileInfo user="Test1" message="나는 가끔 눈물을 흘린다." />
      <div style={{ fontSize: 14, margin: 5 }}>게시물 15</div>
      <ListView tileData={tileData} windowSize={{ x: 380 }} />
    </div>
  );
};

export default ProfileBody;
