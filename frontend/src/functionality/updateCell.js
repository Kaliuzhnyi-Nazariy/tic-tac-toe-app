import { checkWin } from "./checkWin";
// import { initializeGame } from "./initializeGame";

let options = ["", "", "", "", "", "", "", "", ""];

export const updateCell = (e) => {
  // initializeGame();
  e.target.textContent = "X";
  options[e.target.id - 1] = "X";
  checkWin(options);
};

export default updateCell;
