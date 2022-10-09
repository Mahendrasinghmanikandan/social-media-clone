import React, { useEffect } from "react";
import { Stack } from "@mui/system";
import Navbar from "../Navbar/Navbar";
import { Box, Grid } from "@mui/material";
import SideNavbar from "../Navbar/SideNavbar";
import Uploads from "./Uploads";
import Mymemes from "./Mymemes";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Myuploads = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      toast.warning("Please login First");
      navigate("/Login");
    }
  }, []);
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
          <Grid item md={6}>
            <Mymemes />
          </Grid>
          <Grid item md={3}>
            <Uploads />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Myuploads;
