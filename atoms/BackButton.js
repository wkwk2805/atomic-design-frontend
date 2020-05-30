import React, { memo } from "react";
import { IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useRouter } from "next/router";

const BackButton = (props) => {
  const router = useRouter();
  return (
    <IconButton {...props} onClick={() => router.back()}>
      <ArrowBack />
    </IconButton>
  );
};

export default memo(BackButton);
