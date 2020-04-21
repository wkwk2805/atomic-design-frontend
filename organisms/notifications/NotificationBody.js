import React from "react";
import NotificationInfo from "../../molecules/Information/NotificationInfo";

const NotificationBody = () => {
  const container = { fontSize: 13, marginTop: 15, marginLeft: 5 };
  return (
    <div style={{ margin: 10 }}>
      <div style={container}>이번주</div>
      <NotificationInfo message="test1님이 어떠한 행동을 했습니다" />
      <NotificationInfo message="test1님이 어떠한 행동을 했습니다" />
      <NotificationInfo message="test1님이 어떠한 행동을 했습니다" />
      <div style={container}>이번달</div>
      <NotificationInfo message="test1님이 어떠한 행동을 했습니다" />
      <NotificationInfo message="test1님이 어떠한 행동을 했습니다" />
      <div style={container}>이전활동</div>
      <NotificationInfo message="test1님이 어떠한 행동을 했습니다" />
      <NotificationInfo message="test1님이 어떠한 행동을 했습니다" />
      <NotificationInfo message="test1님이 어떠한 행동을 했습니다" />
    </div>
  );
};

export default NotificationBody;
