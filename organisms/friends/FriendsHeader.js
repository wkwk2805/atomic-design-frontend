import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  InputBase,
} from "@material-ui/core";
import BackButton from "../../atoms/BackButton";
import FriendAddButton from "../../atoms/FriendAddButton";
import SearchButton from "../../atoms/SearchButton";

const FriendsHeader = () => {
  const [search, setSearch] = useState(false);
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
            <SearchButton
              style={{ color: "white", padding: 10, margin: -5 }}
              onClick={() => setSearch(!search)}
            />
            <FriendAddButton
              style={{ color: "white", padding: 10, margin: -5 }}
            />
          </div>
        </Toolbar>
        {search && (
          <Paper variant="outlined" style={{ overflow: "auto" }} square>
            <InputBase
              placeholder="검색"
              style={{
                paddingLeft: 10,
                fontSize: 12,
                borderRadius: 5,
                width: "100%",
              }}
            />
          </Paper>
        )}
      </AppBar>
      <div style={{ marginTop: 60 + (search && 25) }}></div>
    </>
  );
};

export default FriendsHeader;
