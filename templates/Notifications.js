import React, { memo } from "react";
import NotificationHeader from "../organisms/notifications/NotificationHeader";
import NotificationBody from "../organisms/notifications/NotificationBody";

const Notifications = () => {
  return (
    <>
      <NotificationHeader />
      <NotificationBody />
    </>
  );
};

export default memo(Notifications);
