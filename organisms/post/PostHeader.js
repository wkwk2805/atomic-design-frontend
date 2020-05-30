import React, { useState, memo } from "react";
import { AppBar, Typography, Toolbar, Paper } from "@material-ui/core";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import GroupButton from "../../atoms/GroupButton";
import ShowGroupsButton from "../../atoms/ShowGroupsButton";
import FriendButton from "../../atoms/FriendButton";
import AvartarTextVertical from "../../molecules/AvartarTextVertical";
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
            <AvartarTextVertical
              name="내그룹이름을소개합니다"
              image="/images/sample.jpg"
              containerStyle={{ margin: 5 }}
              size={60}
              nameStyle={{
                width: 100,
                fontSize: 11,
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
              avartarStyle={{ border: "2px solid red" }}
            />
          </Paper>
        )}
      </AppBar>
      <div style={{ marginTop: 60 + (groupView && 85) }}></div>
    </>
  );
};

export default memo(PostHeader);
