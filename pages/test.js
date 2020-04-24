import React from "react";
import AvartarTextVertical from "../molecules/AvartarTextVertical";

const test = () => {
  return (
    <AvartarTextVertical
      name="Test1"
      content="test is test"
      nameStyle={{ marginTop: 5 }}
      contentStyle={{ marginTop: 5 }}
      size={30}
    />
  );
};

export default test;
