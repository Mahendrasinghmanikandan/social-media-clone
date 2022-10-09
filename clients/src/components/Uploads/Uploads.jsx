import React, { useState } from "react";
import { Button, Box, Paper, Stack, TextField } from "@mui/material";
import { storage } from "../../firebase/firebase";
import LinearProgress from "@mui/material/LinearProgress";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createMemes } from "../../api/api";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Uploads = () => {
  const navigate = useNavigate();
  const initialState = {
    img: "",
    message: "",
  };
  const [loading, setLogin] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const trigerImageUpload = (e) => {
    setLogin(true);
    const store = "img";
    const imagePath = e.target.files[0];
    const imageRef = ref(storage, `images/${imagePath.name + v4()}`);
    uploadBytes(imageRef, imagePath).then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          setFormData({ ...formData, [store]: url });
          setLogin(false);
        })
        .catch((err) => {
          console.log(err);
          setLogin(false);
        });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMemes(formData)
      .then((data) => {
        toast.success("Meme SuccessFully Uploaded");
        setFormData(initialState);

        navigate("/");
      })
      .catch((err) => {
        toast.error("Something Went Wrong!");
        setFormData(initialState);
      });
  };

  return (
    <Box>
      <Stack spacing={1} sx={{ marginTop: "90px" }}>
        <Paper
          elevation={2}
          sx={{ height: "fit-content", padding: "30px", margin: "10px" }}
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <Stack spacing={4}>
              <TextField
                label="Share what is in your Mind"
                multiline
                name="message"
                rows={4}
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.message}
              />
              <TextField
                onChange={(e) => {
                  trigerImageUpload(e);
                }}
                name="img"
                sx={{
                  opacity: "0.99",
                }}
                type="file"
              />
              {loading && <LinearProgress />}

              <Button
                disabled={loading}
                variant="contained"
                type="submit"
                color="warning"
              >
                Upload
              </Button>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Uploads;
