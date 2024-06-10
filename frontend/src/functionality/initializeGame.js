// import { findOpponent } from "../../../backend/utils/findOpponent.js";
import { resetOptions } from "./updateCell.js";
// import { runningGame, checkRunning } from "./utils/runningGame.js";

export const initializeGame = () => {
  // const statusText = document.querySelector(".status-text");
  const cells = document.querySelectorAll(".cell");
  // console.log("initialized");

  // runningGame(true);

  cells.forEach((cell) => (cell.textContent = ""));
  resetOptions();
  // checkRunning();

  localStorage.setItem("runningGame", "true");

  // const curUser = users.user1;
  // statusText.textContent = `${curUser}'s turn`;

  // localStorage.setItem("playerSymbol", curUser);
};

export default initializeGame;
