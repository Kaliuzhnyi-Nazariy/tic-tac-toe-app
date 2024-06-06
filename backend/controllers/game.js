const { Game } = require("../models/gameSchema");
const { User } = require("../models/userSchema");
const { randomizeSymbol } = require("../utils/randomizeSymbol");

const changeIsSearching = async (req, res) => {
  try {
    const { _id } = req.user;

    const keys = Object.keys(req.body);
    if (keys.length !== 1 || !keys.includes("isSearchingGame")) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const user = await User.findByIdAndUpdate({ _id }, req.body, { new: true });

    return res.status(200).json(user);
  } catch (error) {
    console.log("Error in controllers/game/changeIsSearching: ", error.message);
    res.status(500).json({ error: "Internal server error!" });
  }
};

const findOpponent = async (req, res) => {
  try {
    const { _id } = req.user;

    const potentialOpponent = await User.findOne({
      isSearchingGame: true,
      _id: { $ne: { _id } },
    });

    if (!potentialOpponent) {
      return res.status(404).json({ message: "Opponent is not found!" });
    }
    // console.log("Potential opponent: ", potentialOpponent._id);

    // const user =
    await User.findByIdAndUpdate({ _id }, { isSearchingGame: false });

    // console.log(user);

    await User.findByIdAndUpdate(
      { _id: potentialOpponent._id },
      { isSearchingGame: false }
    );

    const symbol = randomizeSymbol();

    const game = await Game.create({
      playerId: _id,
      opponentId: potentialOpponent._id,
      playerSymbol: symbol.user1,
      opponentSymbol: symbol.user2,
    });

    game.save();

    return res.status(200).json({
      playerId: game.playerId,
      opponentId: game.opponentId,
      playerSymbol: game.playerSymbol,
      opponentSymbol: game.opponentSymbol,
    });
    // console.log(game);
  } catch (error) {
    console.log("Error in controllers/game/findOpponent: ", error.message);
    res.status(500).json({ error: "Internal server error!" });
  }
};
module.exports = { changeIsSearching, findOpponent };
