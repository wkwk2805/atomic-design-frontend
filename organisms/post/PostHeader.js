import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Paper,
} from "@material-ui/core";
import { PersonAdd, Group, CropFree } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import GroupInfo from "../../molecules/Information/GroupInfo";
import GroupButton from "../../atoms/GroupButton";
import FriendAddButton from "../../atoms/FriendAddButton";
import ShowGroupsButton from "../../atoms/ShowGroupsButton";
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
    router.push("/");
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
          <div style={{ position: "absolute", right: 20 }}>
            <GroupButton edge="end" color="inherit" onClick={groupToggle} />
            <FriendAddButton
              edge="end"
              color="inherit"
              onClick={moveFriendList}
            />
          </div>
        </Toolbar>
        {groupView && (
          <Paper variant="outlined" style={{ overflow: "auto" }} square>
            <ShowGroupsButton
              onClick={moveGroupList}
              style={{ margin: -5, padding: 5, position: "absolute", right: 0 }}
            />
            <GroupInfo name="그룹1" image="sample.jpg" active />
          </Paper>
        )}
      </AppBar>
      <div style={{ marginTop: 60 + (groupView && 70) }}></div>
    </>
  );
};

export default PostHeader;
