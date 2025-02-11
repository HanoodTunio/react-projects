import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem("settings"));
    if (savedSettings) {
      setNotifications(savedSettings.notifications);
      setDarkMode(savedSettings.darkMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "settings",
      JSON.stringify({ notifications, darkMode })
    );
  }, [notifications, darkMode]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Card sx={{ marginBottom: 3 }}>
        <CardContent>
          <Typography variant="h6">Preferences</Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                />
              }
              label="Enable Notifications"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
              }
              label="Dark Mode"
            />
          </FormGroup>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
