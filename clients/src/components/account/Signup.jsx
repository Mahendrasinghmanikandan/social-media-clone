import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../api/api";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const initialState = {
    name: "",
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const fieldsChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    createUser(formData)
      .then(() => {
        toast.success(" Account Created Successfully");
        setFormData(initialState);
        setTimeout(() => {
          navigate("/Login");
        }, 1000);
      })
      .catch((error) => {
        toast.success("Something Went Wrong Please try again!");
      });
  };

  return (
    <Stack alignItems="center" justifyContent="center" height="100vh">
      <Paper elevation={24} sx={{ borderRadius: "25px" }}>
        <Box width="400px" height="560px" padding="22px">
          <form autoComplete="off">
            <Stack spacing={4} marginTop="40px">
              <Avatar
                src="https://www.freeiconspng.com/uploads/user-add-icon---shine-set-add-new-user-add-user-30.png"
                sx={{ margin: "auto", width: 100, height: 100 }}
              />
              <TextField
                variant="outlined"
                label="Name"
                name="name"
                onChange={(e) => {
                  fieldsChange(e);
                }}
                value={formData.name}
              />
              <TextField
                variant="outlined"
                label="Username"
                name="username"
                onChange={(e) => {
                  fieldsChange(e);
                }}
                value={formData.username}
              />
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                name="password"
                onChange={(e) => {
                  fieldsChange(e);
                }}
                value={formData.password}
              />
              <Typography
                variant="body2"
                sx={{ cursor: "pointer" }}
                textAlign="right"
              >
                <Link to="/" style={{ color: "gray" }}>
                  Already Have An Account
                </Link>
              </Typography>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  padding: "15px",
                  outline: "none",
                }}
                onClick={submitForm}
              >
                Signup
              </Button>
            </Stack>
          </form>
        </Box>
      </Paper>
    </Stack>
  );
};

export default Signup;
