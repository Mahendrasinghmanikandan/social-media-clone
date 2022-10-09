import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import dateFormat from "dateformat";
import { getMyMemes } from "../../api/api";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { deleteMyMemes, LikeIt } from "../../api/api";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

const Mymemes = () => {
  const [memes, setMemes] = useState([]);
  const id = JSON.parse(localStorage.getItem("id"));
  const fetchData = () => {
    getMyMemes()
      .then((data) => {
        setMemes(data.data.data);
      })
      .catch((err) => {
        // toast.error("Something Went Wrong!");
      });
  };

  const likeMyMeme = (id, count) => {
    const formData = {
      id,
      count,
    };
    LikeIt(formData)
      .then((data) => {
        fetchData();
      })
      .catch((err) => {
        toast.error("Something Went Wrong");
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteMyMeme = (id) => {
    deleteMyMemes(id)
      .then((data) => {
        toast.success("Deleted Successfully");
        fetchData();
      })
      .catch((err) => {
        toast.error("Something Went Wrong!");
      });
  };
  return (
    <div>
      <Box
        width="100%"
        height="100vh"
        overflow="scroll"
        sx={{
          background: `url(
            "https://media2.giphy.com/media/26BRyql7J3iOx875u/200.gif"
          )`,
          cursor: "row-resize",
        }}
      >
        <Stack
          spacing={4}
          justifyContent="center"
          alignItems="center"
          padding="10px"
          sx={{ marginTop: "90px" }}
        >
          {memes.map((meme) => {
            return (
              <Card>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "hotpink" }} aria-label="recipe">
                      {meme.username.split("")[0].toUpperCase()}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      {/* <MoreVertIcon /> */}
                    </IconButton>
                  }
                  title={meme.username}
                  subheader={dateFormat(meme.createdAt, "fullDate")}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {meme.message}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ objectFit: "contain", width: "400px" }}
                  image={meme.img}
                  alt="green iguana"
                />
                <CardActions>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <IconButton
                      aria-label="add to favorites"
                      onClick={() => {
                        likeMyMeme(meme._id, meme.likes);
                      }}
                    >
                      <Badge
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        badgeContent={meme.likes}
                        sx={{ color: "hotpink" }}
                      >
                        {meme.likes > 0 ? (
                          <FavoriteIcon style={{ color: "hotpink" }} />
                        ) : (
                          <FavoriteBorderIcon sx={{ color: "hotpink" }} />
                        )}
                      </Badge>
                    </IconButton>
                    {meme.username === id && (
                      <IconButton
                        aria-label="add to favorites"
                        onClick={() => {
                          deleteMyMeme(meme._id);
                        }}
                      >
                        <DeleteOutlineIcon
                          sx={{ color: "rgb(248, 100, 108)" }}
                        />
                      </IconButton>
                    )}
                  </Stack>
                </CardActions>
              </Card>
            );
          })}
        </Stack>
      </Box>
    </div>
  );
};

export default Mymemes;
