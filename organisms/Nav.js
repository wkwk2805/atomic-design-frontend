import React, { useState, memo } from "react";
import {
  PostAdd,
  MailOutline,
  PermIdentity,
  Search,
  Home,
} from "@material-ui/icons";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@material-ui/core";
import Post from "../templates/Post";
import Explore from "../templates/Explore";
import Notifications from "../templates/Notifications";
import Profile from "../templates/Profile";

const Nav = ({ setView }) => {
  const stylesIcon = { minWidth: 0, paddingBottom: 0, paddingTop: 0 };
  const [value, setValue] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <div style={{ marginBottom: 50 }}></div>
      <Paper
        style={{
          bottom: 0,
          left: 0,
          position: "fixed",
          width: "100%",
        }}
        elevation={8}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            switch (newValue) {
              case 0:
                setView(<Post />);
                break;
              case 1:
                setView(<Explore />);
                break;
              case 2:
                setView(<Post />);
                break;
              case 3:
                setView(<Notifications />);
                break;
              case 4:
                setView(<Profile />);
                break;
              default:
                setView(<Post />);
                break;
            }
          }}
          style={{
            height: 45,
          }}
        >
          <BottomNavigationAction
            icon={<Home style={{ fontSize: 30 }} />}
            style={stylesIcon}
          />
          <BottomNavigationAction
            icon={<Search style={{ fontSize: 30 }} />}
            style={stylesIcon}
          />
          {isMobile && (
            <BottomNavigationAction
              icon={<PostAdd style={{ fontSize: 30 }} />}
              style={stylesIcon}
            />
          )}
          <BottomNavigationAction
            icon={<MailOutline style={{ fontSize: 30 }} />}
            style={stylesIcon}
          />
          <BottomNavigationAction
            icon={<PermIdentity style={{ fontSize: 30 }} />}
            style={stylesIcon}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default memo(Nav);
