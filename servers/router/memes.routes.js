const express = require("express");
const router = express.Router();

// Controllers
const { verifyToken } = require("./verifytoken");
const { createMemes } = require("../controllers/memes.controller");
const { getAllMemes } = require("../controllers/memes.controller");
const { getMyMemes } = require("../controllers/memes.controller");
const { deleteMyMemes } = require("../controllers/memes.controller");
const { likeMyMemes } = require("../controllers/memes.controller");
// Routers
router.post("/create", verifyToken, createMemes);
router.get("/get-all-memes",  getAllMemes);
router.get("/get-my-memes/:token",verifyToken,  getMyMemes);
router.delete("/delete-my-memes/:id",  deleteMyMemes);
router.post("/like-my-memes",  likeMyMemes);

module.exports = router;