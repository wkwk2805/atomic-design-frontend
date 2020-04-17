import React from "react";
import { useRouter } from "next/router";

const Anchor = ({ href, text }) => {
  const router = useRouter();
  return (
    <a style={{ cursor: "pointer" }} onClick={() => router.push(href)}>
      {text}
    </a>
  );
};

export default Anchor;
