const memesModel = require("../models/memes.models");

const createMemes = async (req, res) => {
  const fromData = {
    message: req.body.formData.message,
    img: req.body.formData.img,
    username: req.body.token,
    likes:0,
  };
  const meme = new memesModel(fromData);
  try {
    await meme.save();
    return res.status(200).json({ message: "Memes Successfully Uploaded" });
  } catch (err) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

const getAllMemes = async (req, res) => {
  try {
    const result = await memesModel.find().sort({ createdAt: -1 });
    return res.status(200).send({ data: result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

const getMyMemes = async (req, res) => {
  try {
    const result = await memesModel
      .find({ username: req.body.token })
      .sort({ createdAt: -1 });
    return res.status(200).send({ data: result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

const deleteMyMemes = async (req, res) => {
  try {
    const result = await memesModel.deleteOne({ _id: req.params.id });
    return res
      .status(200)
      .send({ message: "Successfully Deleted", data: result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};
const likeMyMemes = async (req, res) => {
  const { id, count } = req.body;
  try {
    const result = await memesModel.findOneAndUpdate({ _id: id },{likes:count+1});
    return res
      .status(200)
      .send({ message: "Successfully Deleted", data: result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

module.exports = {
  createMemes,
  getAllMemes,
  getMyMemes,
  deleteMyMemes,
  likeMyMemes,
};
