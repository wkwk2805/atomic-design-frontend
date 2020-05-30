import React, { memo } from "react";
import { Avatar, Typography } from "@material-ui/core";
import SubmitButton from "../atoms/SubmitButton";
import CancelButton from "../atoms/CancelButton";
import { red } from "@material-ui/core/colors";

const PersonInfo = ({ name, message, image, newfriend }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 17,
        justifyItems: "space-between",
      }}
    >
      <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
        <Avatar
          src={image}
          style={{ width: 30, height: 30, alignSelf: "center" }}
        />
        <div style={{ marginLeft: 10 }}>
          <Typography variant="body2" component="span">
            {name}
          </Typography>
          <br />
          <Typography variant="caption" component="span">
            {message}
          </Typography>
        </div>
      </div>
      {newfriend && (
        <div style={{ alignSelf: "center" }}>
          <SubmitButton
            text="허락"
            style={{ minWidth: 40, padding: 5, fontSize: 12 }}
          />
          <CancelButton
            style={{
              padding: 10,
              margin: -5,
              marginRight: -15,
              alignSelf: "flex-start",
              color: red[800],
            }}
            fontSize={15}
          />
        </div>
      )}
    </div>
  );
};

export default memo(PersonInfo);
