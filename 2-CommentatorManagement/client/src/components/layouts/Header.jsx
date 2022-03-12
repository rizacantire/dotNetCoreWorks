import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Spiker İstatistik
          </Typography>

          <Button color="inherit" component={RouterLink} to="/">
            Ana Sayfa
          </Button>

          <Button color="inherit" component={RouterLink} to="/macdetay">
            Maçlar
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
