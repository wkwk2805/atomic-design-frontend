import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Paper } from "@material-ui/core";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import GroupInfo from "../../molecules/Information/GroupInfo";
import GroupButton from "../../atoms/GroupButton";
import ShowGroupsButton from "../../atoms/ShowGroupsButton";
import FriendButton from "../../atoms/FriendButton";
// import { showLoading } from "../../modules/loading";

const PostHeader = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [groupView, setGroupView] = useState(false);
  const groupToggle = () => {
    setGroupView(!groupView);
  };
  const moveFriendList = () => {
    // dispatch(showLoading());
    router.push("/friends");
  };
  const moveGroupList = () => {
    // dispatch(showLoading());
    router.push("/");
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          variant="dense"
          style={{
            backgroundColor: "#0f4c81",
          }}
        >
          <Typography>Logo Space</Typography>
          <div style={{ position: "absolute", right: 10 }}>
            <GroupButton edge="end" color="inherit" onClick={groupToggle} />
            <FriendButton edge="end" color="inherit" onClick={moveFriendList} />
          </div>
        </Toolbar>
        {groupView && (
          <Paper
            variant="outlined"
            style={{ overflow: "auto", display: "flex", flexDirection: "row" }}
            square
          >
            <ShowGroupsButton
              onClick={moveGroupList}
              style={{
                margin: -5,
                padding: 5,
                position: "absolute",
                right: 0,
                zIndex: 1,
              }}
            />
            <GroupInfo name="모두" image="sample.jpg" active />
          </Paper>
        )}
      </AppBar>
      <div style={{ marginTop: 60 + (groupView && 85) }}></div>
    </>
  );
};

export default PostHeader;
