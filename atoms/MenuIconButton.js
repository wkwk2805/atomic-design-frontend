import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import BorderColor from "@material-ui/icons/BorderColor";

const MenuIconButton = (/* { options } */) => {
  const options = ["글수정", "글삭제"];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleClick} style={{ padding: 10, margin: -10 }}>
        <BorderColor style={{ fontSize: 18 }} />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={handleClose}
            style={{ fontSize: 12, minHeight: 0 }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default MenuIconButton;
