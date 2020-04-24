import React, { useState } from "react";
import CommentInput from "../../molecules/Form/CommentInput";
import { Button, InputBase, Avatar } from "@material-ui/core";
import AvartarText from "../../molecules/AvartarText";

const CommentFooter = () => {
  const [comment, setComment] = useState("");
  return (
    <>
      <div style={{ marginBottom: 50 }}></div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "7px 10px 7px 10px",
          backgroundColor: "rgb(15, 76, 129)",
        }}
      >
        {/* 답글일 경우에만 나오도록 처리 시작*/}
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{ flex: 1, color: "white", fontSize: 12 }}>
            답글을 쓰는중입니다...
          </div>
          <div>
            <Button
              style={{
                fontSize: 12,
                padding: 0,
                minWidth: 0,
                color: "white",
                verticalAlign: "super",
              }}
            >
              닫기
            </Button>
          </div>
        </div>
        {/* 답글일 경우에만 나오도록 처리 끝*/}
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <AvartarText
              size={20}
              content={
                <InputBase
                  placeholder="댓글을 달아주세요"
                  style={{ color: "white", fontSize: 12, width: "90%" }}
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                />
              }
              contentStyle={{ marginLeft: 10, width: "90%" }}
            />
          </div>
          <div>
            <Button
              style={{
                fontSize: 12,
                padding: 0,
                minWidth: 0,
                alignSelf: "center",
                color: "white",
              }}
            >
              게시
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentFooter;
