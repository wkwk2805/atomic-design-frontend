import React from "react";
import PersonInfo from "../../molecules/PersonInfo";
import { Typography } from "@material-ui/core";

const FriendsBody = () => {
  return (
    <div style={{ margin: 10 }}>
      <Typography
        variant="caption"
        component="div"
        color="textSecondary"
        style={{ marginBottom: 10 }}
      >
        생일인 친구
      </Typography>
      <PersonInfo name="Test1" message="하이루" />
      <PersonInfo name="Test1" message="하이루" />
      <Typography
        variant="caption"
        component="div"
        style={{ marginBottom: 10 }}
        color="textSecondary"
      >
        친구 신청한 친구
      </Typography>
      <PersonInfo name="Test1" message="하이루" newfriend />
      <PersonInfo name="Test1" message="하이루" newfriend />
      <Typography
        variant="caption"
        component="div"
        style={{ marginBottom: 10 }}
        color="textSecondary"
      >
        친구 10
      </Typography>
      <PersonInfo name="Test1" message="하이루" />
      <PersonInfo name="Test1" message="하이루" />
      <PersonInfo name="Test1" message="하이루" />
      <PersonInfo name="Test1" message="하이루" />
      <PersonInfo name="Test1" message="하이루" />
      <PersonInfo name="Test1" message="하이루" />
      <PersonInfo name="Test1" message="하이루" />
      <PersonInfo name="Test1" message="하이루" />
      <PersonInfo name="Test1" message="하이루" />
    </div>
  );
};

export default FriendsBody;
