const { signup, login, logout } = require("../controllers/auth");
const express = require("express");
const { schemas } = require("../models/userSchema");
const validateBody = require("../middlewares/validateBody");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

router.post("/signup", validateBody(schemas.signupSchema), signup);
router.post("/login", validateBody(schemas.loginSchema), login);
router.post("/logout", authenticate, logout);

module.exports = router;
