import React, { memo } from "react";
import AvartarText from "../../molecules/AvartarText";

const NotificationBody = () => {
  const container = { fontSize: 13, marginTop: 15, marginLeft: 5 };
  return (
    <div style={{ margin: 10 }}>
      <div style={container}>이번주</div>
      <div style={{ marginTop: 5 }}>
        <AvartarText
          content="test1님이 어떠한 행동을 했습니다"
          contentStyle={{ fontSize: 12, marginLeft: 10 }}
          size={25}
        />
      </div>
      <div style={{ marginTop: 5 }}>
        <AvartarText
          content="test1님이 어떠한 행동을 했습니다"
          contentStyle={{ fontSize: 12, marginLeft: 10 }}
          size={25}
        />
      </div>
      <div style={{ marginTop: 5 }}>
        <AvartarText
          content="test1님이 어떠한 행동을 했습니다"
          contentStyle={{ fontSize: 12, marginLeft: 10 }}
          size={25}
        />
      </div>
      <div style={container}>이번달</div>
      <div style={{ marginTop: 5 }}>
        <AvartarText
          content="test1님이 어떠한 행동을 했습니다"
          contentStyle={{ fontSize: 12, marginLeft: 10 }}
          size={25}
        />
      </div>
      <div style={{ marginTop: 5 }}>
        <AvartarText
          content="test1님이 어떠한 행동을 했습니다"
          contentStyle={{ fontSize: 12, marginLeft: 10 }}
          size={25}
        />
      </div>
      <div style={container}>이전알림</div>
      <div style={{ marginTop: 5 }}>
        <AvartarText
          content="test1님이 어떠한 행동을 했습니다"
          contentStyle={{ fontSize: 12, marginLeft: 10 }}
          size={25}
        />
      </div>
      <div style={{ marginTop: 5 }}>
        <AvartarText
          content="test1님이 어떠한 행동을 했습니다"
          contentStyle={{ fontSize: 12, marginLeft: 10 }}
          size={25}
        />
      </div>
    </div>
  );
};

export default memo(NotificationBody);
