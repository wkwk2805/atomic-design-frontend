import React from "react";
import SearchInput from "../../molecules/SearchInput";
import { AppBar, Toolbar } from "@material-ui/core";

const ExploreHeader = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          variant="dense"
          style={{
            backgroundColor: "#0f4c81",
          }}
        >
          <SearchInput />
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 60 }}></div>
    </>
  );
};

export default ExploreHeader;
