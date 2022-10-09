const ls = require("local-storage");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token=null;
      console.log(req.params);
  if (req.body.token) {
    token = req.body.token;
  } else if (req.params.token) {
    token = req.params.token;
  }

 
  if (!token) {
    return res.status(500).json({ message: "Token Not Found" });
  }
  const verifyStatus = jwt.verify(token, "narnia");
  req.body.token = verifyStatus.username;

  next();
};

module.exports = { verifyToken };
