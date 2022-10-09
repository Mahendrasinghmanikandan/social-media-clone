import React from "react";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import InputIcon from "@mui/icons-material/Input";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const username = JSON.parse(localStorage.getItem("id"));
  const navigate = useNavigate();
  return (
    <div>
      <Paper sx={{ position: "fixed", top: 0, zIndex: "10", width: "100vw" }}>
        <Box height={70}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            spacing={25}
            width="100vw"
            height={70}
          >
            <img
              style={{ width: "100px", height: "50px" }}
              src="https://www.askideas.com/media/76/Funny-Meme-Faces-3.jpg"
              alt=""
            />
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search " />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon sx={{ color: "lightgray" }} />
              </IconButton>
            </Paper>
            <Stack direction="row" spacing={10} justifyContent="space-between">
              <Stack direction="row" spacing={3}>
                <Badge color="error" badgeContent={20}>
                  <Avatar sx={{ bgcolor: "lightgray" }}>
                    <MessageIcon />
                  </Avatar>
                </Badge>
                <Badge color="error" badgeContent={100}>
                  <Avatar sx={{ bgcolor: "lightgray" }}>
                    <CircleNotificationsIcon />
                  </Avatar>
                </Badge>
                <Badge color="error" badgeContent={4}>
                  <Avatar sx={{ bgcolor: "lightgray" }}>
                    <OndemandVideoIcon />
                  </Avatar>
                </Badge>
                <Badge color="error" badgeContent={400}>
                  <Avatar sx={{ bgcolor: "lightgray" }}>
                    <FavoriteIcon />
                  </Avatar>
                </Badge>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: "hotpink" }}>
                {username?.split("")[0]}
              </Avatar>
              {token ? (
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    navigate("/");
                    localStorage.clear();
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<InputIcon />}
                  onClick={() => {
                    navigate("/Login");
                  }}
                >
                  Login
                </Button>
              )}
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </div>
  );
};

export default Navbar;
