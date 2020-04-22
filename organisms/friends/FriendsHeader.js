import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import BackButton from "../../atoms/BackButton";
import FriendAddButton from "../../atoms/FriendAddButton";
import SearchButton from "../../atoms/SearchButton";

const FriendsHeader = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          variant="dense"
          style={{
            backgroundColor: "#0f4c81",
          }}
        >
          <BackButton
            style={{
              padding: 5,
              margin: -5,
              marginRight: 5,
              color: "white",
            }}
          />
          <Typography component="div">친구</Typography>
          <div style={{ right: 10, position: "absolute" }}>
            <SearchButton style={{ color: "white", padding: 10, margin: -5 }} />
            <FriendAddButton
              style={{ color: "white", padding: 10, margin: -5 }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 60 }}></div>
    </>
  );
};

export default FriendsHeader;
