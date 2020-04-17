import React from "react";
import { TextField } from "@material-ui/core";

const InputText = (props) => {
  return (
    <TextField
      {...props}
      size="small"
      fullWidth
      style={{ marginTop: 10 }}
      error={props.isErr}
      helperText={props.isErr && `유효하지 않습니다!`}
    />
  );
};

export default InputText;
