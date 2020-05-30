import React, { memo } from "react";
import { InputBase } from "@material-ui/core";
import SearchButton from "../atoms/SearchButton";

const SearchInput = () => {
  return (
    <div style={{ width: "100%" }}>
      <InputBase
        placeholder="검색해주세요..."
        style={{
          paddingLeft: 10,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          color: "white",
          fontSize: 14,
          borderRadius: 5,
          width: "90%",
        }}
      />
      <SearchButton
        style={{
          padding: 10,
          margin: -5,
          color: "white",
          position: "absolute",
          right: 5,
          top: 7,
        }}
      />
    </div>
  );
};

export default memo(SearchInput);
