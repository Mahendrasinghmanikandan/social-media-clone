const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors=require("cors");
const { port, connection } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

// Routers
const usersRouter = require("./router/user.routes");
app.use("/users", usersRouter);
const memeRouter = require("./router/memes.routes");
app.use("/memes", memeRouter);

mongoose
  .connect(connection)
  .then(() => {
    app.listen(port || 8080, () => {
      console.log("database connected server listening on port " + port);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
