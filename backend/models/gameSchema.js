const { required } = require("joi");
const { model, Schema, default: mongoose } = require("mongoose");

const gameSchema = new Schema({
  playerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  opponentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  playerSymbol: {
    type: String,
    default: "",
  },
  opponentSymbol: {
    type: String,
    default: "",
  },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = { Game, gameSchema };
