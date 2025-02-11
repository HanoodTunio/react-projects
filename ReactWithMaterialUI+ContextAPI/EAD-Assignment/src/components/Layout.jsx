import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  CssBaseline,
} from "@mui/material";
import { DarkMode, LightMode, Menu as MenuIcon } from "@mui/icons-material";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" component={Link} to="/">
              Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/users">
              Users
            </Button>
            <Button color="inherit" component={Link} to="/reports">
              Reports
            </Button>
            <Button color="inherit" component={Link} to="/settings">
              Settings
            </Button>
          </Box>

          {/* Dark Mode Toggle */}
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content with Padding to Avoid Overlapping AppBar */}
      <Box sx={{ marginTop: "80px", padding: "20px" }}>{children}</Box>
    </>
  );
};

export default Layout;
