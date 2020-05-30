import React, { memo } from "react";
import ProfileHeader from "../organisms/profile/ProfileHeader";
import ProfileBody from "../organisms/profile/ProfileBody";

const Profile = () => {
  return (
    <>
      <ProfileHeader />
      <ProfileBody />
    </>
  );
};

export default memo(Profile);
