import React, { memo } from "react";
import { TextField } from "@material-ui/core";

const InputText = (props) => {
  return (
    <TextField
      {...props}
      size="small"
      fullWidth
      style={{ marginTop: 10 }}
      error={props.error}
      helperText={props.error && `유효하지 않습니다!`}
    />
  );
};

export default memo(InputText);
