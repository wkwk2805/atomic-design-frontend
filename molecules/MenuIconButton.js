import React, { memo } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const MenuIconButton = ({
  options,
  iconButtonStyle,
  menuStyle,
  iconButton,
}) => {
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
      <IconButton onClick={handleClick} style={iconButtonStyle}>
        {iconButton}
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose} style={menuStyle}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default memo(MenuIconButton);
