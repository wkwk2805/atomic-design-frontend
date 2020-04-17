import React from "react";
import { Button } from "@material-ui/core";

const SubmitButton = (props) => {
  return (
    <Button variant="contained" color="primary" {...props}>
      {props.text}
    </Button>
  );
};

export default SubmitButton;
