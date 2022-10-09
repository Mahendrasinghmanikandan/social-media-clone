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
import { validateUser } from "../../api/api";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const initialState = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const onFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    validateUser(formData)
      .then((data) => {
        console.log(data.data.id);
        localStorage.setItem("token", JSON.stringify(data.data.data));
        localStorage.setItem("id", JSON.stringify(data.data.id));
        toast.success("Successfully Logged in!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <Stack alignItems="center" justifyContent="center" height="100vh">
      <Paper elevation={24} sx={{ borderRadius: "25px" }}>
        <Box width="400px" height="500px" padding="22px">
          <form autoComplete="off">
            <Stack spacing={4} marginTop="40px">
              <Avatar
                src="http://www.dcblsecddr.com/images/login1.jpg"
                sx={{ margin: "auto", width: 100, height: 100 }}
              />
              <TextField
                variant="outlined"
                label="Username"
                name="username"
                onChange={(e) => {
                  onFormChange(e);
                }}
                value={formData.username}
              />
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                name="password"
                onChange={(e) => {
                  onFormChange(e);
                }}
                value={formData.Password}
              />
              <Typography
                variant="body2"
                sx={{ cursor: "pointer" }}
                textAlign="right"
              >
                <Link to="/Signup" style={{ color: "gray" }}>
                  {" "}
                  Create An Account
                </Link>
              </Typography>
              <Button
                onClick={onSubmit}
                variant="contained"
                color="warning"
                sx={{
                  padding: "15px",
                  outline: "none",
                }}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Paper>
    </Stack>
  );
};

export default Login;
