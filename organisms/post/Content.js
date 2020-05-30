import React, { memo } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  InputBase,
} from "@material-ui/core";
import CountImages from "../../atoms/CountImages";
import DownButton from "../../atoms/DownButton";
import { useRouter } from "next/router";
import MenuIconButton from "../../molecules/MenuIconButton";
import AvartarText from "../../molecules/AvartarText";
import AddButton from "../../atoms/AddButton";
import LikeButton from "../../atoms/LikeButton";
import IconTextButton from "../../molecules/IconTextButton";
import CommentButton from "../../atoms/CommentButton";
import ShareButton from "../../atoms/ShareButton";
import { BorderColor } from "@material-ui/icons";

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
        <Typography variant="body2" color="textSecondary" component="div">
          <div style={{ marginBottom: 5, display: "flex" }}>
            <div style={{ display: "flex", flex: 1 }}>
              <IconTextButton
                iconButton={<LikeButton style={{ margin: -10, padding: 10 }} />}
                number={3}
                numberStyle={{ fontSize: 12, marginLeft: 5, marginRight: 5 }}
              />
              <IconTextButton
                iconButton={
                  <CommentButton style={{ margin: -10, padding: 10 }} />
                }
                number={3}
                numberStyle={{ fontSize: 12, marginLeft: 5, marginRight: 5 }}
              />
              <IconTextButton
                iconButton={
                  <ShareButton style={{ margin: -10, padding: 10 }} />
                }
                number={3}
                numberStyle={{ fontSize: 12, marginLeft: 5, marginRight: 5 }}
              />
            </div>
            <div>
              <MenuIconButton
                options={["글수정", "글삭제"]}
                iconButtonStyle={{ padding: 10, margin: -10 }}
                iconButton={<BorderColor style={{ fontSize: 20 }} />}
                menuStyle={{
                  fontSize: 12,
                  minHeight: 0,
                }}
              />
            </div>
          </div>
          <div>컨텐츠</div>
        </Typography>
        <AvartarText
          name="아이디(이름)"
          content="댓글의 내용입니다."
          size={20}
          image="https://miro.medium.com/max/1024/1*m2fb_YCpY3WUJxKNUjLPdA.png"
          contentStyle={{ marginLeft: 10, fontSize: 12 }}
          nameStyle={{ marginLeft: 10, fontSize: 12 }}
          iconButton={
            <LikeButton style={{ margin: -10, padding: 10 }} fontSize={20} />
          }
        />
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
        <AvartarText
          content={
            <InputBase
              placeholder="댓글을 넣어주세요"
              style={{ fontSize: 12, width: "100%" }}
            />
          }
          size={20}
          image="https://miro.medium.com/max/1024/1*m2fb_YCpY3WUJxKNUjLPdA.png"
          contentStyle={{ marginLeft: 10, width: "90%" }}
          iconButton={
            <AddButton style={{ margin: -10, padding: 10 }} fontSize={20} />
          }
        />
      </CardContent>
    </Card>
  );
};

export default memo(Content);
