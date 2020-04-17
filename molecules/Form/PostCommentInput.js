import React from "react";
import AddButton from "../../atoms/AddButton";
import { red } from "@material-ui/core/colors";
import { Avatar, InputBase } from "@material-ui/core";

const PostCommentInput = ({ image }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Avatar
        style={{
          backgroundColor: red[500],
          width: 20,
          height: 20,
          marginRight: 10,
          marginTop: 3,
        }}
        src={image}
      />
      <InputBase
        placeholder="댓글을 입력하세요"
        style={{
          fontSize: 12,
          padding: 0,
          width: "100%",
        }}
      />
      <AddButton style={{ padding: 0, marginBottom: 3 }} />
    </div>
  );
};

export default PostCommentInput;
