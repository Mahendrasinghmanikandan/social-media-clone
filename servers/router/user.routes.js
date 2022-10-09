const express = require('express');
const router = express.Router();

// Controllers
const { createUsers, validateUser } = require("../controllers/user.controller");


router.post("/create", createUsers);
router.post("/validate-user", validateUser);

module.exports = router;