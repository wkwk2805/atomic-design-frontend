import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import CountImages from "../../atoms/CountImages";
import CommentTextButton from "../../molecules/Form/CommentTextButton";
import LikeTextButton from "../../molecules/Form/LikeTextButton";
import ShareTextButton from "../../molecules/Form/ShareTextButton";
import CommentInfo from "../../molecules/Information/CommentInfo";
import DownButton from "../../atoms/DownButton";
import InputText from "../../atoms/InputText";
import PostCommentInput from "../../molecules/Form/PostCommentInput";
import { useRouter } from "next/router";

const Content = ({ image }) => {
  const router = useRouter();
  return (
    <Card style={{ marginBottom: 5 }}>
      <CardHeader
        style={{ padding: 10 }}
        avatar={<Avatar src={image} style={{ width: 24, height: 24 }} />}
        title="아이디(이름)"
        titleTypographyProps={{ style: { fontSize: 13, marginLeft: -8 } }}
        action={<CountImages total={10} current={1} />}
      />
      <CardMedia
        image="/images/sample2.jpg"
        style={{
          height: 0,
          paddingTop: "56.25%", // 16:9
        }}
      />
      <CardContent style={{ padding: 10 }}>
        <Typography variant="body2" color="textSecondary" component="p">
          <div style={{ marginBottom: 5 }}>
            <LikeTextButton />
            <CommentTextButton />
            <ShareTextButton />
          </div>
          <div>컨텐츠</div>
        </Typography>
        <CommentInfo user="아이디(이름)" comment="댓글의 내용입니다." />
        <Typography
          variant="caption"
          color="textSecondary"
          component="p"
          style={{ marginLeft: 5 }}
        >
          댓글 3개
          <DownButton
            style={{ padding: 0 }}
            onClick={() => router.push("/comment")}
          />
        </Typography>
        <PostCommentInput />
      </CardContent>
    </Card>
  );
};

export default Content;
