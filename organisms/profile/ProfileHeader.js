import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const ProfileHeader = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          variant="dense"
          style={{
            backgroundColor: "#0f4c81",
          }}
        >
          <Typography component="div">프로필</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 60 }}></div>
    </>
  );
};

export default ProfileHeader;
