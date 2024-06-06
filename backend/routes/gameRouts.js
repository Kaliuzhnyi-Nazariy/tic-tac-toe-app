const express = require("express");
const authenticate = require("../middlewares/authenticate");
const { changeIsSearching, findOpponent } = require("../controllers/game");
const router = express.Router();

router.patch("/isSearching", authenticate, changeIsSearching);

router.get("/findOpponent", authenticate, findOpponent);

module.exports = router;
