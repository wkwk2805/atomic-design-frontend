import React, { memo } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const NotificationHeader = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          variant="dense"
          style={{
            backgroundColor: "#0f4c81",
          }}
        >
          <Typography component="div">알림</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 60 }}></div>
    </>
  );
};

export default memo(NotificationHeader);
