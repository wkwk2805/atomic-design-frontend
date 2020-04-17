import React from "react";

const CountImages = ({ total, current }) => {
  return (
    <div
      style={{
        display: "inline-block",
        marginTop: 10,
        marginRight: 10,
        padding: 4,
        fontSize: 11,
        backgroundColor: "#d5d5d5",
        borderRadius: 15,
        color: "white",
      }}
    >
      {`${current}/${total}`}
    </div>
  );
};

export default CountImages;
