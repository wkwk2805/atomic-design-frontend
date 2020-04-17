import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import BackButton from "../../atoms/BackButton";
import EditButton from "../../atoms/EditButton";
import RemoveButton from "../../atoms/RemoveButton";

const CommentHeader = () => {
  const [edit, setEdit] = useState(false);
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
          <Typography component="div">댓글</Typography>
          {edit && (
            <div style={{ position: "absolute", right: 10 }}>
              <EditButton />
              <RemoveButton />
            </div>
          )}
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 60 }}></div>
    </>
  );
};

export default CommentHeader;
