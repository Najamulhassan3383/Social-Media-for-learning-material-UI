import React from "react";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import { Pets } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import Notification from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

// Define a styled div for the Search component
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "12px",

  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const AnotherBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "12px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const theme = useTheme(); // Access the theme object using the useTheme hook
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Najam
        </Typography>

        <Pets
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />

        <Search theme={theme}>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons theme={theme}>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notification />
          </Badge>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              cursor: "pointer",
            }}
            alt="Remy Sharp"
            src="https://i.pravatar.cc/300"
            onClick={setIsOpen}
          />
        </Icons>
        <AnotherBox theme={theme}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              cursor: "pointer",
            }}
            alt="Remy Sharp"
            src="https://i.pravatar.cc/300"
            onClick={setIsOpen}
          />
          <Typography variant="span">Najam</Typography>
        </AnotherBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
