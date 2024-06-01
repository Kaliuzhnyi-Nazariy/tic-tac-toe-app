const { signup, login, logout } = require("../controllers/auth");
const express = require("express");
const { schemas } = require("../models/userSchema");
const validateBody = require("../middlewares/validateBody");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout/:id", logout);

module.exports = router;
