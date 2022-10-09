import { Box, Stack } from "@mui/system";
import React from "react";
import { listItems } from "../Uploads/listItems";
import { NavLink } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";

const SideNavbar = () => {
  return (
    <Box>
      <Stack margin="4%" sx={{ marginTop: "90px" }}>
        <List>
          <Stack spacing={3}>
            {listItems.map((res) => {
              return (
                <NavLink
                  to={res.link}
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "",
                  })}
                >
                  <ListItem disablePadding disabled={res.disabled}>
                    {res.disabled ? (
                      <Tooltip title="in-porgress" followCursor>
                        <ListItemButton
                          className={res.disabled ? "notAllow" : "pointer"}
                        >
                          <ListItemIcon>{res.icon}</ListItemIcon>
                          <ListItemText
                            primary={res.name}
                            sx={{ fontWeight: "bold" }}
                          />
                        </ListItemButton>
                      </Tooltip>
                    ) : (
                      <ListItemButton
                        className={res.disabled ? "notAllow" : "pointer"}
                      >
                        <ListItemIcon>{res.icon}</ListItemIcon>
                        <ListItemText primary={res.name} />
                      </ListItemButton>
                    )}
                  </ListItem>
                </NavLink>
              );
            })}
          </Stack>
        </List>
      </Stack>
    </Box>
  );
};

export default SideNavbar;
