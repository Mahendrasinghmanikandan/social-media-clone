import React from "react";
import "./Dashboard.css";
import { Stack } from "@mui/system";
import Navbar from "../Navbar/Navbar";
import { Box, Grid } from "@mui/material";
import Peoples from "./Peoples";
import SideNavbar from "../Navbar/SideNavbar";
const Dashboard = () => {
  return (
    <>
      <Stack direction="row">
        <div className=".top-navbar">
          <Navbar />
        </div>
      </Stack>
      <Box>
        <Grid container>
          <Grid item md={2}>
            <SideNavbar />
          </Grid>
          <Grid item md={7}>
            <Peoples />
          </Grid>
          <Grid item md={2}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
