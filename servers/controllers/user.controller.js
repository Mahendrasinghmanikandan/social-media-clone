const Users = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var ls = require("local-storage");

const createUsers = async (req, res) => {
  const { name, username, password } = req.body;

  const formData = {
    name,
    username,
    password: bcrypt.hashSync(password, 10),
  };

  const users = new Users(formData);

  try {
    await users.save();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const validateUser = async (req, res) => {
  const { username, password } = req.body;

  let userExist;
  try {
    userExist = await Users.findOne({ username: username });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something went wrong" });
  }

  if (!userExist) {
    return res.status(400).json({ message: "User Not Found" });
  }

  const compare = bcrypt.compareSync(password, userExist.password);
  if (!compare) {
    return res.status(400).json({ message: "Invalid Username | Passwords " });
  }
  console.log(userExist);
  const token = jwt.sign({ username: userExist.username }, "narnia");
  console.log(token);
  return res
    .status(200)
    .json({ message: "success", data: token, id: userExist.username});
};

module.exports = { createUsers, validateUser };
