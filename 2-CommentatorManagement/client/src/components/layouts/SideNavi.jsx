import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import { Link as RouterLink } from "react-router-dom";

export default function SideNavi() {
  return (
    <div>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/spiker">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText  primary="Spiker" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/mac">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Maç Detay" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/page">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Spiker Maç Detay" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/istatistik">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="İstatistik" />
            </ListItemButton>
          </ListItem>
        </List>
        
      </nav>
    </div>
  );
}
