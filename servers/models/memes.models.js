const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memeSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("memes", memeSchema);