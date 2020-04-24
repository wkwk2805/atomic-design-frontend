import React from "react";
import AvartarText from "../../molecules/AvartarText";
import LikeButton from "../../atoms/LikeButton";
import { Button } from "@material-ui/core";

const CommentBody = () => {
  return (
    <div>
      <AvartarText
        size={25}
        name="아이디"
        image=""
        content="댓글내용입니다"
        nameStyle={{ marginLeft: 10, fontSize: 13 }}
        contentStyle={{ marginLeft: 10, fontSize: 13 }}
        iconButton={
          <LikeButton style={{ padding: 10, margin: -10 }} fontSize={25} />
        }
      />
      <Button
        style={{ fontSize: 11, marginLeft: 25, padding: 0, marginTop: -10 }}
      >
        답글달기
      </Button>
    </div>
  );
};

export default CommentBody;
